'use client';

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { ELevel } from '@/enum/level.enum';
import type { IUserResponse } from '@/interface/user.interface';

export const UserProfile = () => {
  const [user, setUser] = useState<IUserResponse | null>(null);

  useEffect(() => {
    const cookieData = Cookies.get('user');
    if (cookieData) {
      try {
        const parsed = JSON.parse(cookieData);
        setUser(parsed);
      } catch (e) {
        console.error('Erro ao ler usuário:', e);
      }
    }
  }, []);

  if (!user) return null;

  return (
    <div className="flex items-center gap-4">
      <div className="p-[2px] rounded-2xl border-2 border-orange-700/80 inline-block">
        <figure className="w-10 h-10 rounded-xl overflow-hidden bg-white">
          <img
            src={user.photo}
            alt={user.name}
            className="object-cover w-full h-full"
          />
        </figure>
      </div>
      <div className="max-w-[120px]">
        <h3 className="text-sm font-medium truncate overflow-hidden whitespace-nowrap">
          {user.name}
        </h3>
        <p className="text-xs text-gray-400 font-normal">
          {ELevel[user.level]}
        </p>
      </div>
    </div>
  );
};
