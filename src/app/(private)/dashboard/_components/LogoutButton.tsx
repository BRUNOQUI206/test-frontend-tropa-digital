"use client";

import Cookies from "js-cookie";
import { Power } from "lucide-react";
import { useRouter } from "next/navigation";

export const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("user");
    router.push("/");
  };

  return (
    <button
      onClick={handleLogout}
      className="flex w-full items-center gap-2 rounded-lg p-[10px] text-sm text-gray-700 transition-colors hover:bg-red-600 hover:text-white"
    >
      <Power size={16} />
      <span>Sair</span>
    </button>
  );
};
