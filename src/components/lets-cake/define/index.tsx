import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Box, Flex, Text } from "rebass";
import styled from "styled-components";
import background5 from "../../../images/lets-cake/background5.svg";

const BackgroundFlex = styled(Flex)`
  background-image: url(${background5});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: top;
`;

export const Define = () => {
  return (
    <Flex flexDirection="column" alignItems="center" width="100%">
      <BackgroundFlex
        width="100%"
        alignItems="center"
        flexDirection="column"
        pt="50px"
      >
        <Flex
          flexDirection="column"
          alignItems="center"
          pt="41px"
          pb="18px"
          width={["60%"]}
        >
          <Flex>
            <Flex flexDirection="column" mr="40px">
              <Text
                fontFamily="Bowlby One"
                fontSize="50px"
                fontWeight="400"
                lineHeight="78px"
                letterSpacing="0em"
                color="#E7B1B1"
              >
                Define
              </Text>
              <Text
                mb="60px"
                maxWidth="510px"
                fontSize="21px"
                fontWeight="300"
                lineHeight="30px"
                letterSpacing="0em"
                textAlign="left"
              >
                <p>
                  Based on the conversations with the users, I defined the
                  target audience and came up with 2 personas.
                </p>
                <p>
                  Research and user interviews are key activities to understand
                  the user because the wrong target audience will lead your
                  project to failure.
                </p>
              </Text>
              <StaticImage
                alt="persona-1"
                src="../../../images/lets-cake/persona-2.png"
                width={600}
                placeholder="blurred"
                quality={100}
              />
            </Flex>
            <Box>
              <StaticImage
                alt="persona-2"
                src="../../../images/lets-cake/persona-1.png"
                width={600}
                placeholder="blurred"
                quality={100}
              />
            </Box>
          </Flex>
        </Flex>
      </BackgroundFlex>
    </Flex>
  );
};
