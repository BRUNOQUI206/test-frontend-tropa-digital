"use client";

import { EllipsisVertical, Plus, Search } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/Button";
import { eventsResponseMock } from "@/mock/events-response.mock";

const EventsPage = () => {
  const [search, setSearch] = useState("");

  const filteredEvents = eventsResponseMock.filter((event) =>
    event.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className="flex flex-col">
      <h1 className="text-xl font-bold text-orange-700/80">Todos eventos</h1>
      <div className="mt-4 rounded-lg border border-[#09428F2B] bg-white p-6">
        <div className="flex items-center justify-end gap-3 py-3">
          <div className="flex items-center gap-2 rounded-full bg-[#F6F6F6] px-5 py-3 pr-12 text-xs outline-none placeholder:text-gray-400">
            <Search size={16} className="text-gray-400" />
            <input
              type="text"
              placeholder="Buscar eventos"
              className="bg-transparent text-sm font-medium outline-none placeholder:text-gray-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Button>
            <Plus size={18} className="mr-2" />
            Inserir novo
          </Button>
        </div>
        <div>
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
              {filteredEvents.map((event) => (
                <tr key={event.id} className="text-xs text-blue-900/60">
                  <td className="border-y border-orange-700/10 px-4 py-3">
                    {event.name}
                  </td>
                  <td className="border-y border-orange-700/10 px-4 py-3">
                    {event.teams}
                  </td>
                  <td className="border-y border-orange-700/10 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-2 w-2 rounded-full ${
                          event.status ? "bg-green-400" : "bg-red-400"
                        }`}
                      />
                      <span>{event.status ? "Ativo" : "Inativo"}</span>
                    </div>
                  </td>
                  <td className="border-y border-orange-700/10 px-4 py-3">
                    {event.date}
                  </td>
                  <td className="border-y border-orange-700/10 px-4 py-3 text-right">
                    <EllipsisVertical
                      size={17}
                      className="inline-block cursor-pointer text-orange-700/80"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-8 flex items-center justify-end gap-2">
            <Button variant="secondary">Anterior</Button>
            <Button variant="primary">1</Button>
            <Button variant="secondary">2</Button>
            <Button variant="secondary">3</Button>
            <Button variant="primary">Próxima</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsPage;
