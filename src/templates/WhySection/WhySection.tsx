import { Typography, TextWrapper } from "../../atoms";
import img from "../../Images/image_section2.png";

export const WhySection = () => {
  return (
    <section className="flex flex-row mt-48 gap-32 items-center max-[830px]:flex-col">
      <div>
        <Typography tag="h3" variant="sectionHeader">
          Why is everyone buzzing about these boxes?
        </Typography>
        <TextWrapper>
          <Typography tag="span">
            StockX Mystery Boxes are not just about products; they’re about the
            experience. Imagine the excitement of unveiling top-tier electronics
            at a fraction of the cost.
          </Typography>
          <Typography tag="span">
            Our boxes include a variety of premium tech items, making it a
            must-have for every tech enthusiast. Join the buzz and see why
            everyone is raving about the unbeatable value and surprise factor of
            Stockx Mystery Boxes!
          </Typography>
        </TextWrapper>
      </div>
      <img src={img} className="w-[50%] rounded-[30px] max-[830px]:w-[100%]" />
    </section>
  );
};
