import React from "react";
import { Box, Flex, Text } from "rebass";
import styled from "styled-components";
import background1 from "../../../images/my-weather/header.png";
import figmaLogo from "../../../images/my-weather/figma.svg";

const FirstFlex = styled(Flex)`
  background: url(${background1}) no-repeat left top scroll;
  background-size: cover;
  background-color: #161616;
`;

interface PillProps {
  color: string;
  textColor: string;
}

const Pill = ({ color, textColor }: PillProps) => {
  return (
    <Flex
      style={{
        borderRadius: "50px",
        boxShadow: "0px 2px 30px rgba(116, 116, 116, 0.5)",
      }}
      width="50px"
      height="140px"
      backgroundColor={color}
      textAlign="right"
      py="20px"
    >
      <Text
        fontFamily="Inter"
        fontSize="15px"
        fontWeight="500"
        lineHeight="50px"
        letterSpacing="0.04em"
        color={textColor}
        style={{ writingMode: "vertical-rl" }}
        width="50px"
      >
        {color}
      </Text>
    </Flex>
  );
};

export const Header = () => {
  return (
    <FirstFlex
      width="100%"
      justifyContent="flex-end"
      alignItems="center"
      height="100vh"
      px="75px"
    >
      <Flex
        flexDirection="column"
        maxWidth={["100%", "90%", "424px"]}
        alignItems={["center", "center", "flex-end"]}
      >
        <Text
          mb="27px"
          color="#FFFFFFB2"
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="500"
          lineHeight="20px"
          letterSpacing="0.155em"
          textAlign={["center", "center", "right"]}
        >
          UI CHALLENGE
        </Text>
        <Text
          mb="27px"
          color="#FFFFFF"
          fontFamily="Raleway"
          fontSize="55px"
          fontWeight="600"
          lineHeight="22px"
          letterSpacing="1.5px"
          textAlign={["center", "center", "right"]}
        >
          MyWeather
        </Text>
        <Text
          color="#FFFFFF"
          fontFamily="Inter"
          fontSize="18px"
          fontWeight="300"
          lineHeight="22px"
          letterSpacing="1px"
          textAlign={["center", "center", "right"]}
        >
          Always with you, rain or shine
        </Text>
        <Flex mx="-20px" my="40px">
          <Box px="20px">
            <Pill color="#1C1C1C" textColor="#F9F9F9" />
          </Box>
          <Box px="20px">
            <Pill color="#F9F9F9" textColor="#1C1C1C" />
          </Box>
        </Flex>
        <img src={figmaLogo} width="40px" />
      </Flex>
    </FirstFlex>
  );
};
