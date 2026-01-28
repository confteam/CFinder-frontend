import { Tag } from "@/entities/tag";
import { getTagColor } from "../lib/getTagColor";

interface Props {
  tags: string[];
  className?: string;
}

export function Tags({ tags, className }: Props) {
  return (
    <div className={`flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide py-1 ${className}`}>
      {tags.map((tag, index) => (
        <Tag
          key={tag}
          name={tag}
          className={getTagColor(index)}
        />
      ))}
    </div>
  );
}
