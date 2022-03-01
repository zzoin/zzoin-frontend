import React from "react";
import styled, { css } from "styled-components";

export interface IconProps {
  theme: "main" | "keyword";
  height: string;
  width: string;
}

const Icon = ({ theme, height, width }: IconProps) => {
  return <StyledIcon theme={theme} height={height} width={width} />;
};

Icon.defaultProps = {
  theme: "main",
  height: "1rem",
  width: "1rem",
};

const StyledIcon = styled.div<{
  height: string;
  width: string;
}>`
  background-color: #fff;
  border: none;
  height: ${(props) => props.height};
  width: ${(props) => props.width};

  ${(props) =>
    props.theme === "main" &&
    `
    background-color: #fff;
  `};

  ${(props) =>
    props.theme === "keyword" &&
    `
    background-color: #F1EFFF;
  `};
`;

export default Icon;
