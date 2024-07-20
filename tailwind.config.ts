import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
     
      backgroundImage: theme => ({
        'custom-gradient': 'linear-gradient(90deg, rgba(245,218,255,1) 0%, rgba(255,255,255,0) 100%)',
      }),
      opacity: {
        '60': '0.6',
      },
      
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px",
        "3xl": "1600px",
        "4xl": "1800px",
      },
      colors: {
        menuBtn: '#A15FF4',
        ourWhite: '#FFFFFF',
        absBlack: '#000000',
        textBlack: '#383838',
        iconBlack: '#535763',
        labelOrange: "#F8AF5A",
        labelGrey: '#62FC8D',
        labelDarkBlue: '#4169E1',
        labelDarkYellow: '#FFBE0A',
        body_bg: "rgb(245,218,255)",
        fieldbgBlue: "#369FFF",
        fieldbgGreen: "#8AC53E",
        statisticGray: "#949494",
        statisticPurple: '#7B61FF',
        statisticDarkPink: "#CE2A96",
        bellowRightFieldBlack: "#121212",
        bellowRightFieldPurple: "#5A6ACF",
        bellowRightFieldLightPurple: "#8593ED",
        bellowRightFieldPink: "#FF81C5",
        bellowRightFieldLightWhite1: "#DDE4F0",
        bellowRightFieldLightWhite2: "#FBFCFE",
        bellowRightFieldLightWhite3: "#FDFBFB",



      }
    },
  },
  plugins: [],
};
export default config;
