import { PropsWithChildren } from "react";

interface SectionsTextProps extends PropsWithChildren {
  variant?: "footerText" | "default";
}

export const Typography = ({
  children,
  variant = "default",
}: SectionsTextProps) => {
  const footerStyles =
    "text-cText-primary text-fsFooterContent leading-16 font-normal mt-4";
  const defaultStyles = "text-fsContentText font-normal leading-24";
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
