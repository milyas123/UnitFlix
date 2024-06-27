import React, { useState } from "react";
import { Button } from "../ui/button";
import HelpInfoCard from "./cards/HelpInfoCard";

const Help = () => {
  const [selectedOption, setSelectedOption] = useState("Buy");
  const options = ["Buy", "Sell", "Rent", "Manage"];

  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };

  const buttonStyles = (option) =>
    selectedOption === option
      ? "bg-mirage text-white"
      : "bg-white border border-mirage text-mirage hover:text-white";

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
            <HelpInfoCard />
            <HelpInfoCard />
            <HelpInfoCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
