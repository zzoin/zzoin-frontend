import React from "react";
import Text, { TextProps } from "../components/common/Text";

import { Story, Meta } from "@storybook/react";

export default {
  text: "Components/common/Text",
  component: Text,
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Basic = Template.bind({});
Basic.args = { text: "TEXT lol" };
