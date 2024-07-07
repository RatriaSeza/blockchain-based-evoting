import { HomeIcon as HomeOutline, DocumentCheckIcon as VoteOutline, UserIcon as ProfileOutline } from '@heroicons/react/24/outline';
import { HomeIcon as HomeSolid, DocumentCheckIcon as VoteSolid, UserIcon as ProfileSolid } from '@heroicons/react/24/solid';
import React from 'react';

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
    <li className={`flex flex-col justify-center items-center gap-1 ${isActive ? 'text-black' : 'text-gray-500'}`}>
      <Icon className="size-7" />
      <a href={link} className={`${isActive ? 'font-medium' : 'font-normal'}`}>{text}</a>
    </li>
  )
};

const Nav: React.FC<NavProps> = ({ active }) => {
  return (
    <nav className="fixed bottom-0 left-0 w-full ">
      <ul className="container w-full flex justify-around items-center py-5 bg-white text-base font-normal rounded-t-[50px]">
        <NavItem isActive={active === 'home'} icon={active === 'home' ? HomeSolid : HomeOutline} link="/" text="Home" />
        <NavItem isActive={active === 'vote'} icon={active === 'vote' ? VoteSolid : VoteOutline} link="/vote" text="Vote" />
        <NavItem isActive={active === 'profile'} icon={active === 'profile' ? ProfileSolid : ProfileOutline} link="/profile" text="Profile" />
      </ul>
    </nav>
  );
};

export default Nav;