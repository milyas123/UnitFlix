import { LuBadgeCheck } from "react-icons/lu";

const PropertyIntro = () => {
  return (
    <div className="my-6 flex items-center justify-center p-2 sm:my-0 sm:p-0 md:h-[80vh]">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col gap-y-7 md:w-[56%] md:gap-y-2.5 lg:w-[55%] lg:gap-y-5 xl:gap-y-6 2xl:gap-y-8">
          <h1 className="text-[23px] font-bold md:text-[17px] lg:text-[20px] xl:text-[28px] 2xl:text-[32px]">
            Welcome to UNITFLIX Property Management
          </h1>
          <p className="text-[13.5px] md:text-[9px] lg:text-[11px] xl:text-[15px] 2xl:text-[18px]">
            At UNITFLIX, we offer top-notch property management services for all
            types of rental properties. Our expert team has years of experience
            in managing properties of all sizes, from single-family homes to
            large apartment complexes. We pride ourselves on providing
            exceptional customer service, ensuring that both landlords and
            tenants are satisfied with our services. Our goal is to make the
            rental process as seamless and efficient as possible for all parties
            involved.
          </p>

          <div className="flex flex-col gap-6 text-[13px] md:gap-2 md:text-[9px] lg:gap-4 lg:text-[11px] xl:gap-5 xl:text-[15px] 2xl:gap-6 2xl:text-[18px]">
            <div className="flex flex-col items-center justify-between gap-y-6 sm:gap-y-0 md:flex-row md:gap-x-3 lg:gap-x-5 xl:gap-x-6">
              <div className="flex items-center gap-x-2 md:gap-x-0.5 lg:gap-x-2 xl:gap-x-2 2xl:gap-x-2.5">
                <LuBadgeCheck size={30} />
                <p>
                  We manage everything from small apartments to large complexes.
                </p>
              </div>

              <div className="flex items-center gap-x-2 md:gap-x-0.5 lg:gap-x-2 xl:gap-x-2 2xl:gap-x-2.5">
                <LuBadgeCheck size={30} />
                <p>
                  We manage everything from small apartments to large complexes.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-y-6 sm:gap-y-0 md:flex-row md:gap-x-3 lg:gap-x-5 xl:gap-x-6">
              <div className="flex items-center gap-x-2 md:gap-x-0.5 lg:gap-x-2 xl:gap-x-2 2xl:gap-x-2.5">
                <LuBadgeCheck size={30} />
                <p>
                  We manage everything from small apartments to large complexes.
                </p>
              </div>

              <div className="flex items-center gap-x-2 md:gap-x-0.5 lg:gap-x-2 xl:gap-x-2 2xl:gap-x-2.5">
                <LuBadgeCheck size={30} />
                <p>
                  We manage everything from small apartments to large complexes.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ms-auto md:w-[39%]">
          <img
            src="/assets/imgs/property.jpg"
            className="h-[610px] object-cover md:h-[280px] lg:h-[320px] xl:h-[450px] 2xl:h-[520px]"
            alt="property-image"
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyIntro;
