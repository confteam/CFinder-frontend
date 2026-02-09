import { Button } from "@/shared";
import { useSearchStore } from "../model/store";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

interface Props {
  className?: string;
}

export function SearchChannelsSort({ className }: Props) {
  const { sort, toggleSort } = useSearchStore();

  return (
    <div className={`flex gap-5 items-center ${className}`}>
      <h3>{sort === "asc" ? "Сначала меньше подписчиков" : "Сначала больше подписчиков"}</h3>
      <Button
        size="sm"
        variant="primary"
        className="px-5 py-2"
        onClick={toggleSort}
      >
        {sort === "asc" ? <FaArrowUp /> : <FaArrowDown />}
      </Button>
    </div>
  );
}
