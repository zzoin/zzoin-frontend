import React from "react";
import styled, { css } from "styled-components";

export interface ButtonProps {
  text: string;
  theme: "banner" | "search" | "keyword";
  height: string;
  width: string;
  fontSize: string;
}

const Button = ({ text, theme, height, width, fontSize }: ButtonProps) => {
  return (
    <StyledButton
      theme={theme}
      height={height}
      width={width}
      fontSize={fontSize}
    >
      {text}
    </StyledButton>
  );
};

Button.defaultProps = {
  theme: "banner",
  height: "2rem",
  width: "10rem",
  fontSize: ".8rem",
};

const StyledButton = styled.button<{
  height: string;
  width: string;
  fontSize: string;
}>`
  background-color: #000;
  border: none;
  border-radius: 2rem;
  color: #fff;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  font-size: ${(props) => props.fontSize};

  ${(props) =>
    props.theme === "banner" &&
    `
    background-color: #575bc3;
    color: #fff;
  `};

  ${(props) =>
    props.theme === "search" &&
    `
    background-color: #e6e7ff;
    color: #5b5fcb
  `};

  ${(props) =>
    props.theme === "keyword" &&
    `
    background-color: #fff;
    color: #5b5fcb;
  `};
`;

export default Button;
