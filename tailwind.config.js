import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'space-gradient': 'linear-gradient(to bottom, #0f172a, #1e293b)',
        'purple-glow': 'radial-gradient(circle at center, rgba(139, 92, 246, 0.3) 0%, rgba(0, 0, 0, 0) 70%)',
        'blue-glow': 'radial-gradient(circle at center, rgba(59, 130, 246, 0.3) 0%, rgba(0, 0, 0, 0) 70%)',
        'grid-pattern': 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\' width=\'32\' height=\'32\' fill=\'none\' stroke=\'rgb(255 255 255 / 0.03)\'%3e%3cpath d=\'M0 .5H31.5V32\'/%3e%3c/svg%3e")',
      },
      colors: {
        'deep-blue': '#0f172a',
        'midnight-blue': '#1e293b',
        'neon-purple': '#8b5cf6',
        'neon-blue': '#3b82f6',
        'dark-card': '#1a1f36',
      },
      boxShadow: {
        'neon-purple': '0 0 15px rgba(139, 92, 246, 0.5)',
        'neon-blue': '0 0 15px rgba(59, 130, 246, 0.5)',
        'inner-glow': 'inset 0 0 10px rgba(255, 255, 255, 0.1)',
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            background: {
              DEFAULT: "#0f172a"
            },
            foreground: {
              DEFAULT: "#ECEDEE"
            },
            primary: {
              50: "#e0f2fe",
              100: "#bae6fd",
              200: "#7dd3fc",
              300: "#38bdf8",
              400: "#0ea5e9",
              500: "#0284c7",
              600: "#0369a1",
              700: "#075985",
              800: "#0c4a6e",
              900: "#082f49",
              DEFAULT: "#38bdf8",
              foreground: "#000000"
            },
            secondary: {
              50: "#f5f3ff",
              100: "#ede9fe",
              200: "#ddd6fe",
              300: "#c4b5fd",
              400: "#a78bfa",
              500: "#8b5cf6",
              600: "#7c3aed",
              700: "#6d28d9",
              800: "#5b21b6",
              900: "#4c1d95",
              DEFAULT: "#8b5cf6",
              foreground: "#000000"
            },
            content1: {
              DEFAULT: "#1a1f36",
              foreground: "#ECEDEE"
            },
            content2: {
              DEFAULT: "#252b42",
              foreground: "#ECEDEE"
            },
            content3: {
              DEFAULT: "#2d3748",
              foreground: "#ECEDEE"
            },
            content4: {
              DEFAULT: "#374151",
              foreground: "#ECEDEE"
            }
          }
        }
      }
    })
  ],
};
