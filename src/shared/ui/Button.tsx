import type { FC, HtmlHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant = "primary";

interface Props extends HtmlHTMLAttributes<HTMLButtonElement> {
  size: ButtonSize;
  variant: ButtonVariant;
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  className?: string;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "py-1.5 px-2 text-sm",
  md: "py-2.5 px-3 text-md",
  lg: "py-3.5 px-4 text-lg"
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-redBleed active:bg-red text-buttonTxt",
}

export const Button: FC<Props> = ({
  size = "md",
  variant = "primary",
  leftIcon, rightIcon,
  fullWidth = false,
  className, children,
  ...props
}) => {
  return (
    <button
      className={clsx(
        `inline-flex items-center justify-center rounded-2xl font-medium transition-colors`,
        sizeClasses[size],
        variantClasses[variant],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
}
