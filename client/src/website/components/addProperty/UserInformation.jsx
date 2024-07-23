import { Input } from "../ui/input";

const UserInformation = () => {
  return (
    <div className="flex items-start rounded-xl bg-white px-8 py-4">
      <h2 className="w-[23%] whitespace-nowrap text-[20px] font-semibold">
        User Information
      </h2>
      <div className="ms-auto flex w-[72%] flex-col gap-y-8 p-1">
        <div className="w-full space-y-2.5">
          <label className="text-[16px] font-semibold">Full Name</label>
          <Input
            type="text"
            id="title"
            className="ps-3"
            placeholder="Dubai Best Home under 1.5 kanal"
          />
        </div>

        <div className="w-full space-y-2.5">
          <label className="text-[16px] font-semibold">Email</label>
          <Input
            type="email"
            id="email"
            className="ps-3"
            placeholder="example@gmail.com"
          />
        </div>

        <div className="w-full space-y-2.5">
          <label className="text-[16px] font-semibold">Phone Number</label>
          <Input
            type="email"
            id="email"
            className="ps-3"
            placeholder="000 0000 0000"
          />
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
