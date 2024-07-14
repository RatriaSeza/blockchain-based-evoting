import React from 'react';

type ButtonProps = {
  label: string;
  customClass?: string;
};

const Button: React.FC<ButtonProps> = ({ label, customClass }) => {
  return (
    <button className='group p-1 hover:bg-gradient-to-r hover:from-[rgb(85_217_198)] hover:to-[rgb(181_217_130)] rounded transition ease-in-out duration-500'>
      <span className={`text-base cursor-pointer uppercase bg-button text-neutral-900 font-bold rounded group-active:scale-95 transition-all duration-700 hover:bg-button-hover group-hover:text-white gradient-border-button ${customClass ? customClass : 'px-6 py-3'}`}>
        {label}
      </span>
    </button>
  );
};

export default Button;