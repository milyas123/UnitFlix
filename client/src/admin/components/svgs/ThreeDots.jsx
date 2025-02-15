const ThreeDots = ({ className, onClick }) => {
  return (
    <svg
      className={`${className} size-5 md:size-2 lg:size-3 xl:size-4 2xl:size-5`}
      viewBox="0 0 20 20"
      onClick={onClick}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.16667 8.33203C3.25 8.33203 2.5 9.08203 2.5 9.9987C2.5 10.9154 3.25 11.6654 4.16667 11.6654C5.08333 11.6654 5.83333 10.9154 5.83333 9.9987C5.83333 9.08203 5.08333 8.33203 4.16667 8.33203Z"
        stroke="currentColor"
        stroke-width="1.5"
      />
      <path
        d="M15.8307 8.33203C14.9141 8.33203 14.1641 9.08203 14.1641 9.9987C14.1641 10.9154 14.9141 11.6654 15.8307 11.6654C16.7474 11.6654 17.4974 10.9154 17.4974 9.9987C17.4974 9.08203 16.7474 8.33203 15.8307 8.33203Z"
        stroke="currentColor"
        stroke-width="1.5"
      />
      <path
        d="M10.0026 8.33203C9.08594 8.33203 8.33594 9.08203 8.33594 9.9987C8.33594 10.9154 9.08594 11.6654 10.0026 11.6654C10.9193 11.6654 11.6693 10.9154 11.6693 9.9987C11.6693 9.08203 10.9193 8.33203 10.0026 8.33203Z"
        stroke="currentColor"
        stroke-width="1.5"
      />
    </svg>
  );
};

export default ThreeDots;
