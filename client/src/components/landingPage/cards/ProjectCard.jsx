import { Button } from "../../ui/button";

const ProjectCard = () => {
  return (
    <div className="max-w-sm rounded-xl shadow-lg">
      <div className="relative">
        <img
          className="w-full h-[310px] rounded-xl object-cover"
          src="/assets/imgs/discover.jpg"
          alt="Dubai South"
        />
        <div className="absolute z-[300] -bottom-24 left-7 right-7 bg-white p-4 rounded-xl shadow-lg">
          <h2 className="text-center font-semibold text-xl mb-2">
            Azizi Venice at Dubai South
          </h2>
          <p className="text-center text-base">
            Luxurious 1-3 Bedroom Waterfront Apartments & Villas
          </p>
          <p className="text-center text-smokeyGrey font-semibold mt-2">
            Starting From <br /> AED 2,000,000
          </p>
          <div className="flex justify-center mt-4">
            <Button className="font-semibold py-2 px-4 rounded-lg">
              Register Your Interest
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
