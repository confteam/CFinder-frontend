import { useChannelStore } from "@/entities/channel";
import { ChannelCardWithTags } from "./ChannelCardWithTags";

export function ChannelCards() {
  const { channels } = useChannelStore();
  return (
    <div>
      {channels.map((channel, index) => (
        <ChannelCardWithTags
          key={index}
          channel={channel}
          className="py-2"
        />
      ))}
    </div>
  );
}
