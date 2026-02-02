import { Tag, useTagStore } from "@/entities/Tag";
import { getTagColor } from "../lib/getTagColor";

interface Props {
  className?: string;
}

export function SearchChannelsTags({ className }: Props) {
  const { getSelected, getUnselected, toggleTag } = useTagStore();

  const ordered = [
    ...getSelected(),
    ...getUnselected(),
  ]

  return (
    <div className={`flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide py-1 ${className}`}>
      {ordered.map((tag) => {
        const color = getTagColor(tag.colorIndex, tag.selected);
        return (
          <Tag
            key={tag.name}
            name={tag.name}
            className={color}
            onClick={() => toggleTag(tag.name)}
          />
        )
      })}
    </div>
  );
}
