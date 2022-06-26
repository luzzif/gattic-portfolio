import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Box, Flex, Text } from "rebass";
import styled from "styled-components";
import background7 from "../../../images/lets-cake/background7.svg";

const BackgroundFlex = styled(Flex)`
  background-image: url(${background7});
  background-repeat: no-repeat;
  background-size: contain;
  background-attachment: scroll;
  background-position: top;
`;

export const Ideate = () => {
  return (
    <Flex flexDirection="column" alignItems="center" width="100%">
      <BackgroundFlex
        width="100%"
        alignItems="center"
        flexDirection="column"
        pt={["0px", "0px", "22px"]}
        px={["24px", "24px", "0px"]}
      >
        <Flex
          flexDirection="column"
          mb="40px"
          maxWidth={["100%", "90%", "50%"]}
        >
          <Text
            fontFamily="Bowlby One"
            fontSize="50px"
            fontWeight="400"
            lineHeight="78px"
            letterSpacing="0em"
            color="#E7B1B1"
            mb="15px"
            mt="91px"
          >
            Ideate
          </Text>
          <Text
            fontFamily="Raleway"
            fontSize="21px"
            fontWeight="300"
            lineHeight="30px"
            letterSpacing="0em"
            textAlign={["justify", "justify", "left"]}
          >
            After found out who my targert audience is, I created a{" "}
            <strong>sitemap</strong> of the website. Knowing the bad experience
            with other bakeries website is a primary pain point for users, I
            used that knowledge to create an information architecture that would{" "}
            <strong>improve the overall website navigation</strong>. The
            structure I chose was designed to make things clear and easy.
          </Text>
        </Flex>
        <Box mb="20px" px={["24px", "24px", "0px"]}>
          <StaticImage
            alt="sitemap"
            src="../../../images/lets-cake/sitemap.png"
            placeholder="blurred"
            quality={100}
          />
        </Box>
      </BackgroundFlex>
    </Flex>
  );
};
