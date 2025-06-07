"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/Button";
import { SearchInput } from "@/components/SearchInput";
import { eventsResponseMock } from "@/mock/events-response.mock";

import { EventTable } from "./components/EventTable";
import { Pagination } from "./components/Pagination";

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
          <SearchInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar eventos"
          />
          <Button>
            <Plus size={18} className="mr-2" />
            Inserir novo
          </Button>
        </div>

        <EventTable events={filteredEvents} />
        <Pagination />
      </div>
    </section>
  );
};

export default EventsPage;
