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
        `rounded-full px-3 py-0.5 ${small ? "text-sm" : ""}
      underline-offset-4 decoration-slate-300 hover:decoration-slate-600
      hover:cursor-pointer`,
        className,
        selected ? "bg-tgScBg" : "bg-tgTxt text-tgBg"
      )}
      onClick={onClick}
    >{name}</span>
  );
}
