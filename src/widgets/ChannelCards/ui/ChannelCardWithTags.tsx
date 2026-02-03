import { useChannelStore, type Channel } from "@/entities/Channel";
import { JoinChannelButton } from "@/features/JoinChannelButton";
import { ChannelCardTags } from "@/widgets/ChannelTags";
import clsx from "clsx";

interface Props {
  channel: Channel;
  className?: string;
}

export function ChannelCardWithTags({ className, channel }: Props) {
  const { toggleExtendedChannel } = useChannelStore();

  return (
    <div
      className={clsx(
        `w-full transition-transform duration-500 ease-out relative cursor-pointer`,
        className
      )}
      onClick={() => toggleExtendedChannel(channel.name)}
    >
      <div className="h-[130px] rounded-t-[28px] bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="flex items-center pt-5 pl-5 gap-4">
          <img src={channel.pfp} alt={channel.name} className="rounded-2xl border border-white/60 shadow-lg h-16 w-16" />
          <div className="flex flex-col">
            <h2 className="text-2xl">{channel.name}</h2>
            <p className="text-sm">Нажмите на карточку, чтобы раскрыть</p>
          </div>
        </div>
      </div>
      <div className={clsx(
        "w-full rounded-[28px] bg-tgScBg relative bottom-[30px] px-4 pt-4",
        "flex flex-col",
        channel.isExtended ? "h-[240px]" : "h-[150px]"
      )}
      >
        <ChannelCardTags tagsNames={channel.tags} />
        <h3 className="text-md mt-2">
          <span className="font-bold">{channel.subs + " "}</span>
          <span>подписчиков</span>
        </h3>
        {
          channel.isExtended &&
          <p className="text-md mt-2">
            {channel.caption}
          </p>
        }
        <JoinChannelButton className="mt-auto mb-4" />
      </div>
    </div>
  );
}
