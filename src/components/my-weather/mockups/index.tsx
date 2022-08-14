import React from "react";
import { Flex, Text } from "rebass";
import styled from "styled-components";
import background1 from "../../../images/my-weather/mockups.png";
import myWeatherVideo from "../../../videos/my-weather.mp4";

const FirstFlex = styled(Flex)`
  background-image: url(${background1});
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 0px;
  padding-top: 177.13515625%;
  background-color: #161616;
`;

export const Mockups = () => {
  return (
    <>
      <Flex
        flexDirection="column"
        width="100%"
        alignItems="center"
        backgroundColor="#161616"
      >
        <Flex
          flexDirection="column"
          style={{ zIndex: 10 }}
          width={["100%", "90%", "70%"]}
          alignItems={["center", "center", "flex-start"]}
        >
          <Text
            mt="50px"
            mb="60px"
            color="#FFFFFFB2"
            fontFamily="Raleway"
            fontSize="30px"
            fontWeight="500"
            lineHeight="30px"
            letterSpacing="0.02em"
            textAlign={["center", "center", "left"]}
          >
            Welcome to MyWeather
          </Text>
        </Flex>
      </Flex>
      <Flex width="100%" backgroundColor="#161616" justifyContent="center">
        <video autoPlay loop src={myWeatherVideo} />
      </Flex>
      <FirstFlex />
    </>
  );
};
