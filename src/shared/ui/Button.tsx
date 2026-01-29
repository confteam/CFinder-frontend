import type { HtmlHTMLAttributes } from "react";

interface Props extends HtmlHTMLAttributes<HTMLButtonElement> {
  className?: string;
  text: string;
}

export function Button({ className, text, onClick }: Props) {
  return (
    <button
      className={`py-2 px-3 bg-tgBtn text-tgBtnTxt rounded-xl text-sm cursor-pointer ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
