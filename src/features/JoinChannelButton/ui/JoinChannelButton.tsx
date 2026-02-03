import { Button } from "@/shared";

interface Props {
  className?: string;
}

export function JoinChannelButton({ className }: Props) {
  return (
    <Button
      size="md"
      variant="primary"
      className={`${className} w-full bg-gradient-to-r from-blue-500 to-purple-500`}
    >Открыть</Button>
  );
}
