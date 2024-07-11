import AboutCard from "./cards/AboutCard";

const AboutUs = () => {
  const cardsData = [
    {
      imgSrc: "/assets/imgs/key.png",
      title: "Expertise",
      description:
        "Lorem ipsum dolor sit amet elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      imgSrc: "/assets/imgs/creditcard.png",
      title: "Reliability",
      description:
        "Lorem ipsum dolor sit amet elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      imgSrc: "/assets/imgs/creditcard.png",
      title: "Innovation",
      description:
        "Lorem ipsum dolor sit amet elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      imgSrc: "/assets/imgs/creditcard.png",
      title: "Client-Centric",
      description:
        "Lorem ipsum dolor sit amet elit. Suspendisse varius enim in eros elementum tristique.",
    },
  ];

  return (
    <div className="bg-mirage text-white py-[3rem] md:h-[70vh] flex justify-center items-center relative">
      <img src="/assets/imgs/about-bg.png" className="object-cover size-full absolute inset-0" alt="" />
      <div className="relative z-10 w-full px-2.5 md:px-0 md:w-[60%] mx-auto flex flex-col gap-10 md:gap-[1.5rem] lg:gap-[3.5rem] xl:gap-[5rem] 2xl:gap-[6rem]">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="font-semibold text-center text-[20px] md:text-[14px] lg:text-[18px] xl:text-[24px] 2xl:text-[30px]">
            Who are we & Why Choose Us?
          </h1>
          <p className="font-regular md:text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[16px] 2xl:px-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
            efficitur sapien. In non urna consectetur, rhoncus nulla ut,
            vulputate neque. Praesent vel sollicitudin dolor. Donec pulvinar
            risus vitae condimentum vestibulum.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-4 2xl:gap-x-12 2xl:px-6">
          {cardsData.map((card, index) => (
            <AboutCard
              key={index}
              imgSrc={card.imgSrc}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
