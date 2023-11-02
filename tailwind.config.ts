import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        worksans: ['"Work Sans"', "Helvetica"],
        spacemono: ['"Space Mono"', "Helvetica"],
      },
      fontSize: {
        colon: [
          "20px",
          {
            fontWeight: "700",
            lineHeight: "55px",
          },
        ],
        "2xl": "22px",
        "3xl": [
          "28px",
          {
            fontWeight: "700",
            lineHeight: "1.4",
          },
        ],
        "4xl": "38px",
        "5xl": [
          "51px",
          {
            fontWeight: "700",
            lineHeight: "1.1",
          },
        ],
        "7xl": [
          "67px",
          {
            fontWeight: "600",
            lineHeight: "1.1",
          },
        ],
      },
      lineHeight: {
        normal: "1.1",
        tight: "1.2",
        snug: "1.4",
        relaxed: "1.6",
      },
    },
  },
  plugins: [],
} satisfies Config;
