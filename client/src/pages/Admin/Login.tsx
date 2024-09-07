import { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/theme.css"
import LogoBemUndip from "@assets/img/logo-bem-undip.png"


export const LoginAdmin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <main>
      <div className="flex flex-col w-full overflow-hidden relative min-h-screen radial-gradient items-center justify-center px-4">
        <div className="justify-center items-center w-full card lg:flex max-w-md">
          <div className="w-full card-body">
            <Link to="/" className="py-4 block">
              <img src={LogoBemUndip} alt="Logo" className="mx-auto w-40 h-auto" />
            </Link>
            <form>
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
                <input
                  type="password"
                  id="forPassword"
                  value={password}
                  onChange={handlePasswordChange}
                  className="py-3 px-4 block w-full border-gray-200 rounded-sm text-sm focus:border-blue-600 focus:ring-0"
                />
              </div>
              <div className="flex justify-between mb-6">
                <Link to="/forgot-password" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                  Forgot Password?
                </Link>
              </div>
              <div className="grid my-6">
                <Link to="/" className="btn py-[10px] text-base text-white font-medium bg-blue-600 hover:bg-blue-700">
                  Sign In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};
