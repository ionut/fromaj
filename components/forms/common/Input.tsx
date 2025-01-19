import { InputProps } from "@/utils/types";
import React from "react";

export const Input = ({ type, name, placeholder }: InputProps) => {
  return (
    <div>
      <label htmlFor={name} className="block text-lg font-medium text-white">
        {placeholder}
      </label>
      <div className="mt-2">
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          className="block w-full rounded-md bg-white px-3 py-2 text-base text-eerie-black-1 outline outline-1 -outline-offset-1 outline-green placeholder:text-quick-silver focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-green"
        />
      </div>
    </div>
  );
};
