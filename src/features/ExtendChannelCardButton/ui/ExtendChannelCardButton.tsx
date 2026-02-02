import { useChannelStore } from "@/entities/Channel";
import { Button } from "@/shared";
import clsx from "clsx";

interface ButtonProps extends IconProps {
  className?: string;
  channelName: string;
}

interface IconProps {
  isExtended?: boolean;
}

function ExtendChannelCardIcon({ isExtended }: IconProps) {
  return (
    <span className={clsx(
      `absolute right-[5px]`,
      !isExtended ? "bottom-[14px]" : "bottom-[9px]"
    )}
    >
      {isExtended ? "⌃" : "⌄"}
    </span>
  );
}

export function ExtendChannelCardButton({ className, isExtended, channelName }: ButtonProps) {
  const { toggleExtendedChannel } = useChannelStore();

  return (
    <Button
      size="lg"
      variant="text"
      rightIcon=<ExtendChannelCardIcon isExtended={isExtended} />
      className={clsx("relative", className)}
      onClick={() => toggleExtendedChannel(channelName)}
    >
      Подробнее
    </Button>
  );
}
