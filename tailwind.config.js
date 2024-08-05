/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  theme: {
    colors: {
      "background-secondary": "#F5F5F5",
      "background-primary": "#006340",
      "border-form": "#DBDBDB",
      "border-focus": "#2D473E",
      "border-default": "#ADADAD",
      "text-primary": "#293632",
      "text-title": "#2D473E",
    },
    fontSize: {
      pageTitle: "52px",
      sectionTitle: "48px",
      subSectionTitle: "42px",
      large: "38px",
      medium: "32px",
      small: "22px",
      subTitle: "20px",
      contentText: "16px",
      footerTitle: "12px",
      footerContent: "10px",
    },
  },
  plugins: [],
};
