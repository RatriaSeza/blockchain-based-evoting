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
    <a href={link} className={`flex flex-col justify-center items-center gap-1 ${isActive ? 'text-white' : 'text-neutral-400'}`}>
      <Icon className="size-7" />
      <span className=" text-sm">{text}</span>
    </a>
  )
};

const Nav: React.FC<NavProps> = ({ active }) => {
  return (
    <nav className="fixed bottom-2 left-0 w-full">
      <ul className="w-11/12 flex justify-around items-center py-3 bg-dark-card text-base font-normal rounded-b-lg rounded-t-3xl mx-auto shadow-inner shadow-neutral-800">
        <NavItem isActive={active === 'home'} icon={active === 'home' ? HomeSolid : HomeOutline} link="/" text="Home" />
        <NavItem isActive={active === 'vote'} icon={active === 'vote' ? VoteSolid : VoteOutline} link="/vote" text="Vote" />
        <NavItem isActive={active === 'profile'} icon={active === 'profile' ? ProfileSolid : ProfileOutline} link="/profile" text="Profile" />
      </ul>
    </nav>
  );
};

export default Nav;