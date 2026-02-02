import type { Channel } from "@/entities/Channel";
import clsx from "clsx";

interface Props {
  channel: Channel;
  className?: string;
}

export function ChannelCardWithTags({ className, channel }: Props) {
  return (
    <div
      className={clsx(
        `w-full transition-transform duration-500 ease-out relative`,
        className
      )}
    >
      <div className="h-[130px] rounded-t-[28px] bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="flex items-center pt-5 pl-5 gap-4">
          <img src={channel.image} alt={channel.name} className="rounded-2xl border border-white/60 shadow-lg h-16 w-16" />
          <div className="flex flex-col">
            <h2 className="text-2xl">{channel.name}</h2>
            <p className="text-sm text-tgSub">Нажмите на карточку, чтобы раскрыть</p>
          </div>
        </div>
      </div>
      <div className="h-[140px] w-full rounded-[28px] bg-tgScBg relative bottom-[30px]">

      </div>
    </div>
  );
}
