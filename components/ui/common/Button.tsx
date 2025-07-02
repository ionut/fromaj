"use client";

import React, { ReactNode, ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  isLoading?: boolean;
  loadingText?: string;
  children: ReactNode;
  href?: string;
  className?: string;
}

const Button = ({
  variant = "primary",
  isLoading = false,
  loadingText,
  children,
  href,
  className = "",
  ...props
}: ButtonProps) => {
  // Base styles that apply to all variants
  const baseStyles =
    "rounded-xl text-xl font-bold flex justify-center items-center p-2 hover:transition-colors hover:bg-white xl:text-2xl xl:px-4";
  const variantStyles = {
    primary: "text-white bg-green hover:bg-eerie-black-1",
    secondary: "text-white bg-green hover:bg-eerie-black-1",
  };
  // Loading state styles
  const loadingStyles = isLoading ? "opacity-80 cursor-wait" : "cursor-pointer";

  // Combine all styles
  const buttonStyles = twMerge(
    baseStyles,
    variantStyles[variant],
    loadingStyles,
    className
  );

  // If href is provided, render as a Link
  if (href) {
    return (
      <Link href={href} className={buttonStyles}>
        {isLoading && loadingText ? loadingText : children}
      </Link>
    );
  }

  // Otherwise, render as a button
  return (
    <button className={buttonStyles} disabled={isLoading} {...props}>
      {isLoading && (
        <span className="inline-block mr-2">
          <svg
            className="animate-spin h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </span>
      )}
      {isLoading && loadingText ? loadingText : children}
    </button>
  );
};

export default Button;
