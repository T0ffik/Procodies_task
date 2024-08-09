import cardImageSrc from "../../Images/cards.png";

export const AcceptedCards = () => {
  return (
    <div className="flex flex-col mt-16 justify-center items-center text-fsFooterTitle leading-16 font-normal mb-4">
      We accept the following credit cards
      <img src={cardImageSrc} className="max-h-[40px]" />
    </div>
  );
};
