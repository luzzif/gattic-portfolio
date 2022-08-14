import React, { ReactNode } from "react";
import { Box, Flex, Text } from "rebass";
import styled from "styled-components";
import quoteLeft from "../../../images/my-weather/quote-left.svg";
import quoteRight from "../../../images/my-weather/quote-right.svg";

const StatNumber = styled(Box)`
  font-family: Inter;
  font-size: 80px;
  font-weight: 800;
  line-height: 55px;
  letter-spacing: 0.01em;
`;

const StatText = styled(Text)`
  font-family: "Open Sans";
  font-size: 21px;
  font-weight: 400;
  line-height: 38px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #ffffffd9;
`;

interface StatProps {
  number: string;
  text: ReactNode;
}

const Stat = ({ number, text }: StatProps) => {
  return (
    <Flex>
      <StatNumber mr="20px" minWidth="auto">
        {number}
      </StatNumber>
      <StatText minWidth="auto">{text}</StatText>
    </Flex>
  );
};

export const Results = () => {
  return (
    <Flex
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
          Results
        </Text>
        <Flex mx="-80px">
          <Flex width={["50%"]} flexDirection={["column"]} px="80px">
            <Text
              mb="60px"
              fontFamily="Open Sans"
              fontSize="21px"
              fontWeight="600"
              lineHeight="38px"
              letterSpacing="0.01em"
              color="#FFFFFF80"
            >
              ERRORS & CONFUSION
            </Text>
            <Box mb="100px">
              <Stat
                number="75%"
                text="of the task were performed correctly without any issues"
              />
            </Box>
            <Box mb="100px">
              <Stat
                number="20%"
                text="of the proposed tasks were performed but not smoothly"
              />
            </Box>
            <Stat number="5%" text="of the proposed tasks were not performed" />
          </Flex>
          <Flex width={["50%"]} flexDirection={["column"]} px="80px">
            <Text
              mb="60px"
              fontFamily="Open Sans"
              fontSize="21px"
              fontWeight="600"
              lineHeight="38px"
              letterSpacing="0.01em"
              color="#FFFFFF80"
            >
              APP EXPERIENCE
            </Text>
            <Box mb="100px">
              <Stat
                number="90%"
                text="of attendees found the app easy and intuitive"
              />
            </Box>
            <Stat number="10%" text="of attendees found the app confusing" />
          </Flex>
        </Flex>
        <Text
          width="100%"
          mt="80px"
          fontFamily="Open Sans"
          fontSize="21px"
          fontWeight="400"
          lineHeight="38px"
          letterSpacing="0.01em"
          color="#FFFFFFD9"
          textAlign="center"
        >
          Based on the results of the usability study, I adapted the design to
          make it more fluid, intuitive and easy to use.
        </Text>
      </Flex>
    </Flex>
  );
};
