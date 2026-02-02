interface Props {
  name: string;
  className: string;
  small?: boolean;
  onClick?: () => void;
}

export function Tag({ name, className, small, onClick }: Props) {
  return (
    <span
      className={`rounded-full px-3 py-1 underline ${small ? "text-xs" : ""}
      underline-offset-4 decoration-slate-300 hover:decoration-slate-600
      hover:cursor-pointer
      ${className}`}
      onClick={onClick}
    >{name}</span>
  );
}
