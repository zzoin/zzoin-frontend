import React from "react";
import Banner from "../components/Banner";

export default {
  title: "Components/common/Banner",
  component: Banner,
};

export const banner = () => {
  return <Banner />;
};

banner.story = {
  name: "Default",
};

export const keywordBgBox = () => {
  return <Banner />;
};

export const keywordBgBox2 = () => {
  return <Banner height="60rem" />;
};
