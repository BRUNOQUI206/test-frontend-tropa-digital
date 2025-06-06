'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutGrid,
  CalendarDays,
  Users,
  ClipboardList,
} from 'lucide-react';

export const Menu = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const linkStyle = (active: boolean) =>
    `flex items-center gap-2 p-[10px] rounded-lg text-sm w-full transition-colors
     ${active
      ? 'bg-orange-700/80 text-white'
      : 'text-gray-700 hover:bg-orange-100 hover:text-orange-700'}`;

  return (
    <div className="flex flex-col bg-white min-w-52 px-5 py-8 border-r border-r-black/10 h-screen">
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
        <div className="border-t-2 border-gray-200 pt-4 mt-4">
        </div>
      </div>
    </div>
  );
};
