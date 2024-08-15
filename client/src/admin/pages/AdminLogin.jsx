import { useState } from 'react';
import axios from 'axios';

import Button from "../components/common/Button";
import InputField from "../components/common/InputField";

import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const navigate = useNavigate();
  const serverURL = import.meta.env.VITE_SERVER_URL;
  const [formData, setFormData] = useState({ Username: '', Password: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(`${serverURL}/admin/login`, formData);
      localStorage.setItem("token", response.data.data.token);
      toast.success('Login successful!');
      navigate("/admin/manage-properties");
    } catch (error) {
      console.log(error.message);
      toast.error('Login failed. Please check your credentials and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-h-screen min-h-screen overflow-hidden">
      <img
        src="/assets/imgs/admin-login.png"
        className="relative size-full h-screen"
        alt=""
      />

      <div className="absolute right-0 top-0 flex min-h-screen w-[36rem] items-center justify-center rounded-xl bg-white">
        <div className="mx-auto flex w-[75%] flex-col gap-y-8">
          <h1 className="text-center text-[48px] font-semibold">Sign In</h1>
          <form className="flex flex-col gap-y-3" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <InputField
                label="Username"
                type="text"
                name="Username"
                placeholder="user"
                value={formData.Username}
                onChange={handleChange}
              />
              <InputField
                label="Password"
                type="Password"
                name="Password"
                placeholder="********"
                value={formData.Password}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col items-center gap-y-7">
              <Button className="w-[100px]" type="submit" disabled={isLoading}>
                {isLoading ? 'Signing in...' : 'Sign in'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
