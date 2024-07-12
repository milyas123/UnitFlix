import React, { useState } from "react";
import Slider from "react-slick";
import { BsArrowUpRight, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { X } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/assets/imgs/p1.jpg",
  "/assets/imgs/p2.jpg",
  "/assets/imgs/p3.jpg",
  "/assets/imgs/p4.jpg",
  "/assets/imgs/p5.jpg",
  "/assets/imgs/p6.jpg",
  "/assets/imgs/p7.jpg",
  "/assets/imgs/p8.jpg",
];

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute -right-10 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer"
      onClick={onClick}
    >
      <BsChevronRight size={20} className="text-white" />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute -left-10 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer"
      onClick={onClick}
    >
      <BsChevronLeft size={20} className="text-white" />
    </div>
  );
};

const ImageGallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="xl:12 md:mt-8 lg:mt-10 2xl:mt-16">
      <div className="flex items-center justify-between">
        <h1 className="font-medium md:text-[12px] lg:text-[15px] xl:text-[18px] 2xl:text-[24px]">
          Image Gallery
        </h1>

        <div
          onClick={openModal}
          className="flex cursor-pointer items-center gap-1.5 border-b-2 border-transparent transition duration-200 ease-in-out hover:border-mirage"
        >
          <p className="font-semibold text-mirage md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[15px]">
            See All Images
          </p>
          <BsArrowUpRight size={18} />
        </div>
      </div>

      <div className="flex md:mt-2 lg:mt-3 xl:mt-5 2xl:mt-6">
        <div className="w-[69.5%] md:space-y-2.5 lg:space-y-3 2xl:space-y-5">
          <div className="flex">
            <div className="w-[32%] overflow-hidden md:h-[120px] md:rounded-sm lg:h-[160px] xl:h-[200px] xl:rounded-lg 2xl:h-[240px]">
              <img
                src="/assets/imgs/p2.jpg"
                className="h-full w-full transform object-cover transition-transform duration-300 hover:scale-105"
                alt=""
              />
            </div>
            <div className="ms-auto w-[66%] overflow-hidden md:h-[120px] md:rounded-sm lg:h-[160px] xl:h-[200px] xl:rounded-lg 2xl:h-[240px]">
              <img
                src="/assets/imgs/p3.jpg"
                className="h-full w-full transform object-cover transition-transform duration-300 hover:scale-105"
                alt=""
              />
            </div>
          </div>

          <div className="flex justify-between">
            <div className="w-[32%] overflow-hidden md:h-[120px] md:rounded-sm lg:h-[160px] xl:h-[200px] xl:rounded-lg 2xl:h-[240px]">
              <img
                src="/assets/imgs/p4.jpg"
                className="h-full w-full transform object-cover transition-transform duration-300 hover:scale-105"
                alt=""
              />
            </div>
            <div className="w-[32%] overflow-hidden md:h-[120px] md:rounded-sm lg:h-[160px] xl:h-[200px] xl:rounded-lg 2xl:h-[240px]">
              <img
                src="/assets/imgs/p6.jpg"
                className="h-full w-full transform object-cover transition-transform duration-300 hover:scale-105"
                alt=""
              />
            </div>
            <div className="w-[32%] overflow-hidden md:h-[120px] md:rounded-sm lg:h-[160px] xl:h-[200px] xl:rounded-lg 2xl:h-[240px]">
              <img
                src="/assets/imgs/p7.jpg"
                className="h-full w-full transform object-cover transition-transform duration-300 hover:scale-105"
                alt=""
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-[66%] overflow-hidden md:h-[120px] md:rounded-sm lg:h-[160px] xl:h-[200px] xl:rounded-lg 2xl:h-[240px]">
              <img
                src="/assets/imgs/p8.jpg"
                className="h-full w-full transform object-cover transition-transform duration-300 hover:scale-105"
                alt=""
              />
            </div>
            <div className="ms-auto w-[32%] overflow-hidden md:h-[120px] md:rounded-sm lg:h-[160px] xl:h-[200px] xl:rounded-lg 2xl:h-[240px]">
              <img
                src="/assets/imgs/p5.jpg"
                className="h-full w-full transform object-cover transition-transform duration-300 hover:scale-105"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="ms-auto w-[29%] overflow-hidden md:rounded-sm xl:rounded-lg">
          <img
            src="/assets/imgs/p1.jpg"
            className="h-full w-full transform object-cover transition-transform duration-300 hover:scale-105"
            alt=""
          />
        </div>
      </div>

      {modalIsOpen && (
        <div className="fixed inset-0 z-[600] flex items-center justify-center bg-black bg-opacity-70">
          <div className="w-full max-w-5xl md:rounded-sm xl:rounded-lg">
            <X
              className="absolute right-5 top-6 z-20 cursor-pointer text-white opacity-60 transition-all duration-200 ease-in-out hover:opacity-100"
              size={35}
              onClick={closeModal}
            />
            <Slider {...settings}>
              {images.map((image, index) => (
                <div
                  key={index}
                  className="h-[500px] w-full overflow-hidden md:rounded-sm xl:rounded-lg"
                >
                  <img
                    src={image}
                    className="h-full w-full object-cover"
                    alt=""
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
