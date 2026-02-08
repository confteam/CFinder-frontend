import type { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
}

export function Input(props: Props) {
  return (
    <input
      className={`px-4 py-3 w-[100%] bg-bg rounded-lg text-lg ${props.className}`}
      value={props.value}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
}
