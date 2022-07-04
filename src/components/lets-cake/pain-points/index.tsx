import { StaticImage } from "gatsby-plugin-image";
import React, { ReactNode } from "react";
import { Box, Flex, Text } from "rebass";
import styled from "styled-components";
import background4 from "../../../images/lets-cake/background4.svg";
import { SectionTitle } from "../section-title";

const BackgroundFlex = styled(Flex)`
  background-image: url(${background4});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center 340%;
`;

const CircleBox = styled(Box)`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface NumberWithTextProps {
  number: number;
  title: string;
  description: string;
}

const NumberWithText = ({
  number,
  title,
  description,
}: NumberWithTextProps) => {
  return (
    <Flex flexDirection="column" alignItems="center" maxWidth="224px">
      <CircleBox mb="40px">
        <Text
          fontFamily="Bowlby One"
          fontSize="35px"
          fontWeight="400"
          lineHeight="30px"
          letterSpacing="0em"
          textAlign="center"
          color="#F5DDDE"
        >
          {number}
        </Text>
      </CircleBox>
      <Text
        fontFamily="Bowlby One"
        fontSize="30px"
        fontWeight="400"
        lineHeight="30px"
        letterSpacing="0em"
        textAlign="center"
        mb="14px"
        color="#fff"
      >
        {title}
      </Text>
      <Text
        fontSize="21px"
        fontWeight="700"
        lineHeight="20px"
        letterSpacing="0em"
        textAlign="center"
        color="#fff"
      >
        {description}
      </Text>
    </Flex>
  );
};

interface ImageWithTextProps {
  image: ReactNode;
  text: string;
}

const ImageWithText = ({ image, text }: ImageWithTextProps) => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Box mb="40px">{image}</Box>
      <Text
        fontSize="21px"
        fontWeight="600"
        lineHeight="30px"
        letterSpacing="0em"
        textAlign="center"
        maxWidth="253px"
      >
        {text}
      </Text>
    </Flex>
  );
};

export const PainPoints = () => {
  return (
    <Flex flexDirection="column" alignItems="center" width="100%">
      <BackgroundFlex width="100%" alignItems="center" flexDirection="column">
        <Flex
          justifyContent="center"
          alignItems="center"
          width="100%"
          backgroundColor="#F5DDDE"
          pt="41px"
          pb="41px"
        >
          <SectionTitle color="#E9D1D9" backgroundColor="#FCFCFC">
            Pain points
          </SectionTitle>
        </Flex>
        <Text
          fontFamily="Raleway"
          fontSize="21px"
          fontWeight="300"
          lineHeight="30px"
          letterSpacing="0em"
          px={["24px", "24px", "0px"]}
          textAlign={["justify", "justify", "left"]}
        >
          The Slice Bakery website will improve the overall customer experience,
          <strong>turning pain points into strengths</strong>.
        </Text>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          pt="41px"
          pb="18px"
          flexDirection={["column", "column", "row"]}
          width={["100%", "90%", "50%"]}
        >
          <Flex flexDirection="column" alignItems="center" pt="20px" pb="40px">
            <Box>
              <NumberWithText
                number={1}
                title="Lifestyle"
                description="Don't have the time to wait on the spot"
              />
            </Box>
            <Box>
              <StaticImage
                height={168.55}
                src="../../../images/lets-cake/arrow.png"
                alt="arrow"
              />
            </Box>
            <Box>
              <ImageWithText
                image={
                  <StaticImage
                    height={252.06}
                    placeholder="none"
                    quality={100}
                    alt="1"
                    src="../../../images/lets-cake/pain-points-1.png"
                  />
                }
                text='Save time and go directly to "Mobile Order Pick Up"'
              />
            </Box>
          </Flex>
          <Flex flexDirection="column" alignItems="center" pt="20px" pb="40px">
            <Box>
              <NumberWithText
                number={2}
                title="Experience"
                description="Small buttons and confusing checkout"
              />
            </Box>
            <Box>
              <StaticImage
                height={168.55}
                src="../../../images/lets-cake/arrow.png"
                alt="arrow"
              />
            </Box>
            <Box>
              <ImageWithText
                image={
                  <StaticImage
                    height={252.06}
                    placeholder="none"
                    quality={100}
                    alt="2"
                    src="../../../images/lets-cake/pain-points-2.png"
                  />
                }
                text="Smooth online purchase and clean design"
              />
            </Box>
          </Flex>
          <Flex flexDirection="column" alignItems="center" pt="20px" pb="40px">
            <Box>
              <NumberWithText
                number={3}
                title="Interaction"
                description="Not to be able to pay in advance"
              />
            </Box>
            <Box>
              <StaticImage
                height={168.55}
                src="../../../images/lets-cake/arrow.png"
                alt="arrow"
              />
            </Box>
            <Box>
              <ImageWithText
                image={
                  <StaticImage
                    height={252.06}
                    placeholder="none"
                    quality={100}
                    alt="3"
                    src="../../../images/lets-cake/pain-points-3.png"
                  />
                }
                text="Pay in advance during the checkout process"
              />
            </Box>
          </Flex>
        </Flex>
      </BackgroundFlex>
    </Flex>
  );
};
