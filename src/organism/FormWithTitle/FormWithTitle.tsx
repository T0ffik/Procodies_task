import { Form, FormTitle } from "../../molecules";

export const FormWithTitle = () => {
  return (
    <div className="flex flex-col">
      <FormTitle />
      <Form />
    </div>
  );
};
