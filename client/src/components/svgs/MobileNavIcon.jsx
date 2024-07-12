const MobileNavIcon = ({ className, size = 16, onClick }) => {
  return (
    <svg
      className={`${className}`}
      width={size}
      height={size}
      viewBox="0 0 36 37"
      fill="none"
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 15.5H10.5C13.5 15.5 15 14 15 11V8C15 5 13.5 3.5 10.5 3.5H7.5C4.5 3.5 3 5 3 8V11C3 14 4.5 15.5 7.5 15.5Z"
        stroke="white"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M25.5 15.5H28.5C31.5 15.5 33 14 33 11V8C33 5 31.5 3.5 28.5 3.5H25.5C22.5 3.5 21 5 21 8V11C21 14 22.5 15.5 25.5 15.5Z"
        stroke="white"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M25.5 33.5H28.5C31.5 33.5 33 32 33 29V26C33 23 31.5 21.5 28.5 21.5H25.5C22.5 21.5 21 23 21 26V29C21 32 22.5 33.5 25.5 33.5Z"
        stroke="white"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.5 33.5H10.5C13.5 33.5 15 32 15 29V26C15 23 13.5 21.5 10.5 21.5H7.5C4.5 21.5 3 23 3 26V29C3 32 4.5 33.5 7.5 33.5Z"
        stroke="white"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default MobileNavIcon;
