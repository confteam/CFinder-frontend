import type { Tag } from "@/entities/tag/model/types";
import { getTagColor } from "../lib/getTagColor";
import { Tag as TagUI } from "@/entities/tag";

interface Props {
  tags: Tag[];
  className?: string;
}

export function ChannelTags({ tags, className }: Props) {
  return (
    <div className={`flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide py-1 ${className}`}>
      {tags.map((tag) => {
        const color = getTagColor(tag.colorIndex, false);
        return (
          <TagUI
            key={tag.name}
            name={tag.name}
            className={color}
            small
          />
        )
      })}
    </div>
  );
}
