import Link from "next/link";
import React from "react";

type button = {
  goTo: string;
  text: string;
};

const Button = ({ goTo, text }: button) => {
  return (
    <Link href={goTo} className="btn btn-secondary">
      <span className="text text-1">{text}</span>

      <span className="text text-2" aria-hidden="true">
        {text}
      </span>
    </Link>
  );
};

export default Button;
