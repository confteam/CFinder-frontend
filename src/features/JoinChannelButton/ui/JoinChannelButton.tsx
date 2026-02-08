import { useState } from "react";
import { Button } from "@/shared";

interface Props {
  className?: string;
  gradient: string;
  darkGradient: string;
  link: string;
}

export function JoinChannelButton({ className, gradient, darkGradient, link }: Props) {
  const [isActive, setIsActive] = useState(false);
  const tg = Telegram.WebApp;

  return (
    <Button
      size="md"
      variant="primary"
      className={`${className} w-full`}
      style={{ background: isActive ? darkGradient : gradient }}
      onClick={(e) => {
        e.stopPropagation();
        tg.openLink(link);
      }}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onMouseLeave={() => setIsActive(false)}
      onTouchStart={() => setIsActive(true)}
      onTouchEnd={() => setIsActive(false)}
    >
      Открыть
    </Button>
  );
}
