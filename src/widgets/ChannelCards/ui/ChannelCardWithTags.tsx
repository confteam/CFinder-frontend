import { useChannelStore, type Channel } from "@/entities/Channel";
import { JoinChannelButton } from "@/features/JoinChannelButton";
import { cutText } from "@/shared";
import { ChannelCardTags } from "@/widgets/ChannelTags";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";

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
            <h2 className="text-xl">{cutText(channel.name, 20)}</h2>
            <p className="text-sm">Нажмите на карточку, чтобы раскрыть</p>
          </div>
        </div>
      </div>
      <motion.div
        layout="size"
        className={clsx(
          "w-full rounded-[28px] bg-bg relative bottom-[30px] px-4 pt-4",
          "flex flex-col overflow-hidden"
        )}
        transition={{ duration: 0.5, ease: "circInOut" }}
      >
        <ChannelCardTags tagsNames={channel.tags} />

        <h3 className="text-md mt-2 pb-3">
          <span className="font-bold">{channel.subs + " "}</span>
          <span>подписчиков</span>
        </h3>

        <AnimatePresence initial={false}>
          {channel.isExtended && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <p className="text-md pb-3">
                {channel.caption}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <JoinChannelButton className="mt-auto mb-4" gradient={gradient} link={channel.link} />
      </motion.div>
    </div>
  );
}
