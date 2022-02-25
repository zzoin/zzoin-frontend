import React from "react";
import styled from "styled-components";

export interface TypographyProps {
  text: string;
  theme: "thin" | "regular" | "bold";
  color: string;
  fontSize: string;
}

const Typography = ({ text, theme, color, fontSize }: TypographyProps) => {
  return (
    <StyledTypography theme={theme} color={color} fontSize={fontSize}>
      {text}
    </StyledTypography>
  );
};

Typography.defaultProps = {
  theme: "regular",
  color: "#181818",
  fontSize: ".8rem",
};

const StyledTypography = styled.div<{ fontSize: string }>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  line-height: 1.5;
  white-space: pre-wrap;
  z-index: inherit;
  text-overflow: ellipsis;
  overflow: hidden;
  display: inline-block;

  ${(props) =>
    props.theme === "thin" &&
    `
    color: #a4a4a4;
    font-weight: 300;
  `};

  ${(props) =>
    props.theme === "regular" &&
    `
    font-weight: 400;
  `};

  ${(props) =>
    props.theme === "bold" &&
    `
    font-weight: 600;
  `};
`;

export default Typography;
