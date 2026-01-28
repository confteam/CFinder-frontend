interface Props {
  title: string;
}

export function PageTitle({ title }: Props) {
  return (
    <h1 className="text-bold text-2xl">{title}</h1>
  );
}
