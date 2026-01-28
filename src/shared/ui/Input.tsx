import type { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
}

export function Input(props: Props) {
  return (
    <input
      className={`${props.className}`}
      value={props.value}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
}
