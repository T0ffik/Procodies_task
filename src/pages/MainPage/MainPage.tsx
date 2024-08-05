import {
  CuriousitySection,
  Footer,
  FormSection,
  TitleBreak,
  WhySection,
} from "../../templates";

export const MainPage = () => {
  return (
    <div className="max-w-[1232px] flex flex-col items-center">
      <FormSection />
      <TitleBreak />
      <CuriousitySection />
      <WhySection />
      <Footer />
    </div>
  );
};
