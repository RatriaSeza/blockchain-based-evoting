import React from "react";

type InputProps = {
  id?: string;
  label: string;
  name: string;
  value? : string;
  type?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickIcon?: () => void;
};

const Input: React.FC<InputProps> = ({ id, label, name, value, type, placeholder, icon, onChange, onClickIcon, ...props }) => {
  return (
    <div>
      <label htmlFor={name} className="text-neutral-300 font-medium">{label}</label>
      <div className="relative mt-1">
        <input
          id={id}
          className="bg-neutral-900 px-3 py-2 outline-none w-full text-sm text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040] pr-10"
          name={name}
          placeholder={placeholder}
          value={value}
          type={type}
          onChange={onChange}
          {...props}
        />
        {icon && (
          <button type="button" className="absolute right-0 top-0 w-10 h-full flex justify-center items-center pr-3 text-[rgb(85_217_198)] hover:text-[rgb(53,142,129)] active:text-[rgb(85_217_198)]" onClick={onClickIcon} >
            {icon}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
