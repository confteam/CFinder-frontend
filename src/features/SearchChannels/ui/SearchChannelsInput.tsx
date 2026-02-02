import { useSearchStore } from "../model/store";
import { Input } from "@/shared";
import { SearchChannelsDropdown } from "./SearchChannelsDropdown";

export function SearchChannelsInput() {
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

      <SearchChannelsDropdown />
    </div>
  );
}
