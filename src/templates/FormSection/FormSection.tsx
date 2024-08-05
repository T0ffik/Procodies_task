import { FormWithTitle, ImageSection } from "../../organism";

export const FormSection = () => {
  return (
    <section className="flex gap-[21px] items-center max-[1030px]:flex-col">
      <ImageSection />
      <FormWithTitle />
    </section>
  );
};
