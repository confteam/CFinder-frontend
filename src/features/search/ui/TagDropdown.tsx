import { useTagStore } from "@/entities/tag";
import { useSearchStore } from "../model/store";

export function TagDropdown() {
  const { query, reset } = useSearchStore();
  const { getUnselected, selectTag } = useTagStore();

  if (!query) return null

  const tags = getUnselected();
  const matched = tags.filter((t) => t.name.toLowerCase().includes(query.toLowerCase()));

  if (matched.length === 0) return null;

  return (
    <div className="absolute mt-1 bg-tgScBg border rounded shadow-md z-10">
      {matched.map((t) => (
        <div
          key={t.name}
          className="px-3 py-1 cursor-pointer"
          onClick={() => {
            selectTag(t.name);
            reset();
          }}
        >
          {t.name}
        </div>
      ))}
    </div>
  );
}
