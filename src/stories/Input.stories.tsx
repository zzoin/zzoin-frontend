import React from "react";
import Input from "../components/common/Input";

export default {
  title: "Components/common/Input",
  component: Input,
};

export const input = () => {
  return <Input />;
};

input.story = {
  name: "Default",
};

export const sampleInput = () => {
  return <Input placeholder="찾고 싶은 인후 맛집이 있으신가요?" />;
};
