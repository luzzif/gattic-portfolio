import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Box, Flex, Text } from "rebass";
import styled from "styled-components";
import background10 from "../../../images/lets-cake/background10.png";

const BackgroundFlex = styled(Flex)`
  width: 100%;
  background-image: url(${background10});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center;
`;

export const Design = () => {
  return (
    <BackgroundFlex
      height={["3500px", "3500px", "2500px"]}
      mt="50px"
      pt={["36px", "36px", "67px"]}
      width="100%"
      flexDirection="column"
      alignItems="center"
      backgroundColor="#E9D1D9"
    >
      <Flex
        width={["100%", "90%", "60%"]}
        flexDirection="column"
        px={["24px", "24px", "0px"]}
      >
        <Text
          mb="48px"
          fontFamily="Bowlby One"
          fontSize="50px"
          fontWeight="400"
          lineHeight="78px"
          letterSpacing="0em"
          color="white"
        >
          Design
        </Text>
        <Text
          alignSelf={["flex-start", "flex-start", "flex-end"]}
          maxWidth={["100%", "100%", "90%"]}
          mb="22px"
          fontSize="21px"
          fontWeight="300"
          lineHeight="30px"
          letterSpacing="0em"
          textAlign={["justify", "justify", "right"]}
        >
          After sketched out paper wireframes for each screen in my app, I moved
          from paper wireframes to the digital wireframes. I decided to design
          my wireframes with a <strong>basic structure</strong> that I'll use to
          build upon.
        </Text>
        <Text
          alignSelf={["flex-start", "flex-start", "flex-end"]}
          maxWidth={["100%", "100%", "70%"]}
          mb="22px"
          fontSize="21px"
          fontWeight="300"
          lineHeight="30px"
          letterSpacing="0em"
          textAlign={["justify", "justify", "right"]}
        >
          For me it's important to start with the basic structure because{" "}
          <strong>
            it creates the main outline for the rest of the content
          </strong>{" "}
          I'm going to design later in the mockups.
        </Text>
        <Text
          alignSelf={["flex-start", "flex-start", "flex-end"]}
          maxWidth={["100%", "100%", "50%"]}
          mb="22px"
          fontSize="21px"
          fontWeight="300"
          lineHeight="30px"
          letterSpacing="0em"
          textAlign={["justify", "justify", "right"]}
        >
          I then created a <strong>low-fidelity prototype</strong>, connecting
          all of the screens involved in the primary user flow: adding an item
          to your cart and buying it.
        </Text>
      </Flex>
      {/* <Box width="100%" style={{ position: "relative", top: -100 }}>
        <StaticImage
          alt="mockups"
          src="../../../images/lets-cake/background10.png"
          quality={100}
          placeholder="none"
          layout="fullWidth"
          objectFit="fill"
        />
      </Box> */}
    </BackgroundFlex>
  );
};
