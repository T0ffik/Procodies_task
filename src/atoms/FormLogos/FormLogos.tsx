import mcafee from "../../Images/mcafee.png";
import truste from "../../Images/truste.png";
import bit from "../../Images/256bit.png";

export const FormLogos = () => {
  return (
    <div className="flex gap-16 mt-24 max-[531px]:flex-col">
      <img src={mcafee} alt="mcafee logo" className="h-[40px]" />
      <img src={truste} alt="truste logo" className="h-[40px]" />
      <img src={bit} alt="256bit logo" className="h-[40px]" />
    </div>
  );
};
