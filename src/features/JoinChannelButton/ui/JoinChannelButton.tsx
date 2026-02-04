import { Button } from "@/shared";

interface Props {
  className?: string;
  gradient: string;
}

export function JoinChannelButton({ className, gradient }: Props) {
  return (
    <Button
      size="md"
      variant="primary"
      className={`${className} w-full`}
      style={{ background: gradient }}
    >Открыть</Button>
  );
}
