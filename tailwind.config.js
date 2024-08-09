/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  theme: {
    colors: {
      "cBackground-secondary": "#F5F5F5",
      "cBackground-primary": "#006340",
      "cBorder-form": "#DBDBDB",
      "cBorder-focus": "#2D473E",
      "cBorder-default": "#ADADAD",
      "cBorder-error": "red",
      "cText-primary": "#293632",
      "cText-title": "#2D473E",
      "cText-white": "#FFFFFF",
      "cPlaceholder-default": "#808080",
      "cPlaceholder-focus": "#2D473E",
    },
    fontSize: {
      fsPageTitle: "52px",
      fsSectionTitle: "48px",
      fsSubSectionTitle: "42px",
      fsLarge: "38px",
      fsMedium: "32px",
      fsSmall: "22px",
      fsSubTitle: "20px",
      fsContentText: "16px",
      fsFooterTitle: "12px",
      fsFooterContent: "10px",
    },
    lineHeight: {
      lhPageTitle: "55px",
      lhSmall: "25.78px",
      lhMedium: "37.5px",
    },
  },
  plugins: [],
};
