import { useState } from "react";
import img1 from "../../Images/mystery_box1.png";
import img2 from "../../Images/mystery_box2.png";
import img3 from "../../Images/mystery_box3.jpeg";
import { ImagePicker, Typography } from "../../atoms";

export const ImageSection = () => {
  const [image, setImage] = useState(img1);

  return (
    <div className=" pr-[5px] pt-16 flex flex-col gap-16 relative max-[1430px]:pr-[0px] max-[1430px]:pt-[0px]">
      <div className="absolute top-[0] right-[0] flex flex-col items-center w-[160px] h-[160px] bg-cBackground-primary justify-center rounded-[50%] max-[531px]:w-[30.132vw] max-[531px]:h-[30.132vw] ">
        <Typography
          tag="span"
          customStyles="text-fsLarge font-normal text-cText-white max-[531px]:text-[7.156vw]"
        >
          $1.99
        </Typography>
        <Typography
          tag="span"
          customStyles="text-cText-white text-[14px] max-[531px]:text-[2.637vw]"
        >
          Original value $500
        </Typography>
      </div>
      <img src={image} className="max-w-[481px] max-[531px]:max-w-[100%]" />
      <div className="flex gap-[42px] max-[531px]:gap-[7.91vw] ">
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
