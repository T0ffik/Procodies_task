import { createElement, PropsWithChildren } from "react";

type TagVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
interface SectionsTextProps extends PropsWithChildren {
  variant?: "footerText" | "default" | "footerHeader" | "sectionHeader";
  tag?: TagVariants;
  customStyles?: string;
  additionalStyles?: string;
}

export const Typography = ({
  children,
  variant = "default",
  tag = "p",
  customStyles,
  additionalStyles = "",
}: SectionsTextProps) => {
  const footerStyles =
    "text-cText-primary text-fsFooterContent leading-16 font-normal mt-4";
  const defaultStyles = "text-fsContentText font-normal leading-24";
  const footerHeader =
    "text-fsFooterTitle font-semibold leading-16 text-cText-primary";
  const sectionHeader =
    "text-cText-primary font-bold text-fsSubSectionTitle grow-[1] leading-52";
  const getStyles = () => {
    if (customStyles) {
      return customStyles;
    }
    switch (variant) {
      case "footerText":
        return footerStyles;
      case "footerHeader":
        return footerHeader;
      case "sectionHeader":
        return sectionHeader;
      case "default":
      default:
        return defaultStyles;
    }
  };
  return createElement(
    tag,
    { className: getStyles() + additionalStyles },
    children
  );
};
