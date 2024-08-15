import { Input } from "../ui/input";

const UserInformation = ({ formData, handleChange }) => {
  return (
    <div className="user--addProperty-sectionPadding flex flex-col rounded-xl border border-lightGrey bg-white md:flex-row md:items-start">
      <h2 className="user--addProperty-headingTextSize whitespace-nowrap md:w-[23%]">
        User Information
      </h2>
      <div className="mt-4 flex flex-col gap-y-4 md:ms-auto md:mt-0 md:w-[72%] md:gap-y-2 lg:gap-y-4 xl:gap-y-6 2xl:gap-y-8">
        <div className="w-full md:space-y-1 lg:space-y-1.5 xl:space-y-2 2xl:space-y-2.5">
          <label className="user--addProperty-labelTextSize">Full Name</label>
          <Input
            type="text"
            id="name"
            className="ps-3"
            placeholder="John Doe"
            value={formData.userDetail.name}
            onChange={handleChange}
          />
        </div>

        <div className="w-full md:space-y-1 lg:space-y-1.5 xl:space-y-2 2xl:space-y-2.5">
          <label className="user--addProperty-labelTextSize">Email</label>
          <Input
            type="email"
            id="email"
            className="ps-3"
            placeholder="example@gmail.com"
            value={formData.userDetail.email}
            onChange={handleChange}
          />
        </div>

        <div className="w-full md:space-y-1 lg:space-y-1.5 xl:space-y-2 2xl:space-y-2.5">
          <label className="user--addProperty-labelTextSize">
            Phone Number
          </label>
          <Input
            type="text"
            id="phoneNumber"
            className="ps-3"
            placeholder="000 0000 0000"
            value={formData.userDetail.phoneNumber}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
