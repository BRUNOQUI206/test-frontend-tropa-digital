"use client";

type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  type?: "submit" | "button";
  onClick?: () => void;
};

export const Button = ({
  children,
  disabled,
  type = "submit",
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="rounded-full bg-orange-700/80 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700/80 disabled:cursor-not-allowed disabled:bg-orange-700/80 disabled:opacity-50"
    >
      {children}
    </button>
  );
};
