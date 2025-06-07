import { EllipsisVertical } from "lucide-react";

import { EventStatusBadge } from "./EventStatusBadge";

type Props = {
  id: string;
  name: string;
  teams: number;
  status: boolean;
  date: string;
};

export const EventTableRow = ({ id, name, teams, status, date }: Props) => (
  <tr key={id} className="text-xs text-blue-900/60">
    <td className="border-y border-orange-700/10 px-4 py-3">{name}</td>
    <td className="border-y border-orange-700/10 px-4 py-3">{teams}</td>
    <td className="border-y border-orange-700/10 px-4 py-3">
      <EventStatusBadge active={status} />
    </td>
    <td className="border-y border-orange-700/10 px-4 py-3">{date}</td>
    <td className="border-y border-orange-700/10 px-4 py-3 text-right">
      <EllipsisVertical
        size={17}
        className="inline-block cursor-pointer text-orange-700/80"
      />
    </td>
  </tr>
);
