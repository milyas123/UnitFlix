const PaymentPlan = ({ className }) => {
  return (
    <svg
      className={`${className} size-5 md:size-2 lg:size-3 xl:size-4 2xl:size-5`}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.1641 17.0846H5.83073C3.33073 17.0846 1.66406 15.8346 1.66406 12.918V7.08464C1.66406 4.16797 3.33073 2.91797 5.83073 2.91797H14.1641C16.6641 2.91797 18.3307 4.16797 18.3307 7.08464V12.918C18.3307 15.8346 16.6641 17.0846 14.1641 17.0846Z"
        stroke="#565656"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
        stroke="#565656"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.58594 7.91797V12.0846"
        stroke="#565656"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.4141 7.91797V12.0846"
        stroke="#565656"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default PaymentPlan;
