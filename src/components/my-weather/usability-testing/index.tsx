import React from "react";
import { Flex, Text } from "rebass";

export const UsabilityTesting = () => {
  return (
    <Flex backgroundColor="#161616" width="100%" justifyContent="center">
      <Flex
        py="50px"
        flexDirection="column"
        style={{ zIndex: 10 }}
        width={["100%", "90%", "70%"]}
        alignItems={["center", "center", "flex-start"]}
      >
        <Text
          mb="14px"
          color="#FFFFFF"
          fontFamily="Raleway"
          fontSize="30px"
          fontWeight="500"
          lineHeight="30px"
          letterSpacing="0.02em"
          textAlign={["center", "center", "left"]}
        >
          Usability testing
        </Text>
        <Text
          mb="27px"
          color="#FFFFFFB2"
          fontFamily="Raleway"
          fontSize="21px"
          fontWeight="400"
          lineHeight="38px"
          letterSpacing="0.01em"
          textAlign={["center", "center", "left"]}
        >
          I conducted a usability study to evaluate the user interface with
          potential users and to understand how usable, intuitive and easy to
          use the design is.
        </Text>
      </Flex>
    </Flex>
  );
};
