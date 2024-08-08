import React from 'react';

type ButtonProps = {
  label: string;
  customClass?: string;
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({ label, customClass, type }) => {
  return (
    <button type={type ?? 'button'}  className='group p-[2px] hover:bg-gradient-to-r hover:from-[rgb(85_217_198)] hover:to-[rgb(181_217_130)] rounded transition ease-in-out duration-500 cursor-pointer'>
      <span className={`text-base cursor-pointer uppercase bg-button text-neutral-900 font-bold rounded group-active:scale-95 transition-all duration-700 hover:bg-button-hover group-hover:text-white gradient-border-button ${customClass ? customClass : 'px-6 md:px-4 py-3 md:py-2'}`}>
        {label}
      </span>
    </button>
  );
};

export default Button;