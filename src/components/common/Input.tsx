import React from "react";
import styled, { css } from "styled-components";

export interface InputProps {
  placeholder: string;
  height: string;
  width: string;
  fontSize: string;
}

const Input = ({ placeholder, height, width, fontSize }: InputProps) => {
  return (
    <StyledInput
      placeholder={placeholder}
      height={height}
      width={width}
      fontSize={fontSize}
    />
  );
};

Input.defaultProps = {
  placeholder: "검색어를 입력해주세요.",
  height: "2rem",
  width: "20rem",
  fontSize: ".8rem",
};

const StyledInput = styled.input<{
  placeholder: string;
  height: string;
  width: string;
  fontSize: string;
}>`
  border: none;
  padding: 1rem;
  box-sizing: border-box;
  outline: none;

  height: ${(props) => props.height};
  width: ${(props) => props.width};
  font-size: ${(props) => props.fontSize};

  &::placeholder {
    color: #a4a4a4;
  }
`;

export default Input;
