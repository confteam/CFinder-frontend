import { useSearchStore } from "../model/store";
import { Input } from "@/shared";
import { TagDropdown } from "./TagDropdown";

export function SearchInput() {
  const { query, setQuery } = useSearchStore();

  return (
    <div>
      <Input
        className="relative"
        type="text"
        value={query}
        placeholder="Введите название..."
        onChange={(e) => setQuery(e.target.value)}
      />

      <TagDropdown />
    </div>
  );
}
