/* eslint-disable @next/next/no-img-element */
"use client";

import {
  CalendarDays,
  ClipboardList,
  LayoutGrid,
  User,
  Users,
} from "lucide-react";

import { LogoutButton } from "./LogoutButton";
import { MenuLink } from "./MenuLink";
import { UserProfile } from "./UserProfile";

export const Menu = () => {
  return (
    <div className="flex w-56 flex-col h-full border-r border-r-black/10 bg-white px-5 py-8">
      <img src="/assets/logo.png" alt="Tropa-Digital" className="mb-8" />

      <div className="flex h-full flex-col justify-between">
        <nav>
          <h2 className="mb-2 ml-3 text-[10px] font-extrabold tracking-[2px] text-gray-400">
            MENU
          </h2>
          <ul className="space-y-1 text-sm font-medium">
            <li>
              <MenuLink
                href="#"
                icon={<LayoutGrid size={16} />}
                label="Dashboard"
              />
            </li>
            <li>
              <MenuLink
                href="/dashboard/eventos"
                icon={<CalendarDays size={16} />}
                label="Eventos"
              />
            </li>
            <li>
              <MenuLink href="#" icon={<Users size={16} />} label="Equipes" />
            </li>
            <li>
              <MenuLink
                href="#"
                icon={<ClipboardList size={16} />}
                label="Inscrições"
              />
            </li>
          </ul>
        </nav>

        <div className="mt-4 flex flex-col gap-2 border-t-2 border-gray-200 pt-4">
          <UserProfile />
          <MenuLink href="#" icon={<User size={16} />} label="Alterar Dados" />
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};
