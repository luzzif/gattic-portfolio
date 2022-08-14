import React from "react";
import { Box, Flex, Text } from "rebass";
import styled from "styled-components";
import background1 from "../../../images/my-weather/typography-color.png";
import colors from "../../../images/my-weather/colors.svg";

const FirstFlex = styled(Flex)`
  background: url(${background1}) no-repeat left top scroll;
  background-size: cover;
  background-color: #161616;
`;

export const TypographyColor = () => {
  return (
    <FirstFlex
      py="50px"
      backgroundColor="#161616"
      width="100%"
      flexDirection="column"
      alignItems="center"
    >
      <Flex
        flexDirection="column"
        style={{ zIndex: 10 }}
        width={["100%", "90%", "70%"]}
        alignItems={["center", "center", "flex-start"]}
      >
        <Text
          mb="60px"
          color="#FFFFFFB2"
          fontFamily="Raleway"
          fontSize="30px"
          fontWeight="500"
          lineHeight="30px"
          letterSpacing="0.02em"
          textAlign={["center", "center", "left"]}
        >
          Typography & color palette
        </Text>
        <Flex width="100%">
          <Flex flexDirection="column" width="50%">
            <Flex flexDirection="column" mb="40px">
              <Text
                mb="30px"
                color="#FFFFFF"
                fontFamily="Inter"
                fontSize="30px"
                fontWeight="500"
                lineHeight="30px"
                letterSpacing="4%"
                textAlign={["center", "center", "left"]}
              >
                Inter
              </Text>
              <Flex mx="-20px">
                <Flex flexDirection="column" justifyContent="center" px="20px">
                  <Text
                    mb="30px"
                    color="#FFFFFFD9"
                    fontFamily="Inter"
                    fontSize="25px"
                    fontWeight="300"
                    lineHeight="25px"
                    letterSpacing="0.04em"
                    textAlign={["center", "center", "left"]}
                  >
                    Aa
                  </Text>
                  <Text
                    mb="30px"
                    color="#FFFFFFD9"
                    fontFamily="Inter"
                    fontSize="25px"
                    fontWeight="300"
                    lineHeight="25px"
                    letterSpacing="0.04em"
                    textAlign={["center", "center", "left"]}
                  >
                    Light
                  </Text>
                </Flex>
                <Flex flexDirection="column" justifyContent="center" px="20px">
                  <Text
                    mb="30px"
                    color="#FFFFFFD9"
                    fontFamily="Inter"
                    fontSize="25px"
                    fontWeight="400"
                    lineHeight="25px"
                    letterSpacing="0.04em"
                    textAlign={["center", "center", "left"]}
                  >
                    Aa
                  </Text>
                  <Text
                    mb="30px"
                    color="#FFFFFFD9"
                    fontFamily="Inter"
                    fontSize="25px"
                    fontWeight="400"
                    lineHeight="25px"
                    letterSpacing="0.04em"
                    textAlign={["center", "center", "left"]}
                  >
                    Regular
                  </Text>
                </Flex>
                <Flex flexDirection="column" justifyContent="center" px="20px">
                  <Text
                    mb="30px"
                    color="#FFFFFFD9"
                    fontFamily="Inter"
                    fontSize="25px"
                    fontWeight="500"
                    lineHeight="25px"
                    letterSpacing="0.04em"
                    textAlign={["center", "center", "left"]}
                  >
                    Aa
                  </Text>
                  <Text
                    mb="30px"
                    color="#FFFFFFD9"
                    fontFamily="Inter"
                    fontSize="25px"
                    fontWeight="500"
                    lineHeight="25px"
                    letterSpacing="0.04em"
                    textAlign={["center", "center", "left"]}
                  >
                    Medium
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex flexDirection="column">
              <Text
                mb="30px"
                color="#FFFFFF"
                fontFamily="Rubik"
                fontSize="30px"
                fontWeight="500"
                lineHeight="30px"
                letterSpacing="4%"
                textAlign={["center", "center", "left"]}
              >
                Rubik
              </Text>
              <Flex mx="-20px">
                <Flex flexDirection="column" justifyContent="center" px="20px">
                  <Text
                    mb="30px"
                    color="#FFFFFFD9"
                    fontFamily="Rubik"
                    fontSize="25px"
                    fontWeight="400"
                    lineHeight="25px"
                    letterSpacing="0.04em"
                    textAlign={["center", "center", "left"]}
                  >
                    Aa
                  </Text>
                  <Text
                    color="#FFFFFFD9"
                    fontFamily="Rubik"
                    fontSize="25px"
                    fontWeight="400"
                    lineHeight="25px"
                    letterSpacing="0.04em"
                    textAlign={["center", "center", "left"]}
                  >
                    Regular
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Box width="50%" m="-100px">
            <img width="100%" src={colors} alt="colors" />
          </Box>
        </Flex>
      </Flex>
    </FirstFlex>
  );
};
