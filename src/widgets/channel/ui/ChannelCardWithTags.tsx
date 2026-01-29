import type { Channel } from "@/entities/channel";
import { ExtendChannelCardButton, JoinChannelButton } from "@/features/channel";
import { Tags } from "@/widgets/tags";
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
        className="rounded-t-2xl flex justify-end items-start h-[104px]"
        style={{ backgroundColor: channel.background }}
      >
        <ExtendChannelCardButton
          className="mr-2"
          channelName={channel.name}
          isExtended={channel.isExtended}
        />
      </div>
      <div className={clsx(
        "bg-tgScBg rounded-b-2xl flex flex-col justify-start pt-1",
        channel.isExtended ? "h-[196px]" : "h-[66px]"
      )}>
        <div className="flex justify-between items-start w-full mt-0.5">
          <div>
            <h4 className="ml-[100px]">{channel.name}</h4>
            <Tags className="px-3" tags={channel.tags} isChannelCard />
          </div>

          <JoinChannelButton className="mr-2 mt-3" />
        </div>
        <p
          className={clsx(
            "text-tgSub text-md px-3 py-1.5",
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
