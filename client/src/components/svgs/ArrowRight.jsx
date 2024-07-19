const ArrowRight = ({ className, onClick, disabled }) => {
  return (
    <svg
      className={`${className} size-5 md:size-3 lg:size-4 xl:size-5 2xl:size-6 ${disabled ? "text-grey" : "text-black"}`}
      onClick={onClick}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.0406 6.47266C18.2781 6.47266 18.5156 6.56016 18.7031 6.74766L26.2906 14.3352C26.6531 14.6977 26.6531 15.2977 26.2906 15.6602L18.7031 23.2477C18.3406 23.6102 17.7406 23.6102 17.3781 23.2477C17.0156 22.8852 17.0156 22.2852 17.3781 21.9227L24.3031 14.9977L17.3781 8.07265C17.0156 7.71015 17.0156 7.11016 17.3781 6.74766C17.5531 6.56016 17.8031 6.47266 18.0406 6.47266Z"
        fill="currentColor"
      />
      <path
        d="M2.37448 14.0625L25.3286 14.0625C25.8878 14.0625 26.3516 14.4875 26.3516 15C26.3516 15.5125 25.8878 15.9375 25.3286 15.9375L2.37448 15.9375C1.81528 15.9375 1.35156 15.5125 1.35156 15C1.35156 14.4875 1.81528 14.0625 2.37448 14.0625Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowRight;
