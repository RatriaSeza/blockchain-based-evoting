import React from 'react';

type ButtonProps = {
  label: string;
};

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <button className='text-base cursor-pointer uppercase bg-button text-neutral-900 font-bold px-6 py-3 rounded active:scale-95 transition-all duration-700 hover:bg-button-hover hover:text-white gradient-border-button'>
      {label}
    </button>
  );
};

export default Button;