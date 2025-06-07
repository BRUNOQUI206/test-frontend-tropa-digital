"use client";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

type InputProps = {
  label: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  showToggle?: boolean;
};

export const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
  showToggle = false,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className="relative mb-4 flex flex-col">
      <label className="text-xs font-semibold text-orange-700/80">
        {label}
      </label>
      <input
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="rounded-full bg-[#F6F6F6] px-6 py-3 pr-12 text-xs outline-none placeholder:text-blue-800/50"
      />
      {type === "password" && showToggle && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-4 top-7 text-orange-700/80"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      )}
    </div>
  );
};
