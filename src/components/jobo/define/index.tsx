import { GatsbyImage } from "gatsby-plugin-image";
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

interface DefineProps {
  goalsImage: any;
  joeyImage: any;
  graceImage: any;
}

export const Define = ({ goalsImage, joeyImage, graceImage }: DefineProps) => {
  return (
    <Flex flexDirection="column" width="100%">
      <Title mt="50px" mb="20px">
        PROBLEM STATEMENT
      </Title>
      <BodyText mb="45px">
        Before I go into problem-solving mode, I need to establish a clear idea
        of exactly which problem I will solve for the users and understand what
        I need to prioritize.
      </BodyText>
      <Flex flexDirection="column" alignItems={["center", "auto"]} width="100%">
        <Flex
          flexDirection={["column", "row"]}
          alignItems={["center", "auto"]}
          width="80%"
          mb="58px"
        >
          <Box
            width="130px"
            height="130px"
            minWidth="130px"
            maxWidth="130px"
            mr={["0px", "35px"]}
            mb={["35px", "0px"]}
          >
            <GatsbyImage alt="joey" image={joeyImage} />
          </Box>
          <Flex flexDirection="column" alignItems={["center", "flex-start"]}>
            <Text
              mb="15px"
              fontFamily="EB Garamond"
              fontSize="24px"
              fontWeight="400"
              lineHeight="28px"
              letterSpacing="0em"
            >
              Joey problem statement
            </Text>
            <Text
              fontSize="21px"
              fontWeight="300"
              lineHeight="25px"
              letterSpacing="0em"
              textAlign={["center", "left"]}
            >
              <i>
                <strong style={{ fontWeight: 400 }}>Joey</strong> is a{" "}
                <strong style={{ fontWeight: 400 }}>student teenager</strong>{" "}
                who needs{" "}
                <strong style={{ fontWeight: 400 }}>
                  some tips to enter the workforce and find a job
                </strong>{" "}
                because{" "}
                <strong style={{ fontWeight: 400 }}>
                  she wants to enter the world of work
                </strong>
                .
              </i>
            </Text>
          </Flex>
        </Flex>
        <Flex
          flexDirection={["column", "row"]}
          width="80%"
          alignItems={["center", "auto"]}
          alignSelf={["auto", "flex-end"]}
        >
          <Box
            width="130px"
            height="130px"
            minWidth="130px"
            maxWidth="130px"
            mr={["0px", "35px"]}
            mb={["35px", "0px"]}
          >
            <GatsbyImage alt="grace" image={graceImage} />
          </Box>
          <Flex flexDirection="column" alignItems={["center", "auto"]}>
            <Text
              mb="15px"
              fontFamily="EB Garamond"
              fontSize="24px"
              fontWeight="400"
              lineHeight="28px"
              letterSpacing="0em"
            >
              Grace problem statement
            </Text>
            <Text
              fontSize="21px"
              fontWeight="300"
              lineHeight="25px"
              letterSpacing="0em"
              textAlign={["center", "left"]}
            >
              <i>
                <strong style={{ fontWeight: 400 }}>Grace</strong> is an{" "}
                <strong style={{ fontWeight: 400 }}>IT developer</strong> who
                needs{" "}
                <strong style={{ fontWeight: 400 }}>
                  to change her job and get a better
                </strong>{" "}
                one because{" "}
                <strong style={{ fontWeight: 400 }}>
                  she's no longer happy with the one she has
                </strong>
                .
              </i>
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Title mt="50px" mb="20px">
        PROJECT GOALS
      </Title>
      <BodyText mb="48px">
        Before I could make any decisions on what kind of solutions I wanted to
        make, I needed to have a clear understanding of the goals I'm trying to
        achieve. These goals will help me follow the right direction to the
        final project.
      </BodyText>
      <Flex justifyContent="center" mb="50px">
        <Box width={["100%", "60%"]}>
          <GatsbyImage alt="goals" image={goalsImage} />
        </Box>
      </Flex>
    </Flex>
  );
};
