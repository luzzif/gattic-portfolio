import { StaticImage } from "gatsby-plugin-image";
import React, { ReactNode } from "react";
import { Box, Flex, Text } from "rebass";
import styled from "styled-components";
import background9 from "../../../images/lets-cake/background9.svg";
import { SectionTitle } from "../section-title";

const BackgroundFlex = styled(Flex)`
  background-image: url(${background9});
  background-repeat: no-repeat;
  background-size: contain;
  background-attachment: scroll;
  background-position: center 10%;
`;

interface ImageWithTextProps {
  image: ReactNode;
  text: string;
}

const ImageWithText = ({ image, text }: ImageWithTextProps) => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Box mb="40px">{image}</Box>
      <Text
        fontFamily="Raleway"
        fontSize="21px"
        fontWeight="600"
        lineHeight="25px"
        letterSpacing="0em"
        textAlign="center"
      >
        {text}
      </Text>
    </Flex>
  );
};

export const CardSorting = () => {
  return (
    <Flex width="100%" flexDirection="column" alignItems="center">
      <BackgroundFlex
        flexDirection="column"
        alignItems="center"
        width="100%"
        pt="100px"
        mt="-100px"
      >
        <Box pb="36px">
          <SectionTitle color="#FFF" backgroundColor="#F1D0D0">
            Card sorting
          </SectionTitle>
        </Box>
        <Text
          fontFamily="Raleway"
          fontSize="21px"
          fontWeight="300"
          lineHeight="30px"
          letterSpacing="0em"
          maxWidth={["100%", "90%", "50%"]}
          mb="40px"
          px={["24px", "24px", "0px"]}
          textAlign={["justify", "justify", "left"]}
        >
          As the final step in my Ideate phase, I used the card sorting to
          understand <strong>how users think about my content</strong>. Why did
          I choose card sorting?
        </Text>
        <Flex
          justifyContent="space-around"
          width={["100%", "90%", "50%"]}
          mb="108px"
          px={["24px", "24px", "0px"]}
          flexDirection={["column", "column", "row"]}
        >
          <Flex
            width={["100%", "90%", "50%"]}
            justifyContent={["space-around", "space-around", "space-around"]}
            mb={["32px", "32px", "0px"]}
          >
            <Box width={["50%", "50%", "auto"]}>
              <ImageWithText
                image={
                  <StaticImage
                    alt="sitemap"
                    src="../../../images/lets-cake/click.png"
                    placeholder="none"
                    quality={100}
                    width={80}
                  />
                }
                text="IT'S SIMPLE"
              />
            </Box>
            <Box width={["50%", "50%", "auto"]}>
              <ImageWithText
                image={
                  <StaticImage
                    alt="sitemap"
                    src="../../../images/lets-cake/chronometer.png"
                    placeholder="none"
                    quality={100}
                    width={80}
                  />
                }
                text="IT'S QUICK"
              />
            </Box>
          </Flex>
          <Flex
            width={["100%", "90%", "50%"]}
            justifyContent={["space-around", "space-around", "space-around"]}
          >
            <Box width={["50%", "50%", "auto"]}>
              <ImageWithText
                image={
                  <StaticImage
                    alt="sitemap"
                    src="../../../images/lets-cake/lightbulb.png"
                    placeholder="none"
                    quality={100}
                    width={80}
                  />
                }
                text="IT'S INSIGHTFUL"
              />
            </Box>
            <Box width={["50%", "50%", "auto"]}>
              <ImageWithText
                image={
                  <StaticImage
                    alt="sitemap"
                    src="../../../images/lets-cake/save-money.png"
                    placeholder="none"
                    quality={100}
                    width={80}
                  />
                }
                text="IT'S CHEAP"
              />
            </Box>
          </Flex>
        </Flex>
        <Flex
          px={["24px", "24px", "0px"]}
          flexDirection={["column", "column", "row"]}
          alignItems={["center", "center", "flex-start"]}
        >
          <Box mb={["24px", "24px", "0px"]}>
            <StaticImage
              alt="home"
              src="../../../images/lets-cake/home.png"
              placeholder="none"
              quality={100}
              width={220}
            />
          </Box>
          <Box mb={["24px", "24px", "0px"]}>
            <StaticImage
              alt="shop"
              src="../../../images/lets-cake/shop.png"
              placeholder="none"
              quality={100}
              width={220}
            />
          </Box>
          <Box>
            <StaticImage
              alt="cart"
              src="../../../images/lets-cake/cart.png"
              placeholder="none"
              quality={100}
              width={220}
            />
          </Box>
        </Flex>
      </BackgroundFlex>
    </Flex>
  );
};
