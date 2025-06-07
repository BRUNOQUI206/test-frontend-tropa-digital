"use client";

import { Search } from "lucide-react";

type SearchInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

export const SearchInput = ({ value, onChange, placeholder = "Buscar..." }: SearchInputProps) => {
  return (
    <div className="flex items-center gap-2 rounded-full bg-[#F6F6F6] px-5 py-3 pr-12 text-xs">
      <Search size={16} className="text-gray-400" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-transparent text-sm font-medium outline-none placeholder:text-gray-400 w-full"
      />
    </div>
  );
};
