import Navbar from "@/components/common/Navbar";
import DiscoverSection from "@/components/landingPage/DiscoverSection";
import Filters from "@/components/landingPage/Filters";
import HeroSection from "@/components/landingPage/HeroSection";
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="absolute w-full z-[100] -bottom-12">
        <Filters />
      </div>
      <DiscoverSection />



    </>
  );
};

export default LandingPage;
