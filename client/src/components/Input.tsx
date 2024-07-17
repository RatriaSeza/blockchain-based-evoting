import React from "react";

type InputProps = {
  label: string;
  value? : string;
  type?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickIcon?: () => void;
};

const Input: React.FC<InputProps> = ({ label, value, type, placeholder, icon, onChange, onClickIcon, ...props }) => {
  return (
    <div>
      <label className="text-neutral-300 font-medium">{label}</label>
      <div className="relative">
        <input
          className="bg-neutral-900 px-4 py-3 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040] pr-10" // Adjust padding to make space for the icon
          placeholder={placeholder}
          value={value}
          type={type}
          {...props}
        />
        {icon && (
          <button  className="absolute right-0 top-0 w-10 h-full flex justify-center items-center pr-3 text-[#596A95]" >
            {icon}
          </button  >
        )}
      </div>
    </div>
  );
};

export default Input;
