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
      className="absolute -right-6 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer md:-right-10"
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
      className="absolute -left-6 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer md:-left-10"
      onClick={onClick}
    >
      <BsChevronLeft size={20} className="text-white" />
    </div>
  );
};

const ImageGallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (index) => {
    setSelectedImageIndex(index);
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
    initialSlide: selectedImageIndex,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="mt-12 md:mt-8 lg:mt-10 xl:mt-12 2xl:mt-16">
      <div className="flex items-center justify-between">
        <h1 className="text-[24px] font-medium md:text-[12px] lg:text-[15px] xl:text-[18px] 2xl:text-[24px]">
          Image Gallery
        </h1>

        <div
          onClick={() => openModal(0)}
          className="flex cursor-pointer items-center gap-1.5 border-b-2 border-transparent transition duration-200 ease-in-out hover:border-mirage"
        >
          <p className="text-[14px] font-semibold text-mirage md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[15px]">
            See All Images
          </p>
          <BsArrowUpRight size={18} />
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-5 md:mt-2 md:flex-row md:gap-0 lg:mt-3 xl:mt-5 2xl:mt-6">
        <div className="w-full space-y-5 md:w-[69.5%] md:space-y-2.5 lg:space-y-3 2xl:space-y-5">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:gap-0">
            <div
              className="h-[300px] overflow-hidden rounded-lg md:h-[120px] md:w-[32%] md:rounded-sm lg:h-[160px] xl:h-[200px] xl:rounded-lg 2xl:h-[240px]"
              onClick={() => openModal(1)}
            >
              <img
                src="/assets/imgs/p2.jpg"
                className="h-full w-full transform rounded-lg object-cover transition-transform duration-300 hover:scale-105"
                alt=""
              />
            </div>
            <div
              className="h-[300px] overflow-hidden rounded-lg md:ms-auto md:h-[120px] md:w-[66%] md:rounded-sm lg:h-[160px] xl:h-[200px] xl:rounded-lg 2xl:h-[240px]"
              onClick={() => openModal(2)}
            >
              <img
                src="/assets/imgs/p3.jpg"
                className="h-full w-full transform rounded-lg object-cover transition-transform duration-300 hover:scale-105"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:gap-0">
            <div
              className="h-[300px] w-full overflow-hidden rounded-lg md:h-[120px] md:w-[32%] md:rounded-sm lg:h-[160px] xl:h-[200px] xl:rounded-lg 2xl:h-[240px]"
              onClick={() => openModal(3)}
            >
              <img
                src="/assets/imgs/p4.jpg"
                className="h-full w-full transform rounded-lg object-cover transition-transform duration-300 hover:scale-105"
                alt=""
              />
            </div>
            <div
              className="h-[300px] w-full overflow-hidden rounded-lg md:h-[120px] md:w-[32%] md:rounded-sm lg:h-[160px] xl:h-[200px] xl:rounded-lg 2xl:h-[240px]"
              onClick={() => openModal(4)}
            >
              <img
                src="/assets/imgs/p6.jpg"
                className="h-full w-full transform rounded-lg object-cover transition-transform duration-300 hover:scale-105"
                alt=""
              />
            </div>
            <div
              className="h-[300px] w-full overflow-hidden rounded-lg md:h-[120px] md:w-[32%] md:rounded-sm lg:h-[160px] xl:h-[200px] xl:rounded-lg 2xl:h-[240px]"
              onClick={() => openModal(5)}
            >
              <img
                src="/assets/imgs/p7.jpg"
                className="h-full w-full transform rounded-lg object-cover transition-transform duration-300 hover:scale-105"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-5 md:flex-row md:gap-0">
            <div
              className="h-[300px] w-full overflow-hidden rounded-lg md:h-[120px] md:w-[66%] md:rounded-sm lg:h-[160px] xl:h-[200px] xl:rounded-lg 2xl:h-[240px]"
              onClick={() => openModal(6)}
            >
              <img
                src="/assets/imgs/p8.jpg"
                className="h-full w-full transform rounded-lg object-cover transition-transform duration-300 hover:scale-105"
                alt=""
              />
            </div>
            <div
              className="h-[300px] w-full overflow-hidden rounded-lg md:ms-auto md:h-[120px] md:w-[32%] md:rounded-sm lg:h-[160px] xl:h-[200px] xl:rounded-lg 2xl:h-[240px]"
              onClick={() => openModal(7)}
            >
              <img
                src="/assets/imgs/p5.jpg"
                className="h-full w-full transform rounded-lg object-cover transition-transform duration-300 hover:scale-105"
                alt=""
              />
            </div>
          </div>
        </div>

        <div
          className="h-[300px] w-full overflow-hidden rounded-lg md:ms-auto md:h-auto md:w-[29%] md:rounded-sm xl:rounded-lg"
          onClick={() => openModal(0)}
        >
          <img
            src="/assets/imgs/p1.jpg"
            className="h-full w-full transform rounded-lg object-cover transition-transform duration-300 hover:scale-105"
            alt=""
          />
        </div>
      </div>

      {modalIsOpen && (
        <div className="fixed inset-0 z-[600] flex size-full items-center justify-center bg-black bg-opacity-70">
          <div className="slider-container md:min-w-auto w-[85%] min-w-[330px] max-w-[370px] rounded-sm md:max-w-5xl xl:rounded-lg">
            <X
              className="absolute right-5 top-6 z-20 cursor-pointer text-white opacity-60 transition-all duration-200 ease-in-out hover:opacity-100"
              size={35}
              onClick={closeModal}
            />
            <Slider {...settings}>
              {images.map((image, index) => (
                <div
                  key={index}
                  className="h-[350px] md:h-[500px] w-full rounded-sm lg:rounded-lg"
                >
                  <img
                    src={image}
                    className="size-full transform rounded-sm object-cover lg:rounded-lg"
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
