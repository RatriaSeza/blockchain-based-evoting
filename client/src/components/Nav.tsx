import React from 'react';
import { HomeIcon as HomeOutline, DocumentCheckIcon as VoteOutline, UserIcon as ProfileOutline } from '@heroicons/react/24/outline';
import { HomeIcon as HomeSolid, DocumentCheckIcon as VoteSolid, UserIcon as ProfileSolid } from '@heroicons/react/24/solid';
import Ballot from '../assets/img/ballot-box.png';
import { ToastError, ToastSuccess } from './Toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

type NavItemProps = {
  isActive: boolean;
  icon: React.ElementType; 
  link: string;
  text: string;
};

type NavProps = {
  active: string;
  isLogin?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ isActive, icon: Icon, link, text }) => {
  return (
    <a href={link} className={`flex flex-col justify-center items-center gap-1 md:py-3 md:px-5 md:hover:bg-neutral-950 ${isActive ? 'text-neutral-200 md:bg-neutral-800 font-medium' : 'text-neutral-400 hover:text-white'} transition ease-in-out duration-300 md:rounded-sm`}>
      <Icon className="size-7 md:hidden" />
      <span className=" text-sm">{text}</span>
    </a>
  )
};

const Nav: React.FC<NavProps> = ({ active, isLogin }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/logout`, {
      },{ 
        withCredentials: true 
      });
      
      const { status, data: { message } } = response;

      if (status == 200) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        ToastSuccess({ message, duration: 1400 });
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        ToastError({ message: "An error occurred. Please try again." });
      }
    } catch (error: unknown) {
      console.log(error);
    }
  }

  return (
    <header className='fixed bottom-2 md:top-2 left-0 w-full md:h-fit z-50'>
      <nav className="md:container mx-auto">
        <div className='md:flex md:justify-between w-11/12 md:max-w-5xl py-3 md:py-2 md:pl-10 md:pr-2 bg-dark-card rounded-b-lg rounded-t-3xl md:rounded-3xl mx-auto shadow-inner shadow-neutral-800 drop-shadow-light'>
          <div className='md:flex md:justify-between md:items-center md:gap-5'>
            <div className='hidden md:flex md:pr-5'>
              <a href='/' className='flex items-center'>
                <img className='w-8 h-8 mr-2' src={Ballot} alt="Logo" />
                <span className='text-2xl font-semibold text-neutral-300'>Pemira FSM</span>
              </a>
            </div>
            <span className='hidden md:block w-[2px] h-4/5 bg-neutral-700 rounded-full'></span>
            <ul className="flex justify-around items-center md:pl-5 text-base font-normal">
              <NavItem isActive={active === 'home'} icon={active === 'home' ? HomeSolid : HomeOutline} link="/" text="Home" />
              <NavItem isActive={active === 'vote'} icon={active === 'vote' ? VoteSolid : VoteOutline} link="/vote" text="Vote" />
              <div className='md:hidden'>
                <NavItem isActive={active === 'profile'} icon={active === 'profile' ? ProfileSolid : ProfileOutline} link="/profile" text="Profile" />
              </div>
            </ul>
          </div>
          <div className='hidden md:flex md:items-center ml-auto mr-6 text-sm hover:text-neutral-300'>
            {isLogin ? (
              <button onClick={handleLogout}>Logout</button>
            ) : (
              <a href='/login' className=''>Login</a>
            )}
          </div>
          <a href='/profile' className='relative group hidden md:flex justify-center items-center bg-neutral-950 rounded-2xl p-1 transition-all ease-in-out duration-700'>
            <span className='font-semibold text-neutral-200 pr-14 pl-5 group-hover:z-10'>Profile</span>
            <span className='absolute right-1 w-[36px] h-[36px] ml-2 bg-gradient-to-br from-[#2b4162] via-[#262626] to-[#12100e] flex justify-center group-hover:justify-end items-center rounded-xl group-hover:w-32 transition-all ease-in'>
              <span className='w-[36px] h-[36px] flex justify-center items-center'>
              <i className="fa-solid fa-user "></i>
              </span>
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Nav;