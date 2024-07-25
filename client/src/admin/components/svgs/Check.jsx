const Check = ({ className }) => {
  return (
    <svg
      className={`${className} md:size-1 lg:size-2 xl:size-3 2xl:size-4`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7"
      ></path>
    </svg>
  );
};

export default Check;
