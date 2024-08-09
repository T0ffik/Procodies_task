import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        className={
          `${
            props.error && "border-cBorder-error"
          } border-[1px] border-cBorder-default focus:border-cBorder-focus rounded-[10px] py-12 px-16 placeholder:text-cPlaceholder-default placeholder:focus:text-cPlaceholder-focus ` +
          props.className
        }
      />
    );
  }
);
