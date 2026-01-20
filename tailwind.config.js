/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        "[auto,auto,1fr]": "auto auto 1fr",
      },
    },
  },
  daisyui: {
    themes: [
      {
        premiumLight: {
          primary: "#6D28D9",
          "primary-content": "#FFFFFF",
          secondary: "#06B6D4",
          "secondary-content": "#001316",
          accent: "#F59E0B",
          "accent-content": "#1A1200",
          neutral: "#111827",
          "neutral-content": "#E5E7EB",
          "base-100": "#FFFFFF",
          "base-200": "#F8FAFC",
          "base-300": "#E5E7EB",
          "base-content": "#0F172A",
          info: "#0EA5E9",
          success: "#22C55E",
          warning: "#F59E0B",
          error: "#EF4444",
        },
      },
      {
        premiumDark: {
          primary: "#8B5CF6",
          "primary-content": "#0B0714",
          secondary: "#22D3EE",
          "secondary-content": "#001014",
          accent: "#F59E0B",
          "accent-content": "#1A1200",
          neutral: "#0B1220",
          "neutral-content": "#E5E7EB",
          "base-100": "#070A12",
          "base-200": "#0B1020",
          "base-300": "#111A2E",
          "base-content": "#E5E7EB",
          info: "#38BDF8",
          success: "#34D399",
          warning: "#FBBF24",
          error: "#FB7185",
        },
      },
    ],
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
};
