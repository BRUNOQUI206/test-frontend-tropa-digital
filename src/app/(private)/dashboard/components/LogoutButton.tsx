'use client';

import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { Power } from 'lucide-react';

export const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove('token');
    Cookies.remove('user');
    router.push('/');
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-2 p-[10px] rounded-lg text-sm w-full transition-colors text-gray-700 hover:bg-red-600 hover:text-white"
    >
      <Power size={16} />
      <span>Sair</span>
    </button>
  );
};
