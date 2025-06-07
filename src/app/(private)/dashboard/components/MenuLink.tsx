"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface MenuLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
}

export const MenuLink = ({ href, icon, label }: MenuLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const linkStyle = `flex items-center gap-2 p-[10px] rounded-lg text-sm w-full transition-colors
    ${
      isActive
        ? "bg-orange-700/80 text-white"
        : "text-gray-700 hover:bg-orange-100 hover:text-orange-700"
    }`;

  return (
    <Link href={href} className={linkStyle}>
      {icon}
      <span>{label}</span>
    </Link>
  );
};
