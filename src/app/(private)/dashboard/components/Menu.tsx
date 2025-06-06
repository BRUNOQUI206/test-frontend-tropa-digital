'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import {
  LayoutGrid,
  CalendarDays,
  Users,
  ClipboardList,
} from 'lucide-react';
import type { IUserResponse } from '@/interface/user.interface';
import { ELevel } from '@/enum/level.enum';

export const Menu = () => {
  const pathname = usePathname();
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

  const isActive = (path: string) => pathname === path;

  const linkStyle = (active: boolean) =>
    `flex items-center gap-2 p-[10px] rounded-lg text-sm w-full transition-colors
     ${active
      ? 'bg-orange-700/80 text-white'
      : 'text-gray-700 hover:bg-orange-100 hover:text-orange-700'}`;

  return (
    <div className="flex flex-col bg-white max-w-52 px-5 py-8 border-r border-r-black/10 h-screen">
      <img src="/assets/logo.png" alt="Tropa-Digital" className="mb-8" />
      <div className="flex flex-col justify-between h-full">
        <nav>
          <h2 className="text-[10px] text-gray-400 font-extrabold tracking-[2px] ml-3 mb-2">
            MENU
          </h2>
          <ul className="font-medium space-y-1">
            <li>
              <Link href="#" className={linkStyle(isActive('#'))}>
                <LayoutGrid size={16} />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/eventos" className={linkStyle(isActive('/dashboard/eventos'))}>
                <CalendarDays size={16} />
                <span>Eventos</span>
              </Link>
            </li>
            <li>
              <Link href="#" className={linkStyle(isActive('/dashboard/equipes'))}>
                <Users size={16} />
                <span>Equipes</span>
              </Link>
            </li>
            <li>
              <Link href="#" className={linkStyle(isActive('/dashboard/inscricoes'))}>
                <ClipboardList size={16} />
                <span>Inscrições</span>
              </Link>
            </li>
          </ul>
        </nav>
        {user && (
          <div className="border-t-2 border-gray-200 pt-4 mt-4">
            <div className="flex items-center gap-4">
              <div className="p-[2px] rounded-2xl border-2 border-orange-700/80 inline-block">
                <figure className="w-10 h-10 rounded-2xl overflow-hidden bg-white">
                  <img
                    src={user.photo}
                    alt={user.name}
                    className="object-cover w-full h-full"
                  />
                </figure>
              </div>
              <div className="max-w-[100px]">
                <h3 className="text-sm font-medium truncate overflow-hidden whitespace-nowrap">{user.name}</h3>
                <p className="text-xs text-gray-400 font-normal">
                  {ELevel[user.level]}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
