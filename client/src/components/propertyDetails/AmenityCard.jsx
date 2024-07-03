const AmenityCard = ({ icon, text }) => {
  return (
    <div className="w-[230px] h-[130px] bg-whiteLilac rounded-md border flex justify-center items-center p-6 hover:scale-105 duration-300 ease-in-out">
      <div className="flex flex-col items-center text-center space-y-3">
        {icon}
        <p className="text-14px">{text}</p>
      </div>
    </div>
  );
};

export default AmenityCard;
