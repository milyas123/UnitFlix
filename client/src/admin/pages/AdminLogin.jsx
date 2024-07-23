import Button from "../components/common/Button";
import InputField from "../components/common/InputField";

const AdminLogin = () => {
  return (
    <div className="max-h-screen min-h-screen overflow-hidden">
      <img
        src="/assets/imgs/admin-login.png"
        className="relative size-full"
        alt=""
      />

      <div className="absolute right-0 top-0 flex min-h-screen w-[36rem] items-center justify-center rounded-xl bg-white">
        <div className="mx-auto flex w-[75%] flex-col gap-y-8">
          <h1 className="text-center text-[48px] font-semibold">Sign In</h1>
          <form className="flex flex-col gap-y-3">
            <div className="space-y-4">
              <InputField
                label="Email"
                type="email"
                placeholder="example@gmail.com"
              />
              <InputField
                label="Password"
                type="password"
                placeholder="********"
              />
            </div>
            <p className="ms-auto text-[14px] font-medium text-mirage">
              Forgot Password
            </p>

            <div className="flex flex-col items-center gap-y-7">
              <Button className="w-[100px]">Sign in</Button>
              <Button className="w-[100px]" variant="outline">
                Sign Up
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
