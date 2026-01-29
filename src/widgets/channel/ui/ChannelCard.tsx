import type { Channel } from "@/entities/channel";
import { JoinChannelButton } from "@/features/channel";
import { Tags } from "@/widgets/tags";

interface Props {
  channel: Channel;
  className?: string;
}

export function ChannelCardWithTags({ className, channel }: Props) {
  return (
    <div className={`relative h-[190px] ${className}`}>
      <div className="h-[60%] rounded-t-2xl" style={{ backgroundColor: channel.background }}></div>
      <div className="h-[40%] bg-tgScBg rounded-b-2xl relative">
        <div className="pt-[5px]">
          <h4 className="ml-[100px]">{channel.name}</h4>
          <Tags className="px-3 mt-1" tags={channel.tags} isChannelCard />
        </div>
        <JoinChannelButton className="absolute left-[250px] bottom-[8px]" />
      </div>
      <img src={channel.image}
        alt={channel.name}
        className="absolute left-[50px] top-[60px] -translate-x-1/2 w-20 h-20 rounded-full border-4 border-white"
      />
    </div>
  );
}
