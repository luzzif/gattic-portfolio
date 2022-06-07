import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Box, Flex, Text } from "rebass";
import { SectionTitle } from "../section-title";

export const HiFiWireframes = () => {
  return (
    <Flex
      width="100%"
      flexDirection="column"
      alignItems="center"
      backgroundColor="#F5DDDE"
    >
      <Box pt="40px">
        <SectionTitle color="#F1D0D0" backgroundColor="#FFF">
          Design
        </SectionTitle>
      </Box>
      <Box width="100%">
        <StaticImage
          alt="mockups"
          src="../../../images/lets-cake/background12.png"
          quality={100}
          placeholder="none"
          layout="fullWidth"
          objectFit="fill"
        />
      </Box>
    </Flex>
  );
};
