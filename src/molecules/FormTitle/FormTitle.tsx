import { Typography } from "../../atoms";

export const FormTitle = () => {
  return (
    <div>
      <Typography
        tag="h1"
        customStyles="text-cText-primary text-fsPageTitle font-extrabold leading-lhPageTitle"
      >
        Chance to win a StockX Mystery Box today!
      </Typography>
      <Typography
        tag="span"
        customStyles="text-cText-primary text-fsSmall font-normal"
      >
        Unleash the Excitement of Mystery Electronics
      </Typography>
    </div>
  );
};
