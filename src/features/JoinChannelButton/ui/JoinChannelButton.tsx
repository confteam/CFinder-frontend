import { Button } from "@/shared";

interface Props {
  className?: string;
  gradient: string;
  link: string;
}

export function JoinChannelButton({ className, gradient, link }: Props) {
  const tg = Telegram.WebApp;
  return (
    <Button
      size="md"
      variant="primary"
      className={`${className} w-full`}
      style={{ background: gradient }}
      onClick={() => tg.openLink(link)}
    >Открыть</Button>
  );
}
