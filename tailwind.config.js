/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1280px",
      },
    },
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
