import { useFilteredChannels } from "@/features/SearchChannels";
import { ChannelCardWithTags } from "./ChannelCardWithTags";

export function ChannelCards() {
  const { filtered } = useFilteredChannels();
  return (
    <div className="flex flex-col">
      {filtered.map((channel, index) => (
        <ChannelCardWithTags
          key={index}
          channel={channel}
          className=""
        />
      ))}
    </div>
  );
}
