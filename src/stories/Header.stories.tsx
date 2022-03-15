import React from "react";
import Header from "../components/Header";

export default {
  title: "Components/common/Header",
  component: Header,
};

export const header = () => {
  return <Header />;
};

header.story = {
  name: "Default",
};
