import { Typography, TextWrapper } from "../../atoms";
import img from "../../Images/image_section2.png";

export const CuriousitySection = () => {
  return (
    <section className="flex flex-row-reverse mt-32 gap-32 items-center max-[830px]:flex-col">
      <div>
        <h3 className="text-cText-primary font-bold text-fsSubSectionTitle grow-[1] leading-52">
          Curious about the{" "}
          <span className="text-cBackground-primary">StockX </span>
          Mystery Box?
        </h3>
        <TextWrapper>
          <Typography>
            Experience the thrill of unboxing cutting-edge gadgets with Stockx
            Mystery Boxes. Each box is a treasure trove of high-quality
            electronics, handpicked to elevate your tech game.
          </Typography>
          <Typography>
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
