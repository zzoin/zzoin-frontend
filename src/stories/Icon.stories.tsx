import React from "react";
import Icon from "../components/common/Icon";

export default {
  title: "Components/common/Icon",
  component: Icon,
};

export const icon = () => {
  return <Icon />;
};

icon.story = {
  name: "Default",
};

export const keywordBgBox = () => {
  return <Icon theme="keyword" />;
};
