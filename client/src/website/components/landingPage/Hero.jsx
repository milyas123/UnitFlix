import website from "@/data/website.json";
import LazyLoad from "react-lazyload";
import SpinnerContainer from "@/website/components/common/SpinnerContainer.jsx";
import {motion} from "framer-motion";

const Hero = () => {

  return (
    <section className="relative h-[800px] md:h-[385px] lg:h-[80vh] lg:max-h-[520px] lg:min-h-[440px] xl:h-[100vh] xl:min-h-[615px] 2xl:h-[80.5vh] 2xl:max-h-[770px] 2xl:min-h-[700px]">
        <LazyLoad className="absolute inset-0 size-full object-cover object-top" placeholder={<SpinnerContainer />}>
            <img
                src={website.landingPage.hero.backgroundImage}
                className="absolute inset-0 size-full object-cover object-top"
                alt=""
            />
        </LazyLoad>
        <div className="absolute inset-0 z-50 bg-black bg-opacity-50"></div>
        <div className="absolute z-50 flex size-full items-center justify-center">
            <div className="space-y-4 text-center text-white md:space-y-2 lg:space-y-3.5 2xl:space-y-4">
                <motion.div initial={{opacity: 0, y: 100}} animate={{y: [100, 0], opacity: [0, 1]}}
                            transition={{duration: 1, delay: 1, ease: "easeInOut", times: [0, 1]}}>
                    <h1 className="heading mx-7 text-[44px] font-semibold md:text-[23px] lg:text-[28px] xl:text-[36px] 2xl:text-[44px]">
                        {website.landingPage.hero.heading}
                    </h1>
                </motion.div>
                <motion.div initial={{opacity: 0, y: 100}} animate={{y: [100, 0], opacity: [0, 1]}}
                            transition={{duration: 1, delay: 1, ease: "easeInOut", times: [0, 1]}}>
                    <p className="tagline font-regular text-[30px] md:text-[18px] lg:text-[22px] xl:text-[26px] 2xl:text-[34px]">
                        {website.landingPage.hero.tagLine}
                    </p>
                </motion.div>
            </div>
        </div>
    </section>
);
};

export default Hero;
