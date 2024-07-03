const MissionVisionSection = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-y-32">
      <div className="flex justify-between items-center gap-6">
        <div className="w-1/2">
          <div className="rounded-lg border-2 p-4">
            <h3 className="ps-1 font-medium text-[20px] text-sunriseOrange">
              How it Started
            </h3>
            <div className="space-y-6">
              <h2 className="text-[48px] font-medium leading-none">
                Our Dream is Making Real Estate Earn for You
              </h2>
              <p className="text-[16px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src="/assets/imgs/about.jpg"
            className="rounded-lg object-cover w-full h-[360px]"
            alt=""
          />
        </div>
      </div>

      <div className="flex gap-6 items-center">
        <div className="w-1/2">
          <div className="rounded-lg border-2 p-4">
            <h3 className="ps-1 font-medium text-[20px] text-sunriseOrange">
              Our Vision
            </h3>
            <div className="space-y-6">
              <h2 className="text-[48px] font-medium leading-none">
                Making Real Estate Stress Free
              </h2>
              <p className="text-[16px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it
              </p>
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <div className="rounded-lg border-2 p-4">
            <h3 className="ps-1 font-medium text-[20px] text-sunriseOrange">
              Our MIssion
            </h3>
            <div className="space-y-6">
              <h2 className="text-[48px] font-medium leading-none">
                Making Real Estate Stress Free
              </h2>
              <p className="text-[16px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionSection;
