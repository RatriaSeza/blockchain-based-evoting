import { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/theme.css"
import AdminLogo from "../../assets/img/admin/logos/logo-light.svg";

export const LoginAdmin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(e.target.checked);
  };

  return (
    <main>
      <div className="flex flex-col w-full overflow-hidden relative min-h-screen radial-gradient items-center justify-center px-4">
        <div className="justify-center items-center w-full card lg:flex max-w-md">
          <div className="w-full card-body">
            <Link to="/" className="py-4 block">
              <img src={AdminLogo} alt="Logo" className="mx-auto" />
            </Link>
            <p className="mb-4 text-gray-400 text-sm text-center">Admin Pemira FSM</p>
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
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="hs-default-checkbox"
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                    className="shrink-0 mt-0.5 border-gray-200 rounded-[4px] text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="hs-default-checkbox" className="text-sm text-gray-500 ms-3">Remember this Device</label>
                </div>
                <Link to="/forgot-password" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                  Forgot Password?
                </Link>
              </div>
              <div className="grid my-6">
                <Link to="/" className="btn py-[10px] text-base text-white font-medium bg-blue-600 hover:bg-blue-700">
                  Sign In
                </Link>
              </div>
              <div className="flex justify-center gap-2 items-center">
                <p className="text-base font-semibold text-gray-400">New to Spike?</p>
                <Link to="/register" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                  Create an account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};
