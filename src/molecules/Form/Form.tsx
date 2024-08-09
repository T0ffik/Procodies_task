import { SubmitHandler, useForm } from "react-hook-form";
import { Input, FormLogos } from "../../atoms";

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
  const basicValidationRules = { required: true, maxLength: 64 };
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    console.log("sended this data:", data);
  return (
    <div className="flex flex-col border-solid border-[1px] border-cBorder-form p-24 rounded-[20px] mt-[23px] items-center">
      <h4 className="text-fsMedium leading-lhMedium font-medium text-center text-cText-title mb-24">
        Enter Details
      </h4>
      <form
        className="flex flex-col gap-16 w-[100%]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex gap-16 max-[531px]:flex-col">
          <Input
            placeholder="First name"
            {...register("firstName", basicValidationRules)}
            className="grow-[1]"
            error={!!errors.firstName}
          />
          <Input
            placeholder="Last name"
            {...register("lastName", basicValidationRules)}
            className="grow-[1]"
            error={!!errors.lastName}
          />
        </div>
        <Input
          placeholder="Street"
          {...register("street", basicValidationRules)}
          error={!!errors.street}
        />
        <div className="flex gap-16 max-[531px]:flex-col">
          <Input
            placeholder="Postal code"
            {...register("postalCode", {
              required: true,
              //regex for polish postal code
              pattern: /^\d{2}-\d{3}/i,
            })}
            className="grow-[1]"
            error={!!errors.postalCode}
          />
          <Input
            placeholder="City"
            {...register("city", basicValidationRules)}
            className="grow-[1]"
            error={!!errors.city}
          />
        </div>
        <Input
          placeholder="Phone number"
          {...register("phoneNumber", { required: true, maxLength: 9 })}
          error={!!errors.phoneNumber}
        />
        <Input
          placeholder="E-mail"
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
          error={!!errors.email}
        />
        <button
          type="submit"
          className="text-cText-white bg-cBackground-primary rounded-[10px] py-12"
        >
          Proceed to payment
        </button>
      </form>
      <FormLogos />
    </div>
  );
};
