import Button from "../components/common/Button";
import Header from "../components/common/Header";
import InputField from "../components/common/InputField";
import {useEffect, useReducer} from "react";
import axios from "axios";
import Spinner from "@/website/components/common/Spinner.jsx";
import {toast} from "react-toastify";

const AdminEmailConfiguration = () => {

  const serverURL = import.meta.env.VITE_SERVER_URL;

  const configurationReducer = (state, action) => {
    if(action.type === 'update') {
      return {
        ...state,
        ...action.payload
      }
    }
    else if(action.type === 'loading_start') {
      return {
        ...state,
        loading: true
      }
    }
    else if(action.type === 'loading_end') {
      return {
        ...state,
        loading: false
      }
    }
    else if (action.type === 'errors') {
      return {
        ...state,
        errors: action.payload
      }
    }
    else if (action.type === 'errors_clear') {
      return {
        ...state,
        errors: []
      }
    }
  }

  const [configuration, dispatch] = useReducer(configurationReducer, {
    email: "",
    password: '',
    host: "",
    port: 0,
    loading: false,
    errors: [],
  });

  const fetchConfiguration = async () => {
    try {
      dispatch({type: "loading_start"})
      const token = localStorage.getItem("token");
      const response = await axios.get(`${serverURL}/admin/email-configuration`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      dispatch({type: 'update', payload: response.data.data.configuration});
    } catch (err) {
      console.log(err);
      if(err.response.data.error) {
        dispatch({type: 'errors', payload: [err.response.data.error]});
      }
    } finally {
      dispatch({type: "loading_end"})
    }
  }

  useEffect(() => {
    fetchConfiguration();
  }, []);

  const onChange = (e) => {
    const {name, value} = e.currentTarget;
    configuration[name] = value;
    dispatch({
      type: 'update',
      payload: {configuration}
    })
  }

  const onSave = async () => {
    try {
      dispatch({type: "loading_start"})
      const token = localStorage.getItem("token");
      const response = await axios.post(`${serverURL}/admin/email-configuration`, {
        email: configuration.email,
        password: configuration.password,
        host: configuration.host,
        port: configuration.port ? parseInt(configuration.port) : 0,
      },{
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      dispatch({type: 'update', payload: {...response.data.data.configuration, password: ''}});
      toast.success(response.data.message)
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.errors ? err.response.data.errors[0] : err.response.message ? err.response.message : err.message);
      if(err.response.data.error) {
        dispatch({type: 'errors', payload: [err.response.data.error]});
      }
    } finally {
      dispatch({type: "loading_end"})
    }
  }

  return (
    <div className="mx-auto w-[80%] space-y-5">
      <div className="flex flex-col gap-y-7">
        <Header title="Email Configuration"/>
        {
          configuration.loading ?
              <div className='flex items-center justify-center'>
                <Spinner/>
              </div> :
              <>
                <div className="flex items-start rounded-xl border border-lightGrey bg-white px-6 py-5">
                  <h1 className="w-[22%] text-[20px] font-semibold">
                    Account Information
                  </h1>
                  <div className="w-[30%] space-y-6">
                    <InputField
                        name={'email'}
                        label="Email"
                        type="email"
                        placeholder='abc@example.com'
                        value={configuration.email}
                        onChange={e => onChange(e)}
                    />
                    <InputField
                        label="App Password"
                        type="password"
                        value={configuration.password}
                        name={'password'}
                        onChange={e => onChange(e)}
                    />
                    <InputField
                        label="Hostname"
                        type="text"
                        value={configuration.host}
                        placeholder='smtp.example.com'
                        name={'host'}
                        onChange={e => onChange(e)}
                    />
                    <InputField
                        label="Port"
                        type="number"
                        value={configuration.port}
                        placeholder='SMTP Port'
                        name={'port'}
                        onChange={e => onChange(e)}
                    />
                  </div>
                </div>

                <div className="ms-auto space-x-1.5">
                  <Button className="bg-mirage text-white rounded-xl" onClick={onSave}>Save</Button>
                  <Button className="bg-red-700 text-white rounded-xl">Cancel</Button>
                </div>
              </>
        }
      </div>
    </div>
  );
};

export default AdminEmailConfiguration;
