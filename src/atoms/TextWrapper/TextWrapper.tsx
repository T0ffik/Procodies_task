import { ReactNode } from "react";

interface TextWrapperProps {
  children: ReactNode;
}

export const TextWrapper = ({ children }: TextWrapperProps) => {
  return <p className="mt-24 flex flex-col gap-[8px]">{children}</p>;
};
