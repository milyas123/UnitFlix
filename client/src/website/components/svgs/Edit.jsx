const Edit = ({ className, onClick }) => {
  return (
    <svg
      className={`size-5 cursor-pointer transition-all duration-200 ease-in-out hover:text-black md:size-3 lg:size-4 xl:size-5 2xl:size-6 ${className}`}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M9.16406 1.66797H7.4974C3.33073 1.66797 1.66406 3.33464 1.66406 7.5013V12.5013C1.66406 16.668 3.33073 18.3346 7.4974 18.3346H12.4974C16.6641 18.3346 18.3307 16.668 18.3307 12.5013V10.8346"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.3675 2.51639L6.80088 9.08306C6.55088 9.33306 6.30088 9.82472 6.25088 10.1831L5.89254 12.6914C5.75921 13.5997 6.40088 14.2331 7.30921 14.1081L9.81754 13.7497C10.1675 13.6997 10.6592 13.4497 10.9175 13.1997L17.4842 6.63306C18.6175 5.49972 19.1509 4.18306 17.4842 2.51639C15.8175 0.849722 14.5009 1.38306 13.3675 2.51639Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.4219 3.45703C12.9802 5.4487 14.5385 7.00703 16.5385 7.5737"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Edit;
