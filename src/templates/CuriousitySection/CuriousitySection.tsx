import { SectionsText, TextWrapper } from "../../atoms";
import img from "../../Images/image_section2.png";

export const CuriousitySection = () => {
  return (
    <section className="flex flex-row-reverse mt-[32px] gap-[32px] items-center">
      <div>
        <h3 className="text-cText-primary font-bold text-fsSubSectionTitle grow-[1] leading-[52px]">
          Curious about the{" "}
          <span className="text-cBackground-primary">StockX </span>
          Mystery Box?
        </h3>
        <TextWrapper>
          <SectionsText>
            Experience the thrill of unboxing cutting-edge gadgets with Stockx
            Mystery Boxes. Each box is a treasure trove of high-quality
            electronics, handpicked to elevate your tech game.
          </SectionsText>
          <SectionsText>
            Expect the unexpected! Our boxes are packed with the latest gadgets,
            from smartphones to gaming consoles, ensuring you get the best tech
            surprises every time.
          </SectionsText>
        </TextWrapper>
      </div>
      <img src={img} className="w-[50%] rounded-[30px]" />
    </section>
  );
};
