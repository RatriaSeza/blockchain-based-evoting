import React from 'react';
import { HomeIcon as HomeOutline, DocumentCheckIcon as VoteOutline, UserIcon as ProfileOutline } from '@heroicons/react/24/outline';
import { HomeIcon as HomeSolid, DocumentCheckIcon as VoteSolid, UserIcon as ProfileSolid } from '@heroicons/react/24/solid';
import Ballot from '../assets/img/ballot-box.png';

type NavItemProps = {
  isActive: boolean;
  icon: React.ElementType; 
  link: string;
  text: string;
};

type NavProps = {
  active: string;
}

const NavItem: React.FC<NavItemProps> = ({ isActive, icon: Icon, link, text }) => {
  return (
    <a href={link} className={`flex flex-col justify-center items-center gap-1 md:py-2 md:px-5 md:hover:bg-neutral-700 ${isActive ? 'text-white md:bg-neutral-800 font-medium' : 'text-neutral-400 hover:text-white'} transition ease-in-out duration-300 md:rounded-sm`}>
      <Icon className="size-7 md:hidden" />
      <span className=" text-sm">{text}</span>
    </a>
  )
};

const Nav: React.FC<NavProps> = ({ active }) => {
  return (
    <header className='fixed bottom-2 md:top-2 left-0 w-full z-50'>
      <nav className="md:container mx-auto">
        <div className='md:flex md:justify-between w-11/12 md:max-w-5xl py-3 md:px-10 bg-dark-card rounded-b-lg rounded-t-3xl md:rounded-3xl mx-auto shadow-inner shadow-neutral-800'>
          <div className='md:flex md:justify-between md:divide-x'>
            <div className='hidden md:flex md:pr-5'>
              <div className='flex items-center'>
                <img className='w-8 h-8 mr-2' src={Ballot} alt="Logo" />
                <span className='text-2xl font-semibold text-neutral-300'>Pemira FSM</span>
              </div>
            </div>
            <ul className="flex justify-around items-center md:pl-5 text-base font-normal">
              <NavItem isActive={active === 'home'} icon={active === 'home' ? HomeSolid : HomeOutline} link="/" text="Home" />
              <NavItem isActive={active === 'vote'} icon={active === 'vote' ? VoteSolid : VoteOutline} link="/vote" text="Vote" />
              <div className='md:hidden'>
                <NavItem isActive={active === 'profile'} icon={active === 'profile' ? ProfileSolid : ProfileOutline} link="/profile" text="Profile" />
              </div>
            </ul>
          </div>
            <div className='hidden md:flex justify-center items-center bg-neutral-950 rounded-xl px-4'>
            Profile
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;