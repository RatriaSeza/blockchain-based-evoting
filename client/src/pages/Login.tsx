import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import Input from "../components/Input";
import Button from "../components/Button";
import { ToastError, ToastSuccess, ToastWarning } from "../components/Toast";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [, setCookie] = useCookies(["token"], {
    doNotParse: true,
  });
  const navigate = useNavigate();

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username || !password) {
      return ToastWarning({ message: "Please fill all the fields." });
    } else if (password.length < 8) {
      return ToastWarning({ message: "Password must be at least 8 characters." });
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        username,
        password,
      }, { 
        withCredentials: true 
      });
      
      const { status, data: { message, token } } = response;
      
      if (status == 200) {
        setCookie("token", token, { path: '/' });
        ToastSuccess({ message, duration: 1500 });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        ToastError({ message });
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
  };

  return (
    <div className="min-h-dvh text-neutral-100">
      <div className="h-dvh flex justify-center items-center">
        <div className="w-11/12 md:max-w-md px-6 md:px-8 py-6 md:py-8 bg-dark-card shadow-inner shadow-neutral-800 rounded-lg md:rounded-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-center uppercase mb-2 md:mb-4">
            Login
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="flex w-full flex-col gap-6">
              <Input
                id="nim"
                label="NIM"
                name="nim"
                value={username}
                type="text"
                placeholder="240xxxxxxxxxxx"
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                id="password"
                label="Password"
                name="password"
                value={password}
                type={passwordVisible ? "text" : "password"}
                placeholder="********"
                icon={
                  passwordVisible ? (
                    <i className="fa-solid fa-eye-slash"></i>
                  ) : (
                    <i className="fa-solid fa-eye"></i>
                  )
                }
                onChange={(e) => setPassword(e.target.value)}
                onClickIcon={handlePasswordVisibility}
              />
            </div>

            <div className="flex justify-center mt-4 md:mt-8">
              <Button label="Login" customClass="px-8 md:px-10 py-2 md:py-3" />
            </div>
          </form>
          <ToastContainer  
            theme="dark"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
