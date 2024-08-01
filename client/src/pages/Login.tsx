import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Input from "../components/Input";
import Button from "../components/Button";

// BUG: login still not working
const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    nim: "",
    password: "",
  });

  const { nim, password } = inputValue;
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (message: string) => {
    toast.error(message, {
      position: "bottom-right",
    });
  };

  const handleSucces = (message: string) => {
    toast.success(message, {
      position: "bottom-right",
    });
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { token, message } = data;

      if (token) {
        handleSucces(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error: unknown) {
      console.log(error);
    }

    setInputValue({
      ...inputValue,
      nim: "",
      password: "",
    });
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
                value={nim}
                type="text"
                placeholder="240xxxxxxxxxxx"
                onChange={handleOnChange}
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
                onChange={handleOnChange}
                onClickIcon={handlePasswordVisibility}
              />
            </div>

            <div className="flex justify-center mt-4 md:mt-8">
              <Button label="Login" customClass="px-8 md:px-10 py-2 md:py-3" />
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Login;
