import { ReactNode } from "react";

interface QuestionWrapperProps {
  children: ReactNode;
}

export const QuestionWrapper = ({ children }: QuestionWrapperProps) => {
  return <div className="flex flex-col grow basis-0">{children}</div>;
};
