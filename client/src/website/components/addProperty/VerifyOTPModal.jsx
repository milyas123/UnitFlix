import { useState } from "react";
import { SquareX } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const VerifyOTPModal = ({ onClose }) => {
  const [otp, setOtp] = useState(Array(6).fill("0"));

  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-[64rem] rounded-xl bg-white p-6 flex justify-between items-center gap-x-7">
        <SquareX
          size={30}
          className="cursor-pointer absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-gray-800"
          onClick={onClose}
        />

        <img
          src="/assets/imgs/otp.png"
          className="w-1/2 h-[470px] object-cover rounded-xl"
          alt="OTP Verification"
        />

        <div className="w-1/2 flex justify-center items-center">
          <div className="flex flex-col gap-4 justify-center w-full text-center">
            <h1 className="font-semibold text-[30px]">OTP Verification</h1>
            <div className="flex justify-between items-center gap-x-1.5">
              {otp.map((digit, index) => (
                <Input
                  type="number"
                  key={index}
                  className="size-[64px] rounded-lg border-2 p-1.5 text-[48px] font-medium text-border flex justify-center items-center text-center"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, index)}
                />
              ))}
            </div>
            <Button className="rounded-md">Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTPModal;
