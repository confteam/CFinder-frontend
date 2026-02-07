import { useChannelStore } from "@/entities/Channel";
import { useSearchStore } from "../model/store"
import { useTagStore } from "@/entities/Tag";

export const useFilteredChannels = () => {
  const { query } = useSearchStore();
  const { getSelected } = useTagStore();
  const { channels } = useChannelStore();

  const selectedTags = getSelected();
  const tags = selectedTags.map((t) => t.name);

  const filtered = channels.filter((channel) => {
    const matchesQuery = channel.name
      .toLowerCase()
      .startsWith(query.toLowerCase());

    const matchesTags = tags.every((tag) =>
      channel.tags.some((t) => t === tag)
    );

    return matchesQuery && matchesTags;
  });

  return { filtered };
};
