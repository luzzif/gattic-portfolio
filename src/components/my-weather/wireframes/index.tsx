import React from "react";
import { Flex } from "rebass";
import styled from "styled-components";
import background1 from "../../../images/my-weather/wireframes.png";

const FirstFlex = styled(Flex)`
  background-image: url(${background1});
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 0px;
  padding-top: 95.18359375%;
  background-color: #161616;
`;

export const Wireframes = () => {
  return <FirstFlex />;
};
