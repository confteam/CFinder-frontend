import { useTagStore } from "@/entities/Tag";
import { useSearchStore } from "../model/store";
import { useChannelStore } from "@/entities/Channel";
import { getMatchScore } from "../lib/getMatchScore";

export const useFilteredChannels = () => {
  const { query, sort } = useSearchStore();
  const { getSelected } = useTagStore();
  const { channels } = useChannelStore();

  const selectedTags = getSelected();
  const tags = selectedTags.map((t) => t.name);

  const filtered = channels
    .map((channel) => {
      if (!query) {
        return { channel, score: 0 };
      }

      const nameScore = getMatchScore(query, channel.name);
      const descScore = channel.caption
        ? getMatchScore(query, channel.caption)
        : 0;

      const tagScore = channel.tags.reduce(
        (acc, t) => acc + getMatchScore(query, t),
        0
      );

      const totalScore = nameScore * 3 + descScore * 1.5 + tagScore;

      return {
        channel,
        score: totalScore,
      };
    })
    .filter(({ score, channel }) => {
      const matchesTags = tags.every((tag) =>
        channel.tags.includes(tag)
      );

      if (!query) return matchesTags;

      return score >= 8 && matchesTags;
    })
    .sort((a, b) => {
      // если есть запрос — сначала релевантность
      if (query && b.score !== a.score) {
        return b.score - a.score;
      }

      // потом сортировка по подписчикам
      return sort === "asc"
        ? a.channel.subs - b.channel.subs
        : b.channel.subs - a.channel.subs;
    })
    .map(({ channel }) => channel);

  return { filtered };
};
