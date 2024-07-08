import { useState } from "react";
import { BsArrowUpRight, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { X } from "lucide-react";

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

const ImageGallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="mt-24">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-[24px]">Image Gallery</h1>

        <div
          onClick={openModal}
          className="cursor-pointer flex items-center gap-1.5 border-b-2 border-transparent hover:border-mirage transition duration-200 ease-in-out"
        >
          <p className="text-mirage font-semibold text-[15px]">
            See All Images
          </p>
          <BsArrowUpRight size={20} />
        </div>
      </div>

      <div className="mt-6 flex">
        <div className="w-[69.5%] space-y-5">
          <div className="flex">
            <div className="w-[32%] h-[250px] overflow-hidden rounded-lg">
              <img
                src="/assets/imgs/p2.jpg"
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                alt=""
              />
            </div>
            <div className="w-[66%] h-[250px] ms-auto overflow-hidden rounded-lg">
              <img
                src="/assets/imgs/p3.jpg"
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                alt=""
              />
            </div>
          </div>

          <div className="flex justify-between">
            <div className="w-[32%] h-[250px] overflow-hidden rounded-lg">
              <img
                src="/assets/imgs/p4.jpg"
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                alt=""
              />
            </div>
            <div className="w-[32%] h-[250px] overflow-hidden rounded-lg">
              <img
                src="/assets/imgs/p6.jpg"
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                alt=""
              />
            </div>
            <div className="w-[32%] h-[250px] overflow-hidden rounded-lg">
              <img
                src="/assets/imgs/p7.jpg"
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                alt=""
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-[66%] h-[250px] overflow-hidden rounded-lg">
              <img
                src="/assets/imgs/p8.jpg"
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                alt=""
              />
            </div>
            <div className="w-[32%] h-[250px] ms-auto overflow-hidden rounded-lg">
              <img
                src="/assets/imgs/p5.jpg"
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="w-[29%] ms-auto overflow-hidden rounded-lg">
          <img
            src="/assets/imgs/p1.jpg"
            className="object-cover w-full h-full transform transition-transform duration-300 hover:scale-105"
            alt=""
          />
        </div>
      </div>

      {modalIsOpen && (
        <div className="fixed z-[600] inset-0 bg-black bg-opacity-70 flex justify-center items-center">
          <div className="w-full max-w-5xl rounded-lg">
            <X
              className="text-white opacity-60 hover:opacity-100 absolute top-6 right-5 cursor-pointer transition-all duration-200 ease-in-out"
              size={35}
              onClick={closeModal}
            />
            <div className="flex justify-between items-center">
              <BsChevronLeft
                size={50}
                onClick={prevImage}
                className="pe-6 text-white cursor-pointer"
              />
              <div className="w-full h-[500px] overflow-hidden rounded-lg">
                <img
                  src={images[currentImageIndex]}
                  className="object-cover w-full h-full"
                  alt=""
                />
              </div>
              <BsChevronRight
                size={47}
                onClick={nextImage}
                className="ps-5 text-white cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
