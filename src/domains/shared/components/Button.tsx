import { ButtonHTMLAttributes, useMemo } from "react";
import { css } from "@emotion/react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  size?: "lg" | "md";
  variant?: "default" | "colored";
}

const Button = ({
  variant = "default",
  size = "lg",
  children,
  ...props
}: ButtonProps) => {
  const variantStyle = useMemo(() => {
    if (variant === "default") {
      return css`
        background: #f4f4f4;
        color: #8e9294;
      `;
    }
    if (variant === "colored") {
      return css`
        background: linear-gradient(
          131deg,
          #c4a1d8 0%,
          #a3abd2 21.62%,
          #89b3cd 45.74%,
          #fff3ab 93.73%
        );
        color: #fff;
      `;
    }
  }, [variant]);

  const buttonSizeStyle = useMemo(() => {
    if (size === "lg") {
      return css`
        height: 50px;
      `;
    }
    if (size === "md") {
      return css`
        height: 45px;
      `;
    }
  }, [size]);

  return (
    <button
      css={[defaultButtonStyle, variantStyle, buttonSizeStyle]}
      {...props}
    >
      {children}
    </button>
  );
};

const defaultButtonStyle = css`
  width: 100%;
  border-radius: 30px;
  border: none;
  font-size: 16px;
  font-family: "Pretendard";
  font-weight: 700;
  cursor: pointer;
`;

export default Button;
