import { Button } from "@/components/Button";

export const Pagination = () => (
  <div className="mt-8 flex items-center justify-end gap-2">
    <Button variant="secondary">Anterior</Button>
    <Button variant="primary">1</Button>
    <Button variant="secondary">2</Button>
    <Button variant="secondary">3</Button>
    <Button variant="primary">Próxima</Button>
  </div>
);
