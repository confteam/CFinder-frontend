import type { Channel } from "@/entities/Channel";
import { ExtendChannelCardButton } from "@/features/ExtendChannelCardButton";
import { JoinChannelButton } from "@/features/JoinChannelButton";
import { ChannelCardTags } from "@/widgets/ChannelTags";
import clsx from "clsx";

interface Props {
  channel: Channel;
  className?: string;
}

export function ChannelCardWithTags({ className, channel }: Props) {
  return (
    <div className={clsx(
      "relative",
      className,
    )}>
      <div
        className="rounded-t-2xl flex flex-col justify-between items-start h-[110px] relative"
        style={{ backgroundColor: channel.background }}
      >
        <div className="flex items-center justify-end w-full">
          <ExtendChannelCardButton
            className="mr-2"
            channelName={channel.name}
            isExtended={channel.isExtended}
          />
        </div>
        <div className="flex ml-[100px]">
          <h4 className="text-[20px] text-tgAcc">{channel.name}</h4>
        </div>
      </div>
      <div className={clsx(
        "bg-tgScBg rounded-b-2xl flex flex-col justify-start pt-1",
        channel.isExtended ? "h-[200px]" : "h-[75px]"
      )}>
        <div className="flex justify-between items-end w-full mt-[16px]">
          <ChannelCardTags className="px-3" tagsNames={channel.tags} />
          <JoinChannelButton className="mr-2 mb-1" />
        </div>
        <p
          className={clsx(
            "text-tgSub text-md px-3 py-2",
            channel.isExtended ? "visible" : "invisible"
          )}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatibus provident ipsa possimus quibusdam,
          unde facere vero commodi minus. sdlkfjsldkfjsd lskajdflkjsdfl jsldkajf,
          sdfkjsdklfsdlkf
        </p>
      </div>
      <img src={channel.image}
        alt={channel.name}
        className="absolute left-[50px] top-[60px] -translate-x-1/2 w-20 h-20 rounded-full border-4 border-white"
      />
    </div >
  );
}
