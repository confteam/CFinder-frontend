interface Props {
  title: string;
}

export function PageTitle({ title }: Props) {
  return (
    <h1 className="text-bold text-4xl py-6">{title}</h1>
  );
}
