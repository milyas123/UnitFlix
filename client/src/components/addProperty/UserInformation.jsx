import { Input } from "../ui/input"

const UserInformation = () => {
  return (
    <div className="rounded-xl bg-white px-8 py-4 flex items-start gap-14">
    <h2 className="font-semibold text-[20px] whitespace-nowrap">
      User Information
    </h2>
    <div className="p-1 w-full flex flex-col gap-y-8">
      <div className="space-y-2.5 w-full">
        <label className="font-semibold text-[16px]">Full Name</label>
        <Input
          type="text"
          id="title"
          className="ps-3"
          placeholder="Dubai Best Home under 1.5 kanal"
        />
      </div>

      <div className="space-y-2.5 w-full">
        <label className="font-semibold text-[16px]">Email</label>
        <Input
          type="email"
          id="email"
          className="ps-3"
          placeholder="example@gmail.com"
        />
      </div>

      <div className="space-y-2.5 w-full">
        <label className="font-semibold text-[16px]">Phone Number</label>
        <Input
          type="email"
          id="email"
          className="ps-3"
          placeholder="000 0000 0000"
        />
      </div>
    </div>
  </div>
  )
}

export default UserInformation