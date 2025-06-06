import { Menu } from './dashboard/components/Menu';

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-neutral-100 min-h-screen flex">
      <Menu/>
      {children}
    </div>
  );
}
