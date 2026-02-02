import { useFilteredChannels } from "@/features/search";
import { ChannelCardWithTags } from "./ChannelCardWithTags";

export function ChannelCards() {
  const { filtered } = useFilteredChannels();
  return (
    <div>
      {filtered.map((channel, index) => (
        <ChannelCardWithTags
          key={index}
          channel={channel}
          className="py-2"
        />
      ))}
    </div>
  );
}
