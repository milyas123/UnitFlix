import AboutCard from "./cards/AboutCard";
import website from "@/data/website.json";
import {motion} from "framer-motion";

const AboutUs = () => {
  const cardsData = website.landingPage.whoAreWe.items;
    const variants = {
        initial: {opacity: 0, y: 200},
        inView: i => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: i * 0.25,
                ease: "easeInOut"
            }
        }),
    }

  return (
    <div className="bg-mirage text-white py-[3rem] md:h-[370px] lg:max-h-[520px] lg:h-[50vh] lg:min-h-[440px] xl:min-h-[540px] xl:h-[100vh] 2xl:min-h-[600px] 2xl:h-[70vh] 2xl:max-h-[680px] flex justify-center items-center relative">
      <img src={website.landingPage.whoAreWe.backgroundImage} className="object-cover size-full absolute inset-0" alt="" />
      <div className="relative z-10 w-full px-2.5 md:px-0 md:w-[60%] mx-auto flex flex-col gap-10 md:gap-[1.5rem] lg:gap-[3.5rem] xl:gap-[5rem] 2xl:gap-[6rem]">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="font-semibold text-center text-[20px] md:text-[14px] lg:text-[18px] xl:text-[24px] 2xl:text-[30px]">
            {website.landingPage.whoAreWe.title}
          </h1>
          <p className="font-regular md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px] 2xl:px-10">
            {website.landingPage.whoAreWe.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 2xl:gap-x-24 2xl:px-6">
          {cardsData.map((card, index) => (
            <motion.div variants={variants} key={index} initial={'initial'} whileInView={'inView'} viewport={{once: true}} custom={index}>
                <AboutCard
                    imgSrc={card.imgSrc}
                    title={card.title}
                    description={card.description}
                />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
