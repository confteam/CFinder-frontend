import { Tag, useTagStore } from "@/entities/Tag";
import { motion } from "framer-motion";

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
        return (
          <motion.div
            key={tag.name}
            layout
            transition={{ duration: 0.3, type: "spring" }}
          >
            <Tag
              name={tag.name}
              selected={tag.selected}
              onClick={() => toggleTag(tag.name)}
            />
          </motion.div>
        )
      })}
    </div>
  );
}
