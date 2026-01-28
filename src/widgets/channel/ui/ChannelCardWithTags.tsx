import { ChannelCard, type Channel } from "@/entities/channel";
import { Tags } from "@/widgets/tags";

interface Props {
  channel: Channel;
  className?: string;
}

export function ChannelCardWithTags({ channel, className }: Props) {
  return (
    <div className="relative">
      <ChannelCard channel={channel} className={className} />
      <div className="absolute bottom-4 left-4">
        <Tags tags={channel.tags} isChannelCard />
      </div>
    </div>
  );
}
