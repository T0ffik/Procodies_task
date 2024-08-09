import { Typography } from "../../atoms";

export const TitleBreak = () => {
  return (
    <div className="flex flex-col items-center">
      <Typography
        tag="h2"
        customStyles="text-cText-title text-fsSectionTitle leading-52 font-bold mt-48 text-center"
      >
        Top Tech Mystery Box at Unbeatable Prices
      </Typography>
      <Typography
        tag="span"
        customStyles="mt-[8px] text-cBackground-primary text-fsSubTitle font-medium text-center"
      >
        Fast shipping | Easy returns | Special discounts for students
      </Typography>
    </div>
  );
};
