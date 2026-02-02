import { SearchInput } from "@/features/search";
import { SearchTags } from "@/widgets/tags";

export function SearchTop() {
  return (
    <div className="pb-4">
      <SearchInput />
      <SearchTags className="mt-4" />
    </div>
  );
}
