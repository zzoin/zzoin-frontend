import React from "react";
import styled from "styled-components";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({ children, onClick }: ButtonProps) {
  const StyledButton = styled.button`
    height: 2rem;
    width: 5rem;
    background-color: red;

    &:hover {
      background-color: #000;
      color: #fff;
    }
  `;

  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default Button;
