import React from "react";
import styled, { css } from "styled-components";

export interface MenuProps {
  text: string;
  theme: "banner" | "search" | "keyword";
  height: string;
  width: string;
  fontSize: string;
}

const Menu = () => {
  return (
    <MenuWrapper>
      <StyledMenu />
      <StyledMenu />
      <StyledMenu />
    </MenuWrapper>
  );
};

Menu.defaultProps = {
  theme: "banner",
  height: "2rem",
  width: "10rem",
  fontSize: ".8rem",
};

const StyledMenu = styled.div`
  background-color: #000;
  border: none;
  border-radius: 5rem;
  height: 3rem;
  width: 3rem;
  margin: 0.4rem;
`;

const MenuWrapper = styled.div`
  height: 10rem;
  width: 20rem;
  padding: 1.4rem;
  background-color: blue;
`;

export default Menu;
