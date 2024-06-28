import React, { useState } from "react";
import { Button } from "../ui/button";
import HelpInfoCard from "./cards/HelpInfoCard";

const Help = () => {
  const [selectedOption, setSelectedOption] = useState("Buy");
  const options = ["Buy", "Sell", "Rent", "Manage"];

  const contentArray = [
    {
      option: "Buy",
      title: "Find out how much you can afford",
      description: "We'll help you estimate your budget range. Save to your buyer profile to help in your search.",
      linkText: "Try our affordability calculator",
      imgSrc: "/assets/imgs/spot-badge.png"
    },
    {
      option: "Sell",
      title: "Maximize your home's value",
      description: "Learn how to get the best price for your home. We'll guide you through the selling process.",
      linkText: "Get a free home valuation",
      imgSrc: "/assets/imgs/spot-badge.png"
    },
    {
      option: "Rent",
      title: "Find the perfect rental",
      description: "Discover rental properties that fit your needs and budget. Save your favorite listings.",
      linkText: "Browse rental listings",
      imgSrc: "/assets/imgs/spot-badge.png"
    },
    {
      option: "Manage",
      title: "Efficient property management",
      description: "Get tips and tools for managing your property effectively. Ensure your investment is well-maintained.",
      linkText: "Explore management services",
      imgSrc: "/assets/imgs/spot-badge.png"
    }
  ];

  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };

  const buttonStyles = (option) =>
    selectedOption !== option && "bg-white border border-mirage text-mirage hover:text-white";

  const selectedContent = contentArray.find(content => content.option === selectedOption);

  return (
    <div className="bg-white h-screen flex justify-center items-center">
      <div className="w-[65%] mx-auto flex flex-col gap-4">
        <h1 className="font-semibold text-[30px] text-center">
          How can We Help
        </h1>

        <div className="flex flex-col justify-center items-center gap-8">
          <div className="flex gap-x-4">
            {options.map((option) => (
              <Button
                key={option}
                className={buttonStyles(option)}
                onClick={() => handleButtonClick(option)}
              >
                {option}
              </Button>
            ))}
          </div>

          <div className="flex gap-x-5">
            {Array(3).fill().map((_, index) => (
              <HelpInfoCard key={index} content={selectedContent} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
