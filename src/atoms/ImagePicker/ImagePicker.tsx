import { ImgHTMLAttributes } from "react";

interface ImagePickerProps extends ImgHTMLAttributes<HTMLImageElement> {
  focused: boolean;
}

export const ImagePicker = (props: ImagePickerProps) => {
  return (
    <img
      {...props}
      className={`cursor-pointer rounded-[13.94px] w-[132px] h-[132px] max-[531px]:w-[24.859vw] max-[531px]:h-[24.859vw] grow basis-0 ${
        props.focused ? "border-cBackground-primary  border-[0.93px]" : ""
      }`}
    />
  );
};
