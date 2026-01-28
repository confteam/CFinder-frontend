import { SearchInput } from "@/features/search";
import { Tags } from "@/widgets/tags";

export function SearchTop() {
  return (
    <div className="pb-4">
      <SearchInput />
      <Tags tags={["dating", "hate", "NSFW", "animal", "blood", "LGBT+", "safeplace"]} className="mt-4" />
    </div>
  );
}
