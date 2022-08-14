import React from "react";
import { Flex, Text } from "rebass";

export const Footer = () => {
  return (
    <Flex
      width="100%"
      backgroundColor="#161616"
      py="140px"
      justifyContent="center"
    >
      <Flex justifyContent="space-between" width={["100%", "90%", "70%"]}>
        <Text
          fontFamily="Open Sans"
          fontSize="18px"
          fontWeight="600"
          lineHeight="18px"
          letterSpacing="0.04em"
          color="#FFFFFF"
          alignSelf="flex-end"
        >
          UI/UX Designer
        </Text>
        <Flex flexDirection="column" alignItems="center">
          <Text
            mb="26px"
            fontFamily="Open Sans"
            fontSize="16px"
            fontWeight="400"
            lineHeight="16px"
            letterSpacing="0.04em"
            color="#FFFFFFCC"
          >
            Made by
          </Text>
          <Text
            fontFamily="Open Sans"
            fontSize="18px"
            fontWeight="600"
            lineHeight="18px"
            letterSpacing="0.04em"
            color="#FFFFFF"
          >
            Cristina Gatti
          </Text>
        </Flex>
        <Text
          fontFamily="Open Sans"
          fontSize="18px"
          fontWeight="600"
          lineHeight="18px"
          letterSpacing="0.04em"
          color="#FFFFFF"
          alignSelf="flex-end"
        >
          June 2022
        </Text>
      </Flex>
    </Flex>
  );
};
