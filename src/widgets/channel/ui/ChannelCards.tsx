import { type Channel } from "@/entities/channel";
import { ChannelCardWithTags } from "./ChannelCard";

interface Props {
  channels: Channel[];
}

export function ChannelCards({ channels }: Props) {
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
