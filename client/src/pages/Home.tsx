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

const Home = () => {
  const navigate = useNavigate();
  const [cookies, ,removeCookie] = useCookies(["token"]);
  const [username, setUsername] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const verifyToken = async () => {
      if (!localStorage.getItem("token")) {
        setIsLogin(false);
        return;
      } else {
        try {
          const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth`, {
          },{ 
            withCredentials: true 
          });
          
          const { status, data: { user, message } } = response;
          console.log(message);
          
          setUsername(user.username);
          setIsLogin(true);
    
          if (!status) {
            localStorage.removeItem("token");
            ToastError({ message: "You need to login first.", position: "top-right", duration: 1400 });
            setTimeout(() => {
              navigate("/login");
            }, 2000);
          }
        } catch (error: unknown) {
          console.error(error);
          navigate("/login");
        }
      }
    };
    
    verifyToken();
  },  [cookies, navigate, removeCookie]);

  return (
    <div className="min-h-dvh text-neutral-100">
      <Nav active="home" isLogin={isLogin} />
      <div className="px-6 py-4">
        <div className="mb-24 md:mb-8 md:mt-20 md:container md:mx-auto">
          <div className="md:max-w-5xl mx-auto">
            { isLogin && (
              <p className="text-base leading-4 mb-8">
                Hi, <br />
                <span className="text-xl font-bold flex">
                  {username}
                  <img className="w-6 h-6 ml-2" alt="GIF" src="https://camo.githubusercontent.com/0c732027af8a28d138e3698181f7be7c9b97d443b4beb9c7ce8ec4cffc6b4767/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f6876524a434c467a6361737252346961377a2f67697068792e676966"/>
                </span>
              </p>
            )}
            <div className="text-center mb-6 md:mb-8">
              <h1 className="text-3xl md:text-6xl font-semibold mb-6 md:mb-8">Lorem, ipsum dolor.</h1>
              <p className="text-base md:text-2xl mb-6  ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, rem!</p>
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
