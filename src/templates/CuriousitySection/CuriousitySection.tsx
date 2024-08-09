import { Typography, TextWrapper } from "../../atoms";
import img from "../../Images/image_section2.png";

export const CuriousitySection = () => {
  return (
    <section className="flex flex-row-reverse mt-32 gap-32 items-center max-[830px]:flex-col">
      <div>
        <Typography tag="h3" variant="sectionHeader">
          Curious about the{" "}
          <Typography tag="span" customStyles="text-cBackground-primary">
            StockX{" "}
          </Typography>
          Mystery Box?
        </Typography>
        <TextWrapper>
          <Typography tag="span">
            Experience the thrill of unboxing cutting-edge gadgets with Stockx
            Mystery Boxes. Each box is a treasure trove of high-quality
            electronics, handpicked to elevate your tech game.
          </Typography>
          <Typography tag="span">
            Expect the unexpected! Our boxes are packed with the latest gadgets,
            from smartphones to gaming consoles, ensuring you get the best tech
            surprises every time.
          </Typography>
        </TextWrapper>
      </div>
      <img src={img} className="w-[50%] rounded-[30px] max-[830px]:w-[100%]" />
    </section>
  );
};
