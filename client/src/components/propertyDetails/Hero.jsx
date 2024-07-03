const Hero = () => {
    return (
      <>
        <div className="h-screen relative overflow-hidden">
          <img
            src="/assets/imgs/hero-section-img.jpg"
            className="absolute top-0"
            alt=""
          />
          <div className="absolute z-50 bg-black bg-opacity-50 inset-0"></div>
          <div className="absolute z-50 size-full flex justify-center items-center">
            <div className="text-center text-white space-y-6">
              <h1 className="font-semibold text-5xl">One by Bingati at Business Bay, Dubai</h1>
              <p className="font-light text-2xl">Home / Properties For Sale / One  By Bingati</p>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Hero;
  