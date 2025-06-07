type Props = {
  active: boolean;
};

export const EventStatusBadge = ({ active }: Props) => (
  <div className="flex items-center gap-2">
    <span
      className={`h-2 w-2 rounded-full ${active ? "bg-green-400" : "bg-red-400"}`}
    />
    <span>{active ? "Ativo" : "Inativo"}</span>
  </div>
);
