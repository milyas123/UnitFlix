const TestimonialCard = ({review, username}) => {
  return (
    <div className="space-y-2.5 rounded-md bg-mirageLight p-6 text-white md:p-4 md:text-[7px] lg:p-5 lg:text-[9px] xl:text-[12px] 2xl:p-7 2xl:text-[14px]">
      <p>{review}</p>
      <p>- {username}</p>
    </div>
  );
};

export default TestimonialCard;
