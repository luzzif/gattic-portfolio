import React from "react";
import { Box, Flex, Text } from "rebass";
import styled from "styled-components";
import background11 from "../../../images/lets-cake/background11.svg";
import { SectionTitle } from "../section-title";

const BackgroundFlex = styled(Flex)`
  background-image: url(${background11});
  background-repeat: no-repeat;
  background-size: contain;
  background-attachment: scroll;
  background-position: 120% 140%;
`;

const ColorCircle = styled.div<{ color: string; size: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${(props) => props.color};
  box-shadow: 6px 4px 10px 0px rgba(0, 0, 0, 0.33);
  border-radius: 50%;
`;

interface ColorProps {
  color: string;
  size: number;
  percentage: number;
  blackPercentage?: boolean;
}

const Color = ({ color, size, percentage, blackPercentage }: ColorProps) => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Box mb="24px">
        <ColorCircle color={color} size={size}>
          <Text
            fontSize="23px"
            fontWeight="500"
            lineHeight="27px"
            letterSpacing="0em"
            color={blackPercentage ? "#000" : "#fff"}
          >
            {percentage}%
          </Text>
        </ColorCircle>
      </Box>
      <Text
        fontSize="23px"
        fontWeight="500"
        lineHeight="27px"
        letterSpacing="0em"
      >
        {color}
      </Text>
    </Flex>
  );
};

export const StyleGuide = () => {
  return (
    <Flex width="100%" flexDirection="column" alignItems="center">
      <BackgroundFlex
        flexDirection="column"
        alignItems="center"
        width="100%"
        pt="33px"
        pb="60px"
      >
        <Box pb={["60px", "60px", "118px"]}>
          <SectionTitle color="#FFF" backgroundColor="#EBD7DE">
            Style guide
          </SectionTitle>
        </Box>
        <Flex flexDirection={["column", "column", "row"]} alignItems="center">
          <Flex
            alignItems="center"
            mr={["0px", "0px", "132px"]}
            mb={["24px", "24px", "0px"]}
            px={["24px", "24px", "0px"]}
          >
            <Box>
              <Color color="#D9091F" percentage={10} size={128} />
            </Box>
            <Flex flexDirection="column">
              <Box mb="30px" alignSelf="flex-end">
                <Color color="#161A1B" percentage={30} size={160} />
              </Box>
              <Color
                color="#FFFFFF"
                blackPercentage
                percentage={60}
                size={200}
              />
            </Flex>
          </Flex>
          <Flex flexDirection="column" px={["24px", "24px", "0px"]}>
            <Text
              fontFamily="Open Sans"
              fontSize="45px"
              fontWeight="600"
              lineHeight="60px"
              letterSpacing="0em"
              mb="40px"
            >
              Segoe UI
            </Text>
            <Flex>
              <Flex flexDirection="column">
                <Text
                  fontFamily="Open Sans"
                  fontSize="25px"
                  fontWeight="700"
                  lineHeight="33px"
                  letterSpacing="0em"
                  textAlign="left"
                  mb="20px"
                  mr="40px"
                >
                  Bold
                </Text>
                <Text
                  fontFamily="Open Sans"
                  fontSize="25px"
                  fontWeight="600"
                  lineHeight="33px"
                  letterSpacing="0em"
                  textAlign="left"
                  mb="20px"
                  mr="40px"
                >
                  Semibold
                </Text>
                <Text
                  fontFamily="Open Sans"
                  fontSize="25px"
                  fontWeight="300"
                  lineHeight="33px"
                  letterSpacing="0em"
                  textAlign="left"
                  mr="40px"
                >
                  Semilight
                </Text>
              </Flex>
              <Flex flexDirection="column">
                <Text
                  fontFamily="Open Sans"
                  fontSize="25px"
                  fontWeight="700"
                  lineHeight="33px"
                  letterSpacing="0em"
                  textAlign="left"
                  mb="20px"
                  mr="40px"
                >
                  A b c
                </Text>
                <Text
                  fontFamily="Open Sans"
                  fontSize="25px"
                  fontWeight="600"
                  lineHeight="33px"
                  letterSpacing="0em"
                  textAlign="left"
                  mb="20px"
                  mr="40px"
                >
                  A b c
                </Text>
                <Text
                  fontFamily="Open Sans"
                  fontSize="25px"
                  fontWeight="250"
                  lineHeight="33px"
                  letterSpacing="0em"
                  textAlign="left"
                  mr="40px"
                >
                  A b c
                </Text>
              </Flex>
              <Flex flexDirection="column" mb="97px">
                <Text
                  fontFamily="Open Sans"
                  fontSize="25px"
                  fontWeight="700"
                  lineHeight="33px"
                  letterSpacing="0em"
                  textAlign="left"
                  mb="20px"
                >
                  1234 !?&
                </Text>
                <Text
                  fontFamily="Open Sans"
                  fontSize="25px"
                  fontWeight="600"
                  lineHeight="33px"
                  letterSpacing="0em"
                  textAlign="left"
                  mb="20px"
                >
                  1234 !?&
                </Text>
                <Text
                  fontFamily="Open Sans"
                  fontSize="25px"
                  fontWeight="250"
                  lineHeight="33px"
                  letterSpacing="0em"
                  textAlign="left"
                >
                  1234 !?&
                </Text>
              </Flex>
            </Flex>

            <Text
              fontFamily="Raylig"
              fontSize="45px"
              fontWeight="600"
              lineHeight="57px"
              letterSpacing="0em"
              mb="40px"
            >
              Raylig
            </Text>
            <Flex>
              <Flex flexDirection="column">
                <Text
                  fontFamily="Raylig"
                  fontSize="25px"
                  fontWeight="500"
                  lineHeight="31px"
                  letterSpacing="0em"
                  mb="20px"
                  mr="40px"
                >
                  Medium
                </Text>
              </Flex>
              <Flex flexDirection="column">
                <Text
                  fontFamily="Raylig"
                  fontSize="25px"
                  fontWeight="500"
                  lineHeight="31px"
                  letterSpacing="0em"
                  mb="20px"
                  mr="40px"
                >
                  A b c
                </Text>
              </Flex>
              <Flex flexDirection="column">
                <Text
                  fontFamily="Raylig"
                  fontSize="25px"
                  fontWeight="500"
                  lineHeight="31px"
                  letterSpacing="0em"
                  mb="20px"
                >
                  1234 !?&
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </BackgroundFlex>
    </Flex>
  );
};
