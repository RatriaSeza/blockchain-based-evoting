import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/css/theme.css"
import LogoBemUndip from "@assets/img/logo-bem-undip.png"
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { ToastContainer } from "react-toastify";
import { ToastError, ToastSuccess, ToastWarning } from "@components/Toast";
import axios from "axios";


export const LoginAdmin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!username || !password) {
      return ToastError({ message: "Please fill all the fields.", duration: 1500 });
    } else if (password.length < 8) {
      return ToastError({ message: "Password must be at least 8 characters.", duration: 1500 });
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        username,
        password,
        role: "admin"
      }, { 
        withCredentials: true 
      });

      const { status, data: { message, token, user } } = response;

      if (status == 200) {
        localStorage.setItem("admin-token", token);
        localStorage.setItem("admin", JSON.stringify(user));

        ToastSuccess({ message, duration: 1400 });
        setTimeout(() => {
          navigate("/admin/dashboard");
        }, 2000);
      } else {
        ToastError({ message, duration: 1500 });
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          ToastError({ message:error.response.data.message || "An error occurred. Please try again."});
        } else if (error.request) {
          ToastWarning({ message: "No response from server. Please try again later." });
        } else {
          ToastWarning({ message: "An error occurred. Please try again." });
        }
      } else {
        ToastWarning({ message: "An unexpected error occurred. Please try again." });
      }
    }
  }

  return (
    <main>
      <div className="flex flex-col w-full overflow-hidden relative min-h-screen radial-gradient items-center justify-center px-4">
        <div className="justify-center items-center w-full card lg:flex max-w-md">
          <div className="w-full card-body">
            <Link to="/admin/login" className="py-4 block">
              <img src={LogoBemUndip} alt="Logo" className="mx-auto w-32 h-auto" />
            </Link>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="forUsername" className="block text-sm mb-2 text-gray-400">Username</label>
                <input
                  type="text"
                  id="forUsername"
                  value={username}
                  onChange={handleUsernameChange}
                  className="py-3 px-4 block w-full border-gray-200 rounded-sm text-sm focus:border-blue-600 focus:ring-0"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="forPassword" className="block text-sm mb-2 text-gray-400">Password</label>
                <div className="relative">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    id="forPassword"
                    value={password}
                    onChange={handlePasswordChange}
                    className="py-3 px-4 block w-full border-gray-200 rounded-sm text-sm focus:border-blue-600 focus:ring-0"
                  />
                  <button
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    type="button"
                    className="absolute right-0 top-0 w-10 h-full flex justify-center items-center pr-3 text-blue-600 hover:text-blue-500 active:text-blue-700">
                    {passwordVisible ? (
                      <EyeSlashIcon className="size-6"/>
                    ) : (
                      <EyeIcon className="size-6"/>
                    )}
                  </button>
                </div>
              </div>
              <div className="grid my-6">
                <button className="btn py-[10px] text-base text-white font-medium bg-blue-600 hover:bg-blue-700">
                  Sign In
                </button>               
              </div>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer />
    </main>
  );
};
