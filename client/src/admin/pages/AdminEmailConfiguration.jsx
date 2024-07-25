import Button from "../components/common/Button";
import Header from "../components/common/Header";
import InputField from "../components/common/InputField";

const AdminEmailConfiguration = () => {
  return (
    <div className="mx-auto w-[80%] space-y-5">
      <div className="flex flex-col gap-y-7">
        <Header title="Email Configuration" />

        <div className="flex items-start rounded-xl border border-lightGrey bg-white px-6 py-5">
          <h1 className="w-[22%] text-[20px] font-semibold">
            Account Information
          </h1>
          <div className="w-[30%] space-y-6">
            <InputField
              label="Email"
              type="email"
              value="asif.khameni@gmail.com"
            />
            <InputField
              label="App Password"
              type="password"
              value="***********"
            />
          </div>
        </div>

        <div className="ms-auto space-x-1.5">
            <Button className="bg-mirage text-white rounded-xl">Save</Button>
            <Button className="bg-red-700 text-white rounded-xl">Cancel</Button>
        </div>
      </div>
    </div>
  );
};

export default AdminEmailConfiguration;
