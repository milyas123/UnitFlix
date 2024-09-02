import React, {useEffect, useState} from "react";
import { Button } from "../ui/button";
import HelpInfoCard from "./cards/HelpInfoCard";
import website from "@/data/website.json";
import {motion} from 'framer-motion';

const Help = () => {
  const [selectedOption, setSelectedOption] = useState("Buy");
  const options = Object.keys(website.landingPage.howCanWeHelp.options);

  const contentArray = website.landingPage.howCanWeHelp.options[selectedOption];

  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };

  const buttonStyles = (option) =>
    selectedOption !== option &&
    "bg-white border border-mirage text-mirage hover:text-white";

  const variants = {
    initial: {
      opacity: 0,
      y: 200,
    },
    inView: i => {
      return {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.75,
          delay: 0.15 * i,
          ease: "easeInOut"
        }
      }
    },
  }

  return (
    <div className="flex h-auto py-[4.5rem] sm:py-0 items-center justify-center bg-white md:h-[370px] lg:max-h-[520px] lg:h-[50vh] lg:min-h-[440px] xl:min-h-[610px] xl:h-[100vh] 2xl:min-h-[680px] 2xl:h-[80vh] 2xl:max-h-[760px]">
      <div className="mx-auto flex w-full flex-col gap-2.5 px-2.5 md:w-[65%] md:gap-2 md:px-0 lg:gap-2.5 xl:gap-3.5 2xl:gap-4">
        <h1 className="text-center text-[30px] font-semibold md:text-[14px] lg:text-[18px] xl:text-[24px] 2xl:text-[30px]">
          {website.landingPage.howCanWeHelp.title}
        </h1>

        <div className="flex flex-col items-center justify-center gap-8 md:gap-3 lg:gap-5 xl:gap-7 2xl:gap-8">
          <div className="flex gap-x-4 md:gap-x-2 lg:gap-x-3 xl:gap-x-3.5 2xl:gap-x-4">
            {options.map((option) => (
              <Button
                key={option}
                className={`rounded-full md:h-5 md:px-2 md:text-[8px] lg:h-7 lg:px-3.5 lg:text-[10px] xl:h-8 xl:px-4 xl:text-[12px] 2xl:h-9 2xl:px-5 2xl:text-[14px] ${buttonStyles(option)}`}
                onClick={() => handleButtonClick(option)}
              >
                {option}
              </Button>
            ))}
          </div>

          <div className="flex flex-col gap-5 md:flex-row">
            {contentArray.map((content, index) => (
                <motion.div variants={variants} key={index} initial={'initial'} whileInView={"inView"} viewport={{once: true}} custom={index}>
                  <HelpInfoCard content={content} />
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
