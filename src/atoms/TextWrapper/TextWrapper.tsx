import { PropsWithChildren } from "react";

export const TextWrapper = ({ children }: PropsWithChildren) => {
  return <div className="mt-24 flex flex-col gap-[8px]">{children}</div>;
};
