import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Box, Flex } from "rebass";
import { SectionTitle } from "../section-title";
import background12 from "../../../images/lets-cake/background12.png";
import styled from "styled-components";

const BackgroundFlex = styled(Flex)`
  width: 100%;
  height: 2000px;
  background-image: url(${background12});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: top;
`;

export const HiFiWireframes = () => {
  return (
    <BackgroundFlex
      width="100%"
      flexDirection="column"
      alignItems="center"
      backgroundColor="#F5DDDE"
    >
      <Box pt="40px">
        <SectionTitle color="#F1D0D0" backgroundColor="#FFF">
          HI-FI WIREFRAMES
        </SectionTitle>
      </Box>
      {/* <Box width="100%">
        <StaticImage
          alt="mockups"
          src="../../../images/lets-cake/background12.png"
          quality={100}
          placeholder="none"
          layout="fullWidth"
          objectFit="fill"
        />
      </Box> */}
    </BackgroundFlex>
  );
};
