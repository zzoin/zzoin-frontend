import React from "react";
import styled, { css } from "styled-components";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  theme: "banner" | "search" | "keyword";
  size: "small" | "medium" | "big";
  disabled?: boolean;
}

function Button({ children, onClick, disabled, theme, size }: ButtonProps) {
  const StyledButton = styled.button`
    height: 2rem;
    width: 10rem;
    background-color: #000;
    border: none;
    border-radius: 2rem;
    color: #fff;
    font-size: 1rem;
  `;
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      theme={themes[theme]}
      // size={sizes[size]}
    >
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  theme: "banner",
  size: "medium",
};

const themes = {
  banner: css`
    background-color: #575bc3;
    color: #fff;
  `,

  search: css`
    background-color: #e6e7ff;
    color: #5b5fcb;
  `,

  keyword: css`
    background-color: #fff;
    color: #5b5fcb;
  `,
};

const sizes = {
  small: css`
    font-size: 1rem;
    height: 1.6rem;
  `,
  medium: css`
    font-size: 1.2rem;
    height: 2rem;
  `,
  big: css`
    font-size: 1.6rem;
    height: 2.4rem;
  `,
};

export default Button;
