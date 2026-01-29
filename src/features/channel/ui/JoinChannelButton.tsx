import { Button } from "@/shared";

interface Props {
  className?: string;
}

export function JoinChannelButton({ className }: Props) {
  return (
    <Button text="Открыть" className={className} />
  );
}
