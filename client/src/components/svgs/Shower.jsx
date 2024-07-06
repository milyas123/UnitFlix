import React from "react";

const Shower = ({ size, className }) => {
  return (
    <svg
      className={`${className}`}
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.3696 0.261721H9.35456C8.50243 0.261721 7.72549 0.462221 7.02373 0.863224C6.32198 1.26423 5.75807 1.82814 5.332 2.55495C4.90594 3.28177 4.6929 4.07124 4.6929 4.92337H3.33952C2.43726 4.92337 1.66032 5.24919 1.00869 5.90082C0.357064 6.55245 0.03125 7.32939 0.03125 8.23164V10.2617C0.03125 10.4622 0.0939066 10.6251 0.21922 10.7504C0.344533 10.8758 0.50744 10.9384 0.707942 10.9384H10.0312C10.2318 10.9384 10.3947 10.8758 10.52 10.7504C10.6453 10.6251 10.7079 10.4622 10.7079 10.2617V8.23164C10.7079 7.32939 10.3821 6.55245 9.7305 5.90082C9.07887 5.24919 8.30193 4.92337 7.39967 4.92337H6.04629C6.04629 4.02112 6.3721 3.24417 7.02373 2.59255C7.67536 1.94092 8.4523 1.59004 9.35456 1.53992H15.3696C16.2719 1.59004 17.0488 1.94092 17.7004 2.59255C18.3521 3.24417 18.7029 4.02112 18.7531 4.92337V19.585H20.0312V4.92337C20.0312 4.07124 19.8307 3.28177 19.4297 2.55495C19.0287 1.82814 18.4648 1.26423 17.738 0.863224C17.0112 0.462221 16.2217 0.261721 15.3696 0.261721ZM7.32448 6.27676C7.87586 6.27676 8.35205 6.46473 8.75305 6.84067C9.15406 7.21661 9.35456 7.68027 9.35456 8.23164V9.58503H1.30945V8.23164C1.30945 7.68027 1.50995 7.21661 1.91095 6.84067C2.31195 6.46473 2.78814 6.27676 3.33952 6.27676H7.32448ZM0.707942 12.9685H1.98614V17.6301H0.707942V12.9685ZM3.33952 12.9685H4.6929V14.9234H3.33952V12.9685ZM3.33952 16.9534H4.6929V19.585H3.33952V16.9534ZM6.04629 12.9685H7.32448V16.2768H6.04629V12.9685ZM6.04629 17.6301H7.32448V18.9083H6.04629V17.6301ZM8.67787 12.9685H10.0312V14.9234H8.67787V12.9685ZM8.67787 16.2768H10.0312V20.2617H8.67787V16.2768Z"
        fill="#181A20"
      />
    </svg>
  );
};

export default Shower;
