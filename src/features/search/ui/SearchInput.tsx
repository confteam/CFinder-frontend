import { useSearchStore } from "../model/store";
import { Input } from "@/shared";

export function SearchInput() {
  const { query, setQuery } = useSearchStore();

  return (
    <Input
      type="text"
      value={query}
      placeholder="Введите название..."
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
