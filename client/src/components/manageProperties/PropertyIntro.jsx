import { LuBadgeCheck } from "react-icons/lu";

const PropertyIntro = () => {
  return (
    <div className="w-[90%] mx-auto h-screen flex justify-center items-center">
      <div className="flex justify-between items-center">
        <div className="w-[48%] flex flex-col gap-y-8">
          <h1 className="font-bold text-[36px]">
            Welcome to UNITFLIX Property Management
          </h1>
          <p className="text-[20px]">
            At UNITFLIX, we offer top-notch property management services for all
            types of rental properties. Our expert team has years of experience
            in managing properties of all sizes, from single-family homes to
            large apartment complexes. We pride ourselves on providing
            exceptional customer service, ensuring that both landlords and
            tenants are satisfied with our services. Our goal is to make the
            rental process as seamless and efficient as possible for all parties
            involved.
          </p>

          <div className="text-[20px] flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-2.5">
                <LuBadgeCheck size={40} />
                <p>
                  We manage everything from small apartments to large complexes.
                </p>
              </div>

              <div className="flex items-center gap-x-2.5">
                <LuBadgeCheck size={40} />
                <p>
                  We manage everything from small apartments to large complexes.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-2.5">
                <LuBadgeCheck size={40} />
                <p>
                  We manage everything from small apartments to large complexes.
                </p>
              </div>

              <div className="flex items-center gap-x-2.5">
                <LuBadgeCheck size={40} />
                <p>
                  We manage everything from small apartments to large complexes.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[44%]">
          <img
            src="/assets/imgs/property.jpg"
            className="h-[610px] object-cover"
            alt="property-image"
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyIntro;
