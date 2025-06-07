"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import type { IUserResponse } from "@/interface/user.interface";

export const Welcome = () => {
  const [user, setUser] = useState<IUserResponse | null>(null);

  useEffect(() => {
    const cookieData = Cookies.get("user");
    if (cookieData) {
      try {
        const parsed = JSON.parse(cookieData);
        setUser(parsed);
      } catch (e) {
        console.error("Erro ao ler cookie:", e);
      }
    }
  }, []);

  return (
    <h1 className="mb-3 text-base font-normal">
      <span className="text-gray-500">Bem-vindo de volta, </span>
      {user?.name ? ` ${user.name}` : ""}
    </h1>
  );
};
