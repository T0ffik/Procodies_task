import { ReactNode } from "react";

interface SectionsTextProps {
  children: ReactNode;
  variant?: "footerText" | "default";
}

export const Typography = ({
  children,
  variant = "default",
}: SectionsTextProps) => {
  const footerStyles =
    "text-cText-primary text-fsFooterContent leading-[16px] font-normal mt-[4px]";
  const defaultStyles = "text-fsContentText font-normal leading-[24px]";
  const getStyles = () => {
    switch (variant) {
      case "footerText":
        return footerStyles;
      case "default":
      default:
        return defaultStyles;
    }
  };
  return <span className={getStyles()}>{children}</span>;
};
