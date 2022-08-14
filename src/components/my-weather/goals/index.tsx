import React, { ReactNode } from "react";
import { Box, Flex, Text } from "rebass";
import styled from "styled-components";
import quoteLeft from "../../../images/my-weather/quote-left.svg";
import quoteRight from "../../../images/my-weather/quote-right.svg";

const GoalNumber = styled(Box)`
  font-family: Inter;
  font-size: 80px;
  font-weight: 800;
  line-height: 55px;
  letter-spacing: 0.01em;
  min-width: auto !important;
`;

const GoalText = styled(Text)`
  font-family: "Open Sans";
  font-size: 21px;
  font-weight: 400;
  line-height: 38px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #ffffffd9;
`;

interface GoalProps {
  number: string;
  text: ReactNode;
}

const Goal = ({ number, text }: GoalProps) => {
  return (
    <Flex width={1 / 3} px="20px">
      <GoalNumber>{number}</GoalNumber>
      <GoalText ml="-20px">{text}</GoalText>
    </Flex>
  );
};

const QuoteText = styled(Text)`
  font-family: Inter;
  font-size: 30px;
  font-weight: 600;
  line-height: 54px;
  letter-spacing: 0em;
  color: #ffffffb2;
  text-shadow: 0px 4px 150px rgba(17, 209, 209, 0.6);
`;

interface QuoteProps {
  text: ReactNode;
}

const Quote = ({ text }: QuoteProps) => {
  return (
    <Flex>
      <Box>
        <img src={quoteLeft} alt="quote left" />
      </Box>
      <QuoteText ml="-10px" mr="-30px" style={{ zIndex: 1 }}>
        {text}
      </QuoteText>
      <Box alignSelf="flex-end" mb="-20px">
        <img src={quoteRight} alt="quote right" />
      </Box>
    </Flex>
  );
};

export const Goals = () => {
  return (
    <Flex
      backgroundColor="#161616"
      width="100%"
      flexDirection="column"
      alignItems="center"
    >
      <Flex
        pb="50px"
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
          Goals
        </Text>
        <Flex mx="-20px">
          <Goal
            number="01"
            text="Find if the design is intuitive and easy to use."
          />
          <Goal
            number="02"
            text="Discover the area of confusion while using the application."
          />
          <Goal
            number="03"
            text={
              <>
                <p style={{ marginTop: 0 }}>
                  Discover the area of confusion while using the application.
                </p>
                <ul>
                  <li>The search flow.</li>
                  <li>Adding new cities to the homepage.</li>
                  <li>change the temperature unit.</li>
                </ul>
              </>
            }
          />
        </Flex>
      </Flex>
      <Flex flexDirection="column" width="50%">
        <Box alignSelf="flex-start" mb="120px">
          <Quote
            text={
              <>
                I love that I can switch
                <br />
                between dark and light themes.
              </>
            }
          />
        </Box>
        <Box alignSelf="flex-end" mb="120px">
          <Quote
            text={
              <>
                It's so simple to search for new
                <br />
                cities and check the weather
              </>
            }
          />
        </Box>
        <Box alignSelf="flex-start">
          <Quote
            text={
              <>
                I would like to leave a feedback
                <br />
                and other types of settings
              </>
            }
          />
        </Box>
      </Flex>
    </Flex>
  );
};
