interface Props {
  name: string;
  className: string;
}

export function Tag({ name, className }: Props) {
  return (
    <span
      className={`rounded-full px-3 py-1 underline
      underline-offset-4 decoration-slate-300 hover:decoration-slate-600
      hover:cursor-pointer
      ${className}`}
    >{name}</span>
  );
}
