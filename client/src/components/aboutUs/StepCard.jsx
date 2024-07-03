const StepCard = ({ number }) => {
    return (
      <div className="w-[480px] p-4 flex flex-col gap-y-2.5 rounded-lg text-start shadow-right">
        <span className="text-[20px]">{number}.</span>
        <h2 className="text-[32px] font-medium">Dream & Discover</h2>
        <p className="text-[16px] font-regular">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it
        </p>
      </div>
    );
  };
  
  export default StepCard;
  