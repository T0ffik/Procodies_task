import { SubmitHandler, useForm } from "react-hook-form";
import { CustomInput, FormLogos } from "../../atoms";

type Inputs = {
  firstName: string;
  lastName: string;
  street: string;
  postalCode: string;
  city: string;
  phoneNumber: number;
  email: string;
};
export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    console.log("sended this data:", data);
  return (
    <div className="flex flex-col border-solid border-[1px] border-cBorder-form p-[24px] rounded-[20px] mt-[23px] items-center">
      <h4 className="text-fsMedium leading-lhMedium font-medium text-center text-cText-title mb-[24px]">
        Enter Details
      </h4>
      <form
        className="flex flex-col gap-[16px] w-[100%]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex gap-[16px]">
          <CustomInput
            placeholder="First name"
            {...register("firstName", { required: true, maxLength: 64 })}
            className="grow-[1]"
            error={!!errors.firstName}
          />
          <CustomInput
            placeholder="Last name"
            {...register("lastName", { required: true, maxLength: 64 })}
            className="grow-[1]"
            error={!!errors.lastName}
          />
        </div>
        <CustomInput
          placeholder="Street"
          {...register("street", { required: true, maxLength: 64 })}
          error={!!errors.street}
        />
        <div className="flex gap-[16px]">
          <CustomInput
            placeholder="Postal code"
            {...register("postalCode", {
              required: true,
              pattern: /^\d{2}-\d{3}/i,
            })}
            className="grow-[1]"
            error={!!errors.postalCode}
          />
          <CustomInput
            placeholder="City"
            {...register("city", { required: true, maxLength: 64 })}
            className="grow-[1]"
            error={!!errors.city}
          />
        </div>
        <CustomInput
          placeholder="Phone number"
          {...register("phoneNumber", { required: true, maxLength: 9 })}
          error={!!errors.phoneNumber}
        />
        <CustomInput
          placeholder="E-mail"
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
          error={!!errors.email}
        />
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
