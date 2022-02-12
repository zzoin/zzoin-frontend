import React from "react";
import styled from "styled-components";

export interface ButtonProps {
  children: React.ReactNode;
}

function Button({ children }: ButtonProps) {
  const StyledButton = styled.button`
    height: 2rem;
    width: 5rem;
    background-color: red;
  `;

  return <StyledButton>{children}</StyledButton>;
}

export default Button;
