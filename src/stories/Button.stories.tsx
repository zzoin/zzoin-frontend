import React from "react";
import Button from "../components/common/Button";

export default {
  title: "Components/common/Button",
  component: Button,
};

export const button = () => {
  return <Button text="BUTTON" />;
};

button.story = {
  name: "Default",
};

export const sampleButton = () => {
  return <Button text="sample" />;
};

export const bannerBtn = () => {
  // return <Button text="BANNER" theme="banner" height="4rem" width="30rem" />;
  return <Button text="BANNER" theme="banner" />;
};

export const searchBtn = () => {
  return <Button text="SEARCH" theme="search" />;
};

export const keywordBtn = () => {
  return <Button text="KEYWORD" theme="keyword" />;
};
