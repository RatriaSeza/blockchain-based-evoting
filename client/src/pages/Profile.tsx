import axios from "axios";
import Nav from "../components/Nav";
import avatar from "../assets/img/stylish-boy.png";
// import { useCookies } from "react-cookie"; 
import { useNavigate } from "react-router-dom";
import { ToastError, ToastSuccess } from "../components/Toast";
import { useCookies } from "react-cookie";
import { useEffect } from "react";

const user = {
  name: "Satria Reza Ramadhan",
  nim: "24060120130052",
  major: "Informatika",
  classOf: 2021,
  status: "Voted"
}

const Profile = () => {
  const navigate = useNavigate();
  const [cookies, ,removeCookie] = useCookies(["token"]);

  useEffect(() => {
    const verifyToken = async () => {
      if (!localStorage.getItem("token")) {
        console.log('No token found, redirecting to login...');
        ToastError({ message: "You need to login first.", position: "top-right", duration: 1400 });
        navigate("/login");

        return;
      }

      try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth`, {
        },{ 
          withCredentials: true 
        });
        
        const { status, data: { user } } = response;
        console.log(user);
        
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
    };
    
    verifyToken();
  },  [cookies, navigate, removeCookie]);

  const handleLogout = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/logout`, {
      },{ 
        withCredentials: true 
      });
      
      const { status, data: { message } } = response;

      if (status == 200) {
        localStorage.removeItem("token");
        ToastSuccess({ message, duration: 1400 });
        navigate("/login");
      } else {
        ToastError({ message: "An error occurred. Please try again." });
      }
    } catch (error: unknown) {
      console.log(error);
    }
  }

  return (
    <div className="min-h-dvh text-neutral-100 md:flex md:items-center md:max-w-5xl mx-auto">
      <Nav active="profile" />
      <div className="md:grow md:flex md:justify-between md:bg-neutral-600/10 md:backdrop-blur-sm md:h-2/3 md:py-10 md:px-16 md:rounded-3xl md:shadow-dark-card">
        <div>
          <div className="relative md:static w-full h-36 bg-gradient-to-br md:bg-none from-[#00b4db] to-[#0083b0] rounded-b-lg">
            <img className="absolute md:static -bottom-12 left-1/2 -translate-x-1/2 md:translate-x-0 w-24 h-24 object-cover bg-neutral-800 ring-[6px] md:ring-0 ring-black md:ring-neutral-300 rounded-full" src={avatar} alt="User Avatar" />
          </div>
          <div className="mt-20 md:mt-0 text-center md:text-left">
            <p className="mb-1 text-2xl font-semibold">{user.name}</p>
            <p className="text-neutral-300">{user.nim}</p>
            <p className="font-semibold">{user.major} - {user.classOf}</p>
          </div>
        </div>
        <div className="md:flex md:flex-col-reverse md:justify-between">
          <div className="mt-10 md:mt-0 flex flex-col items-center gap-2">
            <h6 className="font-semibold text-lg md:hidden">Status</h6>
            <div className="w-fit px-6 md:px-10 py-1 md:py-3 bg-cyan-600 text-base font-medium opacity-90 rounded-full">{user.status}</div>
          </div>
          <div className="flex justify-center mt-20 md:mt-0">
            <button onClick={handleLogout}
              className="select-none rounded-lg bg-red-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              <span><i className="fa-solid fa-arrow-right-from-bracket mr-2"></i></span>Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;