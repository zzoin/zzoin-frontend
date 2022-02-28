import React from "react";
import BackgroundBox from "../components/common/BackgroundBox";

export default {
  title: "Components/common/BackgroundBox",
  component: BackgroundBox,
};

export const backgroundbox = () => {
  return <BackgroundBox />;
};

backgroundbox.story = {
  name: "Default",
};

export const keywordBgBox = () => {
  return <BackgroundBox theme="keyword" />;
};

export const keywordBgBox2 = () => {
  return <BackgroundBox theme="keyword" height="60rem" />;
};
