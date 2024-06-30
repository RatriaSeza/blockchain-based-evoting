import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className=''>
      {children}
    </button>
  );
};

export default Button;