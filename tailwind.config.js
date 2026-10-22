/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Navy drafting paper, chalk markings, one Carolina blue accent.
        ink: 'var(--ink)',
        raised: 'var(--raised)',
        well: 'var(--well)',
        chalk: 'var(--chalk)',
        fog: 'var(--fog)',
        slate: 'var(--slate)',
        carolina: 'var(--carolina)',
        'carolina-deep': 'var(--carolina-deep)',
        rule: 'var(--rule)',
        'rule-strong': 'var(--rule-strong)',
        signal: 'var(--signal)',
        fault: 'var(--fault)',
      },
      fontFamily: {
        sans: ['Archivo', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        sheet: '72rem',
      },
    },
  },
  plugins: [],
};
