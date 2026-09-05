/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg-base)",
        surface: "var(--bg-surface)",
        primary: "var(--text-primary)",
        muted: "var(--text-muted)",
        accent: "var(--accent-primary)",
        glow: "var(--accent-glow)",
        border: "var(--border-subtle)",
      }
    },
  },
  plugins: [],
}
