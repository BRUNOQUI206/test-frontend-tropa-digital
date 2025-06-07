"use client";

import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  type?: "submit" | "button";
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

export const Button = ({
  children,
  disabled,
  type = "submit",
  onClick,
  variant = "primary",
}: ButtonProps) => {
  const baseClasses =
    "flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50";

  const variantClasses = clsx({
    "bg-orange-700/80 text-white hover:bg-orange-700/70 disabled:bg-orange-700/80":
      variant === "primary",
    "bg-gray-100 text-black hover:text-orange-700":
      variant === "secondary",
  });

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(baseClasses, variantClasses)}
    >
      {children}
    </button>
  );
};
