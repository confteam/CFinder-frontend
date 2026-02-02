import { getTagColor } from "../lib/getTagColor";
import { Tag as TagUI, useTagStore } from "@/entities/Tag";

interface Props {
  tagsNames: string[];
  className?: string;
}

export function ChannelCardTags({ tagsNames, className }: Props) {
  const { findTag } = useTagStore();
  return (
    <div className={`flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide py-1 ${className}`}>
      {tagsNames.map((tagName) => {
        const tag = findTag(tagName);
        if (!tag) return null;

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
