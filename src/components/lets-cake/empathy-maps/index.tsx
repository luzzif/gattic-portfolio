import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Box, Flex, Text } from "rebass";
import styled from "styled-components";
import background6 from "../../../images/lets-cake/background6.svg";
import { SectionTitle } from "../section-title";

const BackgroundFlex = styled(Flex)`
  background-image: url(${background6});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: top;
`;

export const EmpathyMaps = () => {
  return (
    <Flex flexDirection="column" alignItems="center" width="100%">
      <BackgroundFlex width="100%" alignItems="center" flexDirection="column">
        <Box pt="22px" pb="36px">
          <SectionTitle color="#FDFDFE" backgroundColor="#E9D1D9">
            Empathy maps
          </SectionTitle>
        </Box>
        <Text
          mb="40px"
          maxWidth={["100%", "100%", "50%"]}
          px={["24px", "24px", "16px"]}
          fontFamily="Raleway"
          fontSize="21px"
          fontWeight="300"
          lineHeight="30px"
          letterSpacing="0em"
          textAlign={["justify", "justify", "center"]}
        >
          To deeply emphatize with users I created an{" "}
          <strong>empathy map</strong>, a visualization tool that allows me to
          understand the behavior and attitude of the users. It simply helps me
          paint a <strong>picture of the ideal users</strong> and understand
          their <strong>needs and desires</strong>.
        </Text>
        <Flex
          px={["24px", "24px", "0px"]}
          flexDirection="column"
          mb="56px"
          width={["100%", "100%", "50%"]}
        >
          <Box alignSelf="flex-end" mb="20px">
            <StaticImage
              alt="empathy-map-1"
              src="../../../images/lets-cake/empathy-map-1.png"
              placeholder="blurred"
              quality={100}
            />
          </Box>
          <Box>
            <StaticImage
              alt="empathy-map-2"
              src="../../../images/lets-cake/empathy-map-2.png"
              placeholder="blurred"
              quality={100}
            />
          </Box>
        </Flex>
      </BackgroundFlex>
    </Flex>
  );
};
