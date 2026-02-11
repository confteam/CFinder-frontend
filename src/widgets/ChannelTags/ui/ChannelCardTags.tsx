import { Tag, useTagStore } from "@/entities/Tag";

interface Props {
  tagsNames: string[];
  className?: string;
}

export function ChannelCardTags({ tagsNames, className }: Props) {
  const { findTag } = useTagStore();
  return (
    <div className={`flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide py-1 ${className}`}>
      {tagsNames.length > 0 ? (tagsNames.map((tagName) => {
        const tag = findTag(tagName);
        if (!tag) return null;

        return (
          <Tag
            key={tag.name}
            name={tag.name}
            small
          />
        )
      })) : <Tag name="без тегов" small />}

    </div>
  );
}
