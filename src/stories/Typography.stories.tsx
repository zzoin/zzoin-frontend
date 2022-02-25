import React from "react";
import Typography from "../components/common/Typography";

export default {
  title: "Components/common/Typography",
  component: Typography,
};

export const typography = () => {
  return <Typography text="Typo" />;
};

typography.story = {
  name: "Default",
};

export const sampleTypography = () => {
  return <Typography text="sampleTypo" />;
};

export const thinTypography = () => {
  return <Typography text="thinTypo" theme="thin" />;
};

export const regularTypography = () => {
  return <Typography text="regularTypo" theme="regular" />;
};

export const boldTypography = () => {
  return <Typography text="boldTypo" theme="bold" />;
};
