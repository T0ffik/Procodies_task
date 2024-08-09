import { useState } from "react";
import img1 from "../../Images/mystery_box1.png";
import img2 from "../../Images/mystery_box2.png";
import img3 from "../../Images/mystery_box3.jpeg";
import { ImagePicker } from "../../atoms";

export const ImageSection = () => {
  const [image, setImage] = useState(img1);

  return (
    <div className=" pr-[5px] pt-[16px] flex flex-col gap-[16px] relative max-[1430px]:pr-[0px] max-[1430px]:pt-[0px]">
      <div className="absolute top-0 right-0 flex flex-col items-center w-[160px] h-[160px] bg-cBackground-primary justify-center rounded-[50%]">
        <span className="text-fsLarge font-normal text-cText-white">$1.99</span>
        <span className="text-cText-white text-[14px]">
          Original value $500
        </span>
      </div>
      <img src={image} className=" max-w-[481px]" />
      <div className="flex h-[132px] gap-[42px] ">
        <ImagePicker
          src={img1}
          onClick={() => setImage(img1)}
          focused={img1 === image}
        />
        <ImagePicker
          src={img2}
          onClick={() => setImage(img2)}
          focused={img2 === image}
        />
        <ImagePicker
          src={img3}
          onClick={() => setImage(img3)}
          focused={img3 === image}
        />
      </div>
    </div>
  );
};
