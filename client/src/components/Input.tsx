import React from "react";

type InputProps = {
  label: string;
  type?: string;
  placeholder?: string;
};

const Input: React.FC<InputProps> = ({ label, type, placeholder, ...props }) => {
  return (
    <div>
      <label className="text-neutral-300 font-medium">{label}</label>
      <input
        className="bg-neutral-900 px-4 py-3 mt-1 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]" name="text" placeholder={placeholder} type={type ?? 'text'} {...props} />
    </div>
  );
};

export default Input;
