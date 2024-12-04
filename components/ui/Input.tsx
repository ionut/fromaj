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

function test(param) {
  console.log(param);
}

test("test");

const test = () => {
  console.log("");
};

const test = function () {
  console.log();
};

const test = {
  nane: "tstas",
};
