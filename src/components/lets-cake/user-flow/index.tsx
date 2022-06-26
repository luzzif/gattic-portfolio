import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Box, Flex, Text } from "rebass";
import styled from "styled-components";
import background8 from "../../../images/lets-cake/background8.svg";
import { SectionTitle } from "../section-title";

const BackgroundFlex = styled(Flex)`
  background-image: url(${background8});
  background-repeat: no-repeat;
  background-size: 110%;
  background-attachment: scroll;
  background-position: center -55%;
`;

export const UserFlow = () => {
  return (
    <Flex width="100%" flexDirection="column" alignItems="center" mb="50px">
      <BackgroundFlex
        flexDirection="column"
        alignItems="center"
        width="100%"
        px={["24px", "24px", "0px"]}
      >
        <Box pt="61px" pb="36px">
          <SectionTitle color="#F1D0D0" backgroundColor="#FDFDFE">
            User flow
          </SectionTitle>
        </Box>
        <Text
          mb={["24px", "24px", "120px"]}
          fontFamily="Raleway"
          fontSize="21px"
          fontWeight="300"
          lineHeight="30px"
          letterSpacing="0em"
          maxWidth={["100%", "90%", "50%"]}
          textAlign={["justify", "justify", "left"]}
        >
          I then created the <strong>user flow</strong>, a visual representation
          of the path that the user is gonna follow to complete a task. It
          starts with an <strong>entry point</strong>, in this case the homepage
          of the website, and ends with a <strong>final action</strong>, for
          this project with a product purchase.
        </Text>
        <Box px={["24px", "24px", "0px"]}>
          <StaticImage
            alt="sitemap"
            src="../../../images/lets-cake/user-flow.png"
            placeholder="blurred"
            quality={100}
          />
        </Box>
      </BackgroundFlex>
    </Flex>
  );
};
