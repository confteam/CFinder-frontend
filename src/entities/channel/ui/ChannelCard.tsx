import type { Channel } from "../model/types";

interface Props {
  channel: Channel;
  className?: string;
}

export function ChannelCard({ channel, className }: Props) {
  return (
    <div className={`relative w-full h-[190px] ${className}`}>
      <div className="h-[55%] rounded-t-2xl" style={{ backgroundColor: channel.background }}></div>
      <div className="h-[45%] bg-tgScBg rounded-b-2xl">
        <div className="ml-[100px] pt-[5px]">
          <h4>{channel.name}</h4>
        </div>
      </div>
      <img src={channel.image}
        alt={channel.name}
        className="absolute left-[50px] top-[55px] -translate-x-1/2 w-20 h-20 rounded-full border-4 border-white"
      />
    </div>
  );
}
