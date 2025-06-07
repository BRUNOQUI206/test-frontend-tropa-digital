'use client';

import { Menu as MenuIcon, X } from 'lucide-react';
import { useState } from 'react';

import { Menu } from './dashboard/components/Menu';
import { Welcome } from './dashboard/components/Welcome';

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen bg-neutral-100 overflow-x-hidden">
      <div
        className={`fixed inset-y-0 left-0 z-40 w-56 transition-transform duration-300 ease-in-out border-r border-black/10 bg-white
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0`}
      >
        <Menu />
      </div>
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      <div className="flex flex-1 flex-col w-full px-4 md:px-8 py-8">
        <button
          className="mb-4 flex items-center gap-2 text-orange-700 md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          <span className="font-medium">Menu</span>
        </button>
        <Welcome />
        {children}
      </div>
    </div>
  );
}
