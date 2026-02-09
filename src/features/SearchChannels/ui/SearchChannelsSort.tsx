import { Button } from "@/shared";
import { useSearchStore } from "../model/store";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  className?: string;
}

export function SearchChannelsSort({ className }: Props) {
  const { sort, toggleSort } = useSearchStore();

  const text =
    sort === "asc"
      ? "Сначала меньше подписчиков"
      : "Сначала больше подписчиков";

  return (
    <div className={`flex gap-5 items-center ${className}`}>
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.h3
            key={sort}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            {text}
          </motion.h3>
        </AnimatePresence>
      </div>

      <Button
        size="sm"
        variant="primary"
        className="px-5 py-2"
        onClick={toggleSort}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={sort}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {sort === "asc" ? <FaArrowUp /> : <FaArrowDown />}
          </motion.div>
        </AnimatePresence>
      </Button>
    </div>
  );
}
