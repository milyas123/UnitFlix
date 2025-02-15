const LocationPin = ({ className }) => {
  return (
    <svg
      className={`${className} size-5 md:size-2 lg:size-3 xl:size-4 2xl:size-5`}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.00187 8.95297C9.15063 8.95297 10.0819 8.02172 10.0819 6.87297C10.0819 5.72422 9.15063 4.79297 8.00187 4.79297C6.85312 4.79297 5.92188 5.72422 5.92188 6.87297C5.92188 8.02172 6.85312 8.95297 8.00187 8.95297Z"
        stroke="currentColor"
        stroke-width="1.5"
      />
      <path
        d="M2.41184 5.6587C3.72517 -0.114634 12.2785 -0.107967 13.5852 5.66537C14.3518 9.05203 12.2452 11.9187 10.3985 13.692C9.0585 14.9854 6.9385 14.9854 5.59184 13.692C3.75184 11.9187 1.64517 9.04537 2.41184 5.6587Z"
        stroke="currentColor"
        stroke-width="1.5"
      />
    </svg>
  );
};

export default LocationPin;
