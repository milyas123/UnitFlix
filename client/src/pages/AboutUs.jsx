import DreamHomeSteps from "@/components/aboutUs/DreamHomeSteps";
import FAQs from "@/components/aboutUs/FAQs";
import Hero from "@/components/aboutUs/Hero";
import MissionVisionSection from "@/components/aboutUs/MissionVisionSection";
import Team from "@/components/aboutUs/Team";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="w-[84%] mx-auto">
        <MissionVisionSection />
        <DreamHomeSteps />
        <Team />
        <FAQs />
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
