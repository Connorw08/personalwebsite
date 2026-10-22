import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

// The name is "laser cut", then traces run out of it into a draggable node graph.
// Each node opens the tab it belongs to.
const NODES = [
  { id: 'parsons', title: 'Parsons', tab: 'experience' },
  { id: 'beam', title: 'BeAM UNC', tab: 'experience' },
  { id: 'unc', title: 'UNC Chapel Hill', tab: 'education' },
  { id: 'sort', title: 'Sort Royale', tab: 'projects' },
  { id: 'poke', title: 'Pokédex', tab: 'projects' },
  { id: 'safe', title: 'Safe Eats', tab: 'projects' },
];

const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

const LAYOUTS = {
  wide: {
    w: 1000,
    h: 500,
    nameLines: ['Connor Whitlow'],
    lineGap: 0,
    font: 132,
    sub: 'Full-stack software engineer at Parsons · UNC Chapel Hill ’26',
    subSize: 20,
    subGap: 48,
    nodeH: 38,
    titleSize: 15,
    place: (i, w, ay) => ({
      x: clamp(80 + i * 168 - w / 2, 0, 1000 - w),
      y: ay + [86, 178, 100, 190, 84, 172][i],
    }),
  },
  narrow: {
    w: 400,
    h: 500,
    nameLines: ['Connor', 'Whitlow'],
    lineGap: 68,
    font: 72,
    sub: 'Full-stack software engineer at Parsons',
    subSize: 15,
    subGap: 42,
    nodeH: 34,
    titleSize: 13,
    place: (i, w, ay) => ({
      x: i < 3 ? 0 : 400 - w,
      y: ay + 64 + (i % 3) * 74,
    }),
  },
};

const PAD_X = 16;

function useNarrow() {
  const query = '(max-width: 639px)';
  const [narrow, setNarrow] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setNarrow(mq.matches);
    onChange(); // the viewport may have changed between first render and this effect
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return narrow;
}

function useFontsReady() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let alive = true;
    const timeout = new Promise((r) => setTimeout(r, 1500));
    // Safari can resolve load() before the face is usable, so also wait for fonts.ready.
    const load = document.fonts
      ? document.fonts.load('700 96px Archivo').then(() => document.fonts.ready)
      : Promise.resolve();
    Promise.race([load, timeout]).then(() => alive && setReady(true));
    return () => {
      alive = false;
    };
  }, []);
  return ready;
}

const Graph = ({ layout, onOpen }) => {
  const svgRef = useRef(null);
  const nameRef = useRef(null);
  const titleRefs = useRef({});
  const drag = useRef(null);

  const [font, setFont] = useState(layout.font);
  const [box, setBox] = useState(null); // name bbox
  const [nodes, setNodes] = useState(null); // [{...node, x, y, w}]

  // Fit the name to the sheet, then place anchors and nodes from real measurements.
  const fitPasses = useRef(0);
  const [refit, setRefit] = useState(0);

  // If a font face arrives after the first fit (seen on iOS Safari), fit again.
  useEffect(() => {
    if (!document.fonts) return;
    const onLoaded = () => {
      fitPasses.current = 0;
      setRefit((r) => r + 1);
    };
    document.fonts.addEventListener('loadingdone', onLoaded);
    return () => document.fonts.removeEventListener('loadingdone', onLoaded);
  }, []);

  useLayoutEffect(() => {
    const bb = nameRef.current.getBBox();
    // Measure what's actually drawn: Safari's getBBox can disagree with the rendered
    // width for stretched variable fonts, which let the name run off the screen.
    const svgRect = svgRef.current.getBoundingClientRect();
    const unitsPerPx = svgRect.width ? layout.w / svgRect.width : 1;
    const drawn = nameRef.current.getBoundingClientRect().width * unitsPerPx;
    const width = Math.max(bb.width, drawn || 0);
    const target = layout.w * (layout.w < 600 ? 0.94 : 0.98);
    const next = Math.floor((font * target) / width);
    if (Math.abs(width - target) > 6 && next !== font && fitPasses.current < 6) {
      fitPasses.current += 1;
      setFont(next);
      return;
    }
    setBox({ x: bb.x, y: bb.y, w: Math.min(bb.width, layout.w), h: bb.height });
  }, [font, layout, refit]);

  // Hang the subtitle and the trace bus off the measured name, whatever size it fit to.
  const nameY = Math.round(font * 0.78) + 12;
  const subY = box ? box.y + box.h + layout.subGap * 0.6 : nameY + layout.subGap;
  const anchorY = subY + 36;

  useLayoutEffect(() => {
    if (!box) return;
    setNodes(
      NODES.map((n, i) => {
        const t = titleRefs.current[n.id];
        const w = Math.ceil(PAD_X * 2 + (t ? t.getComputedTextLength() : n.title.length * 8.5));
        return { ...n, w, ...layout.place(i, w, anchorY) };
      })
    );
  }, [box, layout, anchorY]);

  const anchors = box
    ? NODES.map((_, i) => box.x + 20 + (i * (box.w - 40)) / (NODES.length - 1))
    : [];

  const toSvg = (e) => {
    const pt = svgRef.current.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    return pt.matrixTransform(svgRef.current.getScreenCTM().inverse());
  };

  const onPointerDown = (e, idx) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    const p = toSvg(e);
    const n = nodes[idx];
    drag.current = { idx, dx: p.x - n.x, dy: p.y - n.y, sx: p.x, sy: p.y, moved: false };
  };

  const onPointerMove = (e) => {
    const d = drag.current;
    if (!d) return;
    const p = toSvg(e);
    if (!d.moved && Math.hypot(p.x - d.sx, p.y - d.sy) < 4) return;
    d.moved = true;
    setNodes((prev) =>
      prev.map((n, i) =>
        i === d.idx
          ? {
              ...n,
              x: clamp(p.x - d.dx, 0, layout.w - n.w),
              y: clamp(p.y - d.dy, anchorY + 24, layout.h - layout.nodeH),
            }
          : n
      )
    );
  };

  const onPointerUp = (e, n) => {
    const d = drag.current;
    drag.current = null;
    if (d && !d.moved) onOpen(n.tab);
  };

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${layout.w} ${layout.h}`}
      className="w-full h-auto block overflow-visible select-none"
      style={{ touchAction: 'pan-y' }}
    >
      <text
        ref={nameRef}
        className="laser-name"
        x="0"
        y={nameY}
        aria-hidden="true"
        style={{ fontSize: font, fontWeight: 700, fontStretch: '125%', letterSpacing: '-0.02em' }}
      >
        {layout.nameLines.map((line, i) => (
          <tspan key={line} x="0" dy={i === 0 ? 0 : layout.lineGap * (font / layout.font)}>
            {line}
          </tspan>
        ))}
      </text>

      <text
        className="laser-after"
        x="2"
        y={subY}
        fill="var(--fog)"
        style={{ fontSize: layout.subSize, fontStretch: '100%' }}
      >
        {layout.sub}
      </text>

      {box && (
        <line
          className="laser-after"
          x1={anchors[0]}
          x2={anchors[anchors.length - 1]}
          y1={anchorY}
          y2={anchorY}
          stroke="var(--rule-strong)"
        />
      )}

      {/* Traces sit behind the nodes */}
      {nodes &&
        nodes.map((n, i) => {
          const ax = anchors[i];
          const nx = n.x + n.w / 2;
          const my = (anchorY + n.y) / 2;
          return (
            <g key={`t-${n.id}`} style={{ '--i': i }}>
              <path
                className="trace"
                pathLength="1"
                d={`M${ax},${anchorY} C${ax},${my} ${nx},${my} ${nx},${n.y}`}
                fill="none"
                stroke="var(--carolina)"
                strokeOpacity="0.55"
                strokeWidth="1.25"
              />
              <circle className="trace-dot" cx={ax} cy={anchorY} r="3" fill="var(--carolina)" />
            </g>
          );
        })}

      {(nodes || NODES).map((n, i) => {
        const placed = !!nodes;
        return (
          <g
            key={n.id}
            transform={placed ? `translate(${n.x},${n.y})` : undefined}
            className={`hero-node ${placed ? '' : 'invisible'}`}
            role="button"
            tabIndex={placed ? 0 : -1}
            aria-label={`${n.title}, open ${n.tab}`}
            onPointerDown={placed ? (e) => onPointerDown(e, i) : undefined}
            onPointerMove={placed ? onPointerMove : undefined}
            onPointerUp={placed ? (e) => onPointerUp(e, n) : undefined}
            onPointerCancel={() => (drag.current = null)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onOpen(n.tab);
              }
            }}
          >
            <g className="node-in" style={{ '--i': i }}>
              <rect
                width={n.w || 120}
                height={layout.nodeH}
                rx="6"
                fill="var(--raised)"
                stroke="var(--rule-strong)"
              />
              <text
                ref={(el) => (titleRefs.current[n.id] = el)}
                x={PAD_X}
                y={layout.nodeH / 2 + layout.titleSize * 0.36}
                fill="var(--chalk)"
                style={{ fontSize: layout.titleSize, fontWeight: 600, fontStretch: '112%' }}
              >
                {n.title}
              </text>
            </g>
          </g>
        );
      })}
    </svg>
  );
};

const HeroGraph = ({ onOpen }) => {
  const narrow = useNarrow();
  const ready = useFontsReady();
  const [run, setRun] = useState(0);
  const layout = narrow ? LAYOUTS.narrow : LAYOUTS.wide;

  return (
    <div>
      <div className="flex justify-end mb-2">
        <button
          type="button"
          onClick={() => setRun((r) => r + 1)}
          aria-label="Replay intro animation"
          title="Replay"
          className="w-11 h-11 -mr-3 text-xl text-slate hover:text-carolina transition-colors duration-150"
        >
          ↻
        </button>
      </div>
      <h1 className="sr-only">Connor Whitlow</h1>
      <div style={{ aspectRatio: `${layout.w} / ${layout.h}` }}>
        {ready && <Graph key={`${run}-${narrow}`} layout={layout} onOpen={onOpen} />}
      </div>
    </div>
  );
};

export default HeroGraph;
