import { useState } from "react";
import Input from "../components/Input";

const Login = () => {
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  }

  return (
    <div className="min-h-dvh text-neutral-100">
      <div className="h-dvh flex justify-center items-center">
        <div className="w-11/12 md:max-w-md px-6 md:px-10 py-4 md:py-8 bg-dark-card shadow-inner shadow-neutral-800 rounded-lg md:rounded-xl">
          <h3 className="text-2xl md:text-4xl font-bold text-center uppercase">Login</h3>

          <div className="flex w-full flex-col gap-6">
            <Input label="NIM" type="text" placeholder="240xxxxxxxxxxx" />
            <Input label="Password" value={password} type={ passwordVisible ? 'text' : 'password' } placeholder="********" icon={ passwordVisible ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>} onChange={(e) => setPassword(e.target.value)} onClickIcon={handlePasswordVisibility} />
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