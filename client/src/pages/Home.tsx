import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { ToastError } from "../components/Toast";

import Nav from "../components/Nav";
import Button from "../components/Button";
import Countdown from "../components/Home/Countdown";
import LiveCount from "../components/Home/LiveCount";

import HiGif from "../assets/img/hi.gif";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, ,removeCookie] = useCookies(["token"]);
  const [isLogin, setIsLogin] = useState(false);
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  useEffect(() => {
    const verifyToken = async () => {
      if (!localStorage.getItem("token")) {
        if (localStorage.getItem("user")) localStorage.removeItem("user");
        setIsLogin(false);
        return;
      } else {
        try {
          const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth`, {
          },{ 
            withCredentials: true 
          });
          
          const { status, data: { user } } = response;
          
          if (user) setIsLogin(true);
    
          if (!status) {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            ToastError({ message: "Something is wrong, please login.", position: "top-right", duration: 1400 });
            setTimeout(() => {
              navigate("/login");
            }, 2000);
          }
        } catch (error: unknown) {
          if (localStorage.getItem("token")) localStorage.removeItem("token");
          if (localStorage.getItem("user")) localStorage.removeItem("user");
          console.error(error);
          ToastError({ message: "Something is wrong, please login.", position: "top-right", duration: 1400 });
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        }
      }
    };
    
    verifyToken();
  },  [cookies, navigate, removeCookie]);

  return (
    <div className="min-h-dvh text-neutral-100 profile-background">
      <Nav active="home" isLogin={isLogin} />
      <div className="px-6 py-4">
        <div className="mb-24 md:mb-8 md:mt-20 md:container md:mx-auto">
          <div className="md:max-w-5xl mx-auto">
            { isLogin && (
              <p className="text-base leading-4 mb-8">
                Hi, <br />
                <span className="text-xl font-bold flex">
                  {user.voter.name ?? user.username}
                  <img className="w-6 h-6 ml-2" alt="GIF" src={HiGif} />
                </span>
              </p>
            )}
            <div className="text-center mb-6 md:mb-8">
              <h1 className="text-3xl md:text-6xl font-semibold mb-6 md:mb-8">Pemira FSM Undip</h1>
              <p className="text-base md:text-2xl mb-6">"Satu Suara Untuk Perubahan, Beda Pilihan Jaga Persatuan"</p>
              <a href="/vote">
                <Button label="Vote Now!"/>
              </a>
            </div>
            <div className="mb-6 md:mb-8">
              <Countdown />
            </div>
            <div className="mb-6 md:mb-8">
              <LiveCount />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer  
        theme="dark"
      />
    </div>
  );
};

export default Home;
