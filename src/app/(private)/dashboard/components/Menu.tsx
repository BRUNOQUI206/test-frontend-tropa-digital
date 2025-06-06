'use client';

import { MenuLink } from './MenuLink';
import { UserProfile } from './UserProfile';
import { LogoutButton } from './LogoutButton';

import {
  LayoutGrid,
  CalendarDays,
  Users,
  ClipboardList,
  User,
} from 'lucide-react';

export const Menu = () => {
  return (
    <div className="flex flex-col bg-white w-56 px-5 py-8 border-r border-r-black/10 h-screen">
      <img src="/assets/logo.png" alt="Tropa-Digital" className="mb-8" />

      <div className="flex flex-col justify-between h-full">
        <nav>
          <h2 className="text-[10px] text-gray-400 font-extrabold tracking-[2px] ml-3 mb-2">
            MENU
          </h2>
          <ul className="font-medium text-sm space-y-1">
            <li><MenuLink href="#" icon={<LayoutGrid size={16} />} label="Dashboard" /></li>
            <li><MenuLink href="/dashboard/eventos" icon={<CalendarDays size={16} />} label="Eventos" /></li>
            <li><MenuLink href="#" icon={<Users size={16} />} label="Equipes" /></li>
            <li><MenuLink href="#" icon={<ClipboardList size={16} />} label="Inscrições" /></li>
          </ul>
        </nav>

        <div className="flex flex-col gap-2 border-t-2 border-gray-200 pt-4 mt-4">
          <UserProfile />
          <MenuLink href="#" icon={<User size={16} />} label="Alterar Dados" />
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};
