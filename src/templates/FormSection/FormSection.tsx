import { FormWithTitle, ImageSection } from "../../organism";

export const FormSection = () => {
  return (
    <section className="flex flex-row gap-[21px] items-center">
      <ImageSection />
      <FormWithTitle />
    </section>
  );
};
