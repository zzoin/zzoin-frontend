import React from "react";
import styled, { css } from "styled-components";

export interface BackgroundBoxProps {
  theme: "main" | "keyword";
  height: string;
  width: string;
}

const BackgroundBox = ({ theme, height, width }: BackgroundBoxProps) => {
  return <StyledBackgroundBox theme={theme} height={height} width={width} />;
};

BackgroundBox.defaultProps = {
  theme: "main",
  height: "20rem",
  width: "30rem",
};

const StyledBackgroundBox = styled.div<{
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

export default BackgroundBox;
