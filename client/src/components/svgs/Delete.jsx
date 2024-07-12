const Delete = ({ className, size = 16 }) => {
  return (
    <svg
      className={`cursor-pointer transition-all duration-200 ease-in-out hover:text-red-600 ${className}`}
      width={size}
      height={size}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 4.98307C15.225 4.70807 12.4333 4.56641 9.65 4.56641C8 4.56641 6.35 4.64974 4.7 4.81641L3 4.98307"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.58594 4.14297L7.76927 3.0513C7.9026 2.25964 8.0026 1.66797 9.41094 1.66797H11.5943C13.0026 1.66797 13.1109 2.29297 13.2359 3.05964L13.4193 4.14297"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.2057 7.61719L15.6641 16.0089C15.5724 17.3172 15.4974 18.3339 13.1724 18.3339H7.8224C5.4974 18.3339 5.4224 17.3172 5.33073 16.0089L4.78906 7.61719"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.10938 13.75H11.8844"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.41406 10.418H12.5807"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Delete;
