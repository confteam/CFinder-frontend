import { useChannelStore } from "@/entities/channel";
import { useSearchStore } from "../model/store"
import { useTagStore } from "@/entities/tag";

export const useFilteredChannels = () => {
  const { query } = useSearchStore();
  const { getSelected } = useTagStore();
  const { channels } = useChannelStore();

  const selectedTags = getSelected();

  const filtered = channels.filter((channel) => {
    const matchesQuery = channel.name
      .toLowerCase()
      .includes(query.toLowerCase());

    const matchesTags = selectedTags.every((tag) =>
      channel.tags.some((t) => t.name === tag.name)
    );

    return matchesQuery && matchesTags;
  });

  return { filtered };
};
