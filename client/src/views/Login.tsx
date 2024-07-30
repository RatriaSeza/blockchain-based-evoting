import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const Login = () => {
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="min-h-dvh text-neutral-100">
      <div className="h-dvh flex justify-center items-center">
        <div className="w-11/12 md:max-w-md px-6 md:px-8 py-6 md:py-8 bg-dark-card shadow-inner shadow-neutral-800 rounded-lg md:rounded-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-center uppercase mb-2 md:mb-4">
            Login
          </h3>

          <div className="flex w-full flex-col gap-6">
            <Input label="NIM" type="text" placeholder="240xxxxxxxxxxx" />
            <Input
              label="Password"
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
        </div>
      </div>
    </div>
  );
};

export default Login;
