import styled from "styled-components";

const Input = styled.input`
  border: 1px solid black;
  border-radius: 10px;
  font-size: 0.875rem;
  padding: 10px 12px;
  width: 300px;
  height: 54px;
  box-sizing: border-box;
  outline: none;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#f8f8f8"};

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    border: 1px solid #df2a19;
    box-shadow: 3px -3px 0px #bad1f4, 3px 3px 0px #bad1f4, -3px -3px 0px #bad1f4,
      -3px 3px 0px #bad1f4;
  }
`;

export default Input;
