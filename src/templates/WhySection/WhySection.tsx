import { SectionsText, TextWrapper } from "../../atoms";
import img from "../../Images/image_section2.png";

export const WhySection = () => {
  return (
    <section className="flex flex-row mt-[48px] gap-[32px] items-center">
      <div>
        <h3 className="text-cText-primary font-bold text-fsSubSectionTitle grow-[1] leading-[52px]">
          Why is everyone buzzing about these boxes?
        </h3>
        <TextWrapper>
          <SectionsText>
            StockX Mystery Boxes are not just about products; they’re about the
            experience. Imagine the excitement of unveiling top-tier electronics
            at a fraction of the cost.
          </SectionsText>
          <SectionsText>
            Our boxes include a variety of premium tech items, making it a
            must-have for every tech enthusiast. Join the buzz and see why
            everyone is raving about the unbeatable value and surprise factor of
            Stockx Mystery Boxes!
          </SectionsText>
        </TextWrapper>
      </div>
      <img src={img} className="w-[50%] rounded-[30px]" />
    </section>
  );
};
