import {useEffect, useState} from "react";
import { SquareX } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import axios from "axios";
import Spinner from "@/website/components/common/Spinner.jsx";

const VerifyOTPModal = ({ propertyData, onClose, onOtpVerify }) => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const serverURL = import.meta.env.VITE_SERVER_URL;

  const otpResendLimit = 60;
  const [otpResendTimer, setOtpResendTimer] = useState(otpResendLimit);

  useEffect(() => {
    const interval = setInterval(() => {
      if(otpResendTimer > 0) {
        setOtpResendTimer(otpResendTimer - 1);
      }
    }, 1000)
    return () => {
      clearInterval(interval);
    }
  }, [otpResendTimer]);

  const handleChange = (value, index) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to the next input
    if (value && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      if (prevInput) {
        prevInput.focus();
      }
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    const otpCode = otp.join("");
    const payload = {
      email: propertyData.email,
      otp: otpCode,
      propertyId: propertyData.propertyId,
    };
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/request/verify`,
        payload,
      );
      onOtpVerify();
    } catch (error) {
      console.error("Error verifying OTP", error);
      setError(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  const handleResendAgain = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${serverURL}/request/otp/regenerate`, {
        email: propertyData.email,
        propertyId: propertyData.propertyId,
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      setOtpResendTimer(otpResendLimit);
    }
    catch (err) {
      console.log(err);
      setError(err.response.data);
    }
    finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative flex w-[95%] md:w-[64rem] items-center justify-between gap-x-7 rounded-xl bg-white p-6">
        <SquareX
          size={30}
          className="absolute right-4 top-4 cursor-pointer text-2xl font-bold text-gray-600 hover:text-gray-800"
          onClick={onClose}
        />

        <img
          src="/assets/imgs/otp.png"
          className="h-[470px] w-1/2 rounded-xl object-cover hidden md:block"
          alt="OTP Verification"
        />

        <div className="flex w-full md:w-1/2 items-center justify-center">
          <div className="flex w-full flex-col justify-center gap-4 text-center">
            <h1 className="text-[30px] font-semibold">OTP Verification</h1>
            <div className="flex items-center justify-between gap-x-1.5">
              {otp.map((digit, index) => (
                <Input
                  key={index}
                  id={`otp-input-${index}`}
                  type="number"
                  className="flex size-[48px] md:size-[64px] items-center justify-center rounded-lg border-2 p-1.5 text-center text-[18px] md:text-[48px] font-medium text-border"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  style={{color: "black"}}
                />
              ))}
            </div>
            <div className='flex items-center justify-between w-full text-sm'>
              <div className='text-smokeyGrey'>
                Resend Again in {otpResendTimer}s
              </div>
              <div className={`transition-all ${otpResendTimer === 0 ? 'text-black cursor-pointer' : 'text-smokeyGrey'}`} onClick={handleResendAgain}>
                {
                    isLoading ?
                      <Spinner className='size-[20px]' /> :
                      'Resend Again'
                }
              </div>
            </div>
            {
              error ?
                  <div className='text-sm text-red-500'>
                    {error}
                  </div> : <></>
            }
            <Button
                className="rounded-md"
                onClick={handleSubmit}
                disabled={loading}
            >
              {loading ? "Verifying..." : "Submit"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTPModal;
