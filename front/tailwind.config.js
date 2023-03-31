/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        "mobile-topbar": "0px 0px 2px rgba(23, 43, 77, 4)",
      },
      gridTemplateColumns: {
        menu: "auto 1fr",
        "menu-mobile": "1fr auto 1fr",
        content: "2fr 3fr 2fr 1fr",
      },
      gridTemplateRows: {
        menu: "auto 1fr",
      },
      colors: {
        neutral: {
          50: "#F5F6F7",
          100: "#EBEFF5",
          150: "#E1E5EA",
          200: "#CDD3DB",
          250: "#8696A9",
          300: "#5D738D",
          350: "#355070",
          400: "#1F2F42",
          500: "#00224B",
        },
        blue: {
          50: "#ECF2F9",
          100: "#D5E4F6",
          150: "#ACC8EE",
          200: "#91B5E9",
          250: "#75A3E3",
          300: "#5E82B6",
          350: "#466288",
        },
        green: {
          50: "#EDF6F7",
          100: "#CEECF2",
          150: "#A1D7E2",
          200: "#6EB2BF",
          250: "#458E9D",
          300: "#3B7A87",
          350: "#336A75",
        },
        yellow: {
          50: "#FFF3DB",
          100: "#FFEFC7",
          150: "#FFE7AA",
          200: "#FFD466",
          250: "#FFBE1A",
          300: "#EBA800",
          350: "#CC9200",
        },
        red: {
          50: "#F9ECEC",
          100: "#F9C8CA",
          150: "#EEA0A2",
          200: "#EE878A",
          250: "#E67377",
          300: "#D45458",
          350: "#AB494C",
          400: "#FFCBC5",
        },
        pink: {
          50: "#FAECEB",
          100: "#FFDAD6",
          150: "#FFC8C2",
          200: "#FFADA3",
          250: "#FF9184",
          300: "#E5786C",
          350: "#C76357",
        },
        purple: {
          50: "#F4ECF9",
          100: "#E0D4E7",
          150: "#AB92B9",
          200: "#997EA9",
          250: "#866C96",
          300: "#765A87",
          350: "#644578",
        },
      },
      fontFamily: {
        prompt: ["Prompt"],
        source: ["Source"],
      },
    },
  },
  plugins: [],
};
