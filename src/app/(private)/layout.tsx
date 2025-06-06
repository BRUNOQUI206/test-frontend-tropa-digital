import { Menu } from './dashboard/components/Menu';
import { Welcome } from './dashboard/components/Welcome';

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-neutral-100 min-h-screen flex">
      <Menu />
      <div className="w-full p-8">
        <Welcome />
        {children}
      </div>
    </div>
  );
}
