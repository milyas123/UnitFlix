const ImageGallery = () => {
  return (
    <div className="mt-24">
      <h1 className="font-semibold text-[24px]">Image Gallery</h1>

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
    </div>
  );
};

export default ImageGallery;
