import type { Channel } from "@/entities/channel";
import { ExtendChannelCardButton, JoinChannelButton } from "@/features/channel";
import { Tags } from "@/widgets/tags";

interface Props {
  channel: Channel;
  className?: string;
}

export function ChannelCardWithTags({ className, channel }: Props) {
  return (
    <div className={`relative h-[190px] ${className}`}>
      <div className="h-[60%] rounded-t-2xl flex justify-end items-start" style={{ backgroundColor: channel.background }}>
        <ExtendChannelCardButton
          className="mr-2"
          channelName={channel.name}
          isExtended={channel.isExtended}
        />
      </div>
      <div className="h-[40%] bg-tgScBg rounded-b-2xl flex justify-between items-center">
        <div>
          <h4 className="ml-[100px]">{channel.name}</h4>
          <Tags className="px-3 mt-1" tags={channel.tags} isChannelCard />
        </div>

        <div className="mr-2 mt-4">
          <JoinChannelButton />
        </div>
      </div>
      <img src={channel.image}
        alt={channel.name}
        className="absolute left-[50px] top-[60px] -translate-x-1/2 w-20 h-20 rounded-full border-4 border-white"
      />
    </div>
  );
}
