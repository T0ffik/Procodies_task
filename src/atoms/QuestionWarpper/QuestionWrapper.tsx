import { PropsWithChildren } from "react";

export const QuestionWrapper = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col grow basis-0">{children}</div>;
};
