import { Button } from "@/shared";

interface Props {
  className?: string;
}

export function JoinChannelButton({ className }: Props) {
  return (
    <Button
      size="md"
      variant="primary"
      className={className}
    >Открыть</Button>
  );
}
