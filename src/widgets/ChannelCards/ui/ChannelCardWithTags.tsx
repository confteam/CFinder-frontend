import { useChannelStore, type Channel } from "@/entities/Channel";
import { JoinChannelButton } from "@/features/JoinChannelButton";
import { ChannelCardTags } from "@/widgets/ChannelTags";
import clsx from "clsx";
import { motion } from "framer-motion";

interface Props {
  channel: Channel;
  className?: string;
}

export function ChannelCardWithTags({ className, channel }: Props) {
  const { toggleExtendedChannel } = useChannelStore();

  const gradient = `linear-gradient(to right, ${channel.colors[0]}, ${channel.colors[1]}`;

  return (
    <div
      className={clsx(
        `w-full relative cursor-pointer`,
        className
      )}
      onClick={() => toggleExtendedChannel(channel.name)}
    >
      <div
        className="h-[130px] rounded-t-[28px]"
        style={{ background: gradient }}
      >
        <div className="flex items-center pt-5 pl-5 gap-4">
          <img src={channel.pfp} alt={channel.name} className="rounded-2xl border border-white/60 shadow-lg h-16 w-16" />
          <div className="flex flex-col">
            <h2 className="text-2xl">{channel.name}</h2>
            <p className="text-sm">Нажмите на карточку, чтобы раскрыть</p>
          </div>
        </div>
      </div>
      <motion.div
        className={clsx(
          "w-full rounded-[28px] bg-tgScBg relative bottom-[30px] px-4 pt-4 overflow-hidden",
          "flex flex-col",
        )}
        initial={{ height: 150 }}
        animate={{ height: channel.isExtended ? 240 : 150 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <ChannelCardTags tagsNames={channel.tags} />
        <h3 className="text-md mt-2">
          <span className="font-bold">{channel.subs + " "}</span>
          <span>подписчиков</span>
        </h3>
        {
          channel.isExtended &&
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: channel.isExtended ? 1 : 0, height: channel.isExtended ? "auto" : 0 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="text-md mt-2">
              {channel.caption}
            </p>
          </motion.div>
        }
        <JoinChannelButton className="mt-auto mb-4" gradient={gradient} />
      </motion.div>
    </div>
  );
}
