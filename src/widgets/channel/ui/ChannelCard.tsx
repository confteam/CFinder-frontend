import type { Channel } from "@/entities/channel";
import { Tags } from "@/widgets/tags";

interface Props {
  channel: Channel;
  className?: string;
}

export function ChannelCardWithTags({ className, channel }: Props) {
  return (
    <div className={`relative w-full h-[190px] ${className}`}>
      <div className="h-[53%] rounded-t-2xl" style={{ backgroundColor: channel.background }}></div>
      <div className="h-[47%] bg-tgScBg rounded-b-2xl">
        <div className="pt-[5px]">
          <div className="ml-[100px]">
            <h4>{channel.name}</h4>
          </div>
          <Tags className="px-3 pt-2.5" tags={channel.tags} isChannelCard />
        </div>
      </div>
      <img src={channel.image}
        alt={channel.name}
        className="absolute left-[50px] top-[50px] -translate-x-1/2 w-20 h-20 rounded-full border-4 border-white"
      />
    </div>
  );
}
