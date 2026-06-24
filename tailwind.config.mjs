/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        decode: '#667eea',
        'decode-dim': 'rgba(102, 126, 234, 0.15)',
        radar: '#4285f4',
        'radar-dim': 'rgba(66, 133, 244, 0.15)',
        deepread: '#10ac84',
        'deepread-dim': 'rgba(16, 172, 132, 0.15)',
        evolution: '#6c5ce7',
        workshop: '#e8a820',
        // Dark theme
        'bg-dark': '#0f0c29',
        'bg-dark-secondary': '#1a1a3e',
        'bg-dark-tertiary': '#24243e',
        'text-dark': 'rgba(255, 255, 255, 0.92)',
        'text-dark-secondary': 'rgba(255, 255, 255, 0.60)',
        'border-dark': 'rgba(255, 255, 255, 0.08)',
        // Light theme
        'bg-light': '#ffffff',
        'bg-light-secondary': '#f8f9fb',
        'text-light': '#1a1a2e',
        'text-light-secondary': '#555555',
        'border-light': '#eeeeee',
      },
      fontFamily: {
        sans: [
          '-apple-system', 'BlinkMacSystemFont',
          '"PingFang SC"', '"Hiragino Sans GB"',
          '"Microsoft YaHei"', '"Noto Sans SC"',
          'sans-serif',
        ],
        mono: [
          '"SF Mono"', '"Fira Code"', '"Cascadia Code"',
          '"JetBrains Mono"', 'monospace',
        ],
      },
      fontSize: {
        'body': '17px',
      },
      lineHeight: {
        'relaxed-cn': '1.8',
      },
      maxWidth: {
        'prose-cn': '680px',
        'container': '1200px',
      },
      spacing: {
        'nav': '60px',
        'section': '4rem',
      },
    },
  },
  plugins: [],
};
