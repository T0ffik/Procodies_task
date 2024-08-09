import cardImageSrc from "../../Images/cards.png";

export const AcceptedCards = () => {
  return (
    <div className="flex flex-col mt-[16px] justify-center items-center text-fsFooterTitle leading-[16px] font-normal mb-[4px]">
      We accept the following credit cards
      <img src={cardImageSrc} className="max-h-[40px]" />
    </div>
  );
};
