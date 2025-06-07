import { Menu } from "./dashboard/components/Menu";
import { Welcome } from "./dashboard/components/Welcome";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen bg-neutral-100">
      <Menu />
      <div className="w-full p-8">
        <Welcome />
        {children}
      </div>
    </div>
  );
}
