interface Props {
  name: string;
  className: string;
  small?: boolean;
}

export function Tag({ name, className, small }: Props) {
  return (
    <span
      className={`rounded-full px-3 py-1 underline ${small ? "text-[15px]" : ""}
      underline-offset-4 decoration-slate-300 hover:decoration-slate-600
      hover:cursor-pointer
      ${className}`}
    >{name}</span>
  );
}
