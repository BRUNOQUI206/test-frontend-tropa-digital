/* eslint-disable @next/next/no-img-element */
"use client";

import Cookies from "js-cookie";
import { useEffect, useState } from "react";

import { ELevel } from "@/enum/level.enum";
import type { IUserResponse } from "@/interface/user.interface";

export const UserProfile = () => {
  const [user, setUser] = useState<IUserResponse | null>(null);

  useEffect(() => {
    const cookieData = Cookies.get("user");
    if (cookieData) {
      try {
        const parsed = JSON.parse(cookieData);
        setUser(parsed);
      } catch (e) {
        console.error("Erro ao ler usuário:", e);
      }
    }
  }, []);

  if (!user) return null;

  return (
    <div className="flex items-center gap-4">
      <div className="inline-block rounded-2xl border-2 border-orange-700/80 p-[2px]">
        <figure className="h-10 w-10 overflow-hidden rounded-xl bg-white">
          <img
            src={user.photo}
            alt={user.name}
            className="h-full w-full object-cover"
          />
        </figure>
      </div>
      <div className="max-w-[120px]">
        <h3 className="overflow-hidden truncate whitespace-nowrap text-sm font-medium">
          {user.name}
        </h3>
        <p className="text-xs font-normal text-gray-400">
          {ELevel[user.level]}
        </p>
      </div>
    </div>
  );
};
