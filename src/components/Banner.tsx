import React from "react";
import styled, { css } from "styled-components";
import banner from "../../public/assets/icon/banner-img.png";

export interface BannerProps {
  height: string;
  width: string;
}

const Banner = ({ height, width }: BannerProps) => {
  return <StyledBanner height={height} width={width} />;
};

Banner.defaultProps = {
  theme: "main",
  height: "200rem",
  width: "200rem",
};

const StyledBanner = styled.div<{
  height: string;
  width: string;
}>`
  background-image: url(${banner});
  background-size: cover;
  border: none;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;

export default Banner;
