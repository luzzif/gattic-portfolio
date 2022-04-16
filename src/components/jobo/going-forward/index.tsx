import React from "react";
import { Box, Flex, Text } from "rebass";
import styled from "styled-components";
import { Title } from "../title";

const BodyText = styled(Text)`
  font-size: 21px;
  line-height: 30px;
  font-weight: 300;
  letter-spacing: 0em;
`;

const Circle = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6998ff;
  font-size: 35px;
  font-weight: 900;
  color: #fff;
`;

export const GoingForward = () => {
  return (
    <Flex flexDirection="column" width="100%">
      <Title mt="50px" mb="20px">
        WHAT I'VE LEARNED
      </Title>
      <BodyText mb="50px">
        While designing Jobo responsive website, I learned that the first ideas
        are only the beginning of the process. Usability studies and peer
        feedback influenced each iteration of the website’s designs.
      </BodyText>
      <Title mb="70px">NEXT STEPS</Title>
      <Flex
        width="100%"
        justifyContent="space-around"
        mb="44px"
        flexDirection={["column", "row"]}
      >
        <Flex flexDirection="column" alignItems="center" mb={["40px", "0px"]}>
          <Box mb="35px">
            <Circle>1</Circle>
          </Box>
          <Text
            maxWidth="348px"
            fontSize="18px"
            fontWeight="300"
            lineHeight="25px"
            letterSpacing="0em"
            textAlign="center"
          >
            Conduct another round of usability studies to validate if the pain
            points experienced have been effectively addressed.
          </Text>
        </Flex>
        <Flex flexDirection="column" alignItems="center">
          <Box mb="35px">
            <Circle>2</Circle>
          </Box>
          <Text
            maxWidth="348px"
            fontSize="18px"
            fontWeight="300"
            lineHeight="25px"
            letterSpacing="0em"
            textAlign="center"
          >
            Add more educational resources for users to learn about the world of
            work.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
