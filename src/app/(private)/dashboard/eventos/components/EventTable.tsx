import { EventTableRow } from "./EventTableRow";

type Props = {
  events: {
    id: string;
    name: string;
    teams: number;
    status: boolean;
    date: string;
  }[];
};

export const EventTable = ({ events }: Props) => (
  <table className="min-w-full text-left">
    <thead>
      <tr className="text-xs font-medium text-orange-700/50">
        <th className="px-4 py-2">Nome do evento</th>
        <th className="px-4 py-2">Total de equipes</th>
        <th className="px-4 py-2">Status</th>
        <th className="px-4 py-2">Data</th>
        <th className="px-4 py-2"></th>
      </tr>
    </thead>
    <tbody>
      {events.map((event) => (
        <EventTableRow key={event.id} {...event} />
      ))}
    </tbody>
  </table>
);
