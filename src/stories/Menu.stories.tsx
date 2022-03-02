import React from "react";
import Menu from "../components/Menu";

export default {
  title: "Components/common/Menu",
  component: Menu,
};

export const menu = () => {
  return <Menu />;
};

menu.story = {
  name: "Default",
};
