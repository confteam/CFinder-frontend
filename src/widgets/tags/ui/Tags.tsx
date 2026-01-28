import { Tag } from "@/entities/tag";
import { getTagColor } from "../lib/getTagColor";

interface Props {
  tags: string[];
  className?: string;
  isChannelCard?: boolean;
}

export function Tags({ tags, className, isChannelCard }: Props) {
  return (
    <div className={`flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide py-1 ${className}`}>
      {tags.map((tag, index) => (
        <Tag
          key={tag}
          name={tag}
          className={getTagColor(index)}
          small={isChannelCard}
        />
      ))}
    </div>
  );
}
