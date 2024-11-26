import HeaderImg from "@/components/HeaderImg";
import AboutContent from "@/components/AboutContent";

const AboutPage = () => {
  return (
    <main className="flex flex-col gap-8 items-center">
      <HeaderImg title="About Us" />
      <AboutContent />
    </main>
  );
};

export default AboutPage;
