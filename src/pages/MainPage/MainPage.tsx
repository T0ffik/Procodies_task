import {
  CuriousitySection,
  Footer,
  FormSection,
  TitleBreak,
  WhySection,
} from "../../templates";

export const MainPage = () => {
  return (
    <div className="max-w-[1232px] ">
      <FormSection />
      <TitleBreak />
      <CuriousitySection />
      <WhySection />
      <Footer />
    </div>
  );
};
