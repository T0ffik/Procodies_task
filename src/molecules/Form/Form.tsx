import { CustomInput, FormLogos } from "../../atoms";

export const Form = () => {
  return (
    <div className="flex flex-col border-solid border-[1px] border-cBorder-form p-[24px] rounded-[20px] mt-[23px] items-center">
      <h4 className="text-fsMedium leading-lhMedium font-medium text-center text-cText-title mb-[24px]">
        Enter Details
      </h4>
      <form className="flex flex-col gap-[16px] w-[100%]">
        <div className="flex gap-[16px]">
          <CustomInput placeholder="First name" className="grow-[1]" />
          <CustomInput placeholder="Last name" className="grow-[1]" />
        </div>
        <CustomInput placeholder="Street" />
        <div className="flex gap-[16px]">
          <CustomInput placeholder="Postal code" className="grow-[1]" />
          <CustomInput placeholder="City" className="grow-[1]" />
        </div>
        <CustomInput placeholder="Phone number" />
        <CustomInput placeholder="E-mail" />
        <button
          type="submit"
          className="text-cText-white bg-cBackground-primary rounded-[10px] py-[12px]"
        >
          Proceed to payment
        </button>
      </form>
      <FormLogos />
    </div>
  );
};
