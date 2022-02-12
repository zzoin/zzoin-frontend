import React from "react";
import Button, { ButtonProps } from "../components/common/Button";

import { Story, Meta } from "@storybook/react";

export default {
  text: "Components/common/Button",
  component: Button,
} as Meta;

export const button = () => {
  const label = "Butn";

  return <Button>{label}</Button>;
};
