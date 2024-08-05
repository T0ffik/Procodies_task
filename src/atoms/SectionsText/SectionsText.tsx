import { ReactNode } from "react";

interface SectionsTextProps {
  children: ReactNode;
}

export const SectionsText = ({ children }: SectionsTextProps) => {
  return (
    <span className="text-fsContentText font-normal leading-[24px]">
      {children}
    </span>
  );
};
