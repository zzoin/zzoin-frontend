import React from "react";
import styled from "styled-components";
import Button from "../components/common/Button";

export default {
  title: "Components/common/Button",
  component: Button,
};

export const button = () => {
  return <Button>BUTTON</Button>;
};

button.story = {
  name: "Default",
};

export const sampleButton = () => {
  return <Button>sample</Button>;
};

export const bannerBtn = () => {
  return <Button theme="banner">BANNER</Button>;
};

export const searchBtn = () => {
  return <Button theme="search">SEARCH</Button>;
};

export const keywordBtn = () => {
  return <Button theme="keyword">KEYWORD</Button>;
};
