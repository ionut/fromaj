import React from "react";

type InputProps = {
  type: string;
  name: string;
  placeholder?: string;
  className: string;
};

const Input = ({ type, name, placeholder, className }: InputProps) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default Input;
