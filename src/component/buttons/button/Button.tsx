import React, { ButtonHTMLAttributes } from "react";

import * as S from "./Button.styled";

export type Variant =
  | "primaryLargeSquare"
  | "primaryLargeRound"
  | "primaryXLargeSquare"
  | "primaryXLargeRound"
  | "outline"
  | "ghost"
  | "ghostUnderline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: React.ReactNode;
  handleClick: () => void;
}

const Button = ({
  variant = "primaryLargeSquare",
  children,
  handleClick,
  ...props
}: ButtonProps) => {
  return (
    <button css={() => S.button(variant)} onClick={handleClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
