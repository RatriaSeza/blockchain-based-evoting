import React from "react";
import Input from "../components/Input";

const Login = () => {

  return (
    <div className="min-h-dvh text-neutral-100">
      <div className="h-dvh flex justify-center items-center">
        <div className="w-11/12 px-6 py-4 bg-dark-card shadow-inner shadow-neutral-800 rounded-lg md:rounded-xl">
          <h3 className="text-2xl font-bold text-center uppercase">Login</h3>

          <div className="flex w-full flex-col gap-6">
            <Input label="NIM" type="text" placeholder="240xxxxxxxxxxx" />
            <Input label="Password" type="password" placeholder="********" />
          </div>
  
          <div className="flex justify-center mt-8">
            <button className="bg-clip-border bg-neutral-950 px-10 py-3 rounded-md shadow-inner">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;