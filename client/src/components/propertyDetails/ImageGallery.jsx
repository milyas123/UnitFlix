const ImageGallery = () => {
  return (
    <div className="mt-24">
      <h1 className="font-semibold text-[24px]">Image Gallery</h1>

      <div className="mt-6 flex">
        <div className="w-[69.5%] space-y-5">
          <div className="flex">
            <img
              src="/assets/imgs/p2.jpg"
              className="w-[32%] object-cover rounded-lg h-[250px] "
              alt=""
            />

            <img
              src="/assets/imgs/p3.jpg"
              className="w-[66%] ms-auto object-cover rounded-lg h-[250px] "
              alt=""
            />
          </div>

          <div className="flex justify-between">
            <img
              src="/assets/imgs/p4.jpg"
              className="w-[32%] object-cover rounded-lg h-[250px]"
              alt=""
            />
            <img
              src="/assets/imgs/p6.jpg"
              className="w-[32%] object-cover rounded-lg h-[250px]"
              alt=""
            />
            <img
              src="/assets/imgs/p7.jpg"
              className="w-[32%] object-cover rounded-lg h-[250px]"
              alt=""
            />
          </div>
          <div className="flex">
            <img
              src="/assets/imgs/p8.jpg"
              className="w-[66%] object-cover rounded-lg h-[250px] "
              alt=""
            />
            <img
              src="/assets/imgs/p5.jpg"
              className="w-[32%] ms-auto object-cover rounded-lg h-[250px] "
              alt=""
            />
          </div>
        </div>

        <div className="w-[29%] ms-auto">
          <img
            src="/assets/imgs/p1.jpg"
            className="object-cover rounded-lg h-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
