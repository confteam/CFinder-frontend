import clsx from "clsx";

interface Props {
  name: string;
  className?: string;
  small?: boolean;
  onClick?: () => void;
  selected?: boolean;
}

export function Tag({ name, className, small, onClick, selected }: Props) {
  return (
    <span
      className={clsx(
        `rounded-full px-3 py-0.5 ${small ? "text-sm" : "py-1"}
      underline-offset-4 decoration-slate-300 hover:decoration-slate-600
      hover:cursor-pointer transition-colors duration-150`,
        className,
        small ? (selected ? "bg-tgTxt text-tgBg" : "bg-tgBg") : (selected ? "bg-tgTxt text-tgScbg" : "bg-tgScBg")
      )}
      onClick={onClick}
    >{name}</span>
  );
}
