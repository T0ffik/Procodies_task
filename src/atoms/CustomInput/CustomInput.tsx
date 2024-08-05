import { InputHTMLAttributes } from "react";

export const CustomInput = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className={
        "border-[1px] border-cBorder-default focus:border-cBorder-focus rounded-[10px] py-[12px] px-[16px] placeholder:text-cPlaceholder-default placeholder:focus:text-cPlaceholder-focus " +
        props.className
      }
    />
  );
};
