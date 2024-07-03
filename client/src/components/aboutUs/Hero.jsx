import { Button } from "../ui/button";

const Hero = () => {
  return (
    <>
      <div className="h-screen relative overflow-hidden">
        <img
          src="/assets/imgs/hero-section-img.jpg"
          className="absolute top-0"
          alt=""
        />
        <div className="absolute z-50 bg-black bg-opacity-50 inset-0"></div>
        <div className="absolute z-50 size-full mx-auto flex justify-center items-center">
          <div className="text-white space-y-6 w-[80%] mx-auto">
            <h1 className="font-semibold text-7xl w-[70%]">
              More than just Real Estate, We Build Dreams
            </h1>
            <p className="font-medium text-2xl w-[60%]">
            We understand buying a home is more than just a transaction. <br />
            Its about building a future, creating memories and finding a place to belong
            </p>
            <Button className="bg-white text-mirage rounded-md hover:border-white hover:text-white">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
