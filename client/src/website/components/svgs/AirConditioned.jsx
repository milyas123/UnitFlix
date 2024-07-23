const AirConditioned = ({ className, size = 18 }) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.5 11H18.33L21.57 7.76L20.16 6.34L15.5 11H13.5V9L18.16 4.34L16.74 2.93L13.5 6.17V2H11.5V6.17L8.26 2.93L6.84 4.34L11.5 9V11H9.5L4.84 6.34L3.43 7.76L6.67 11H2.5V13H6.67L3.43 16.24L4.84 17.66L9.5 13H11.5V15L6.84 19.66L8.26 21.07L11.5 17.83V22H13.5V17.83L16.74 21.07L18.16 19.66L13.5 15V13H15.5L20.16 17.66L21.57 16.24L18.33 13H22.5V11Z"
        fill="black"
      />
    </svg>
  );
};

export default AirConditioned;
