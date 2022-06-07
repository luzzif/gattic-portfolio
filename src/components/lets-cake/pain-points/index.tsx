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
  background-position: center 60%;
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
          pt="53px"
          pb="48px"
        >
          <SectionTitle color="#E9D1D9" backgroundColor="#FCFCFC">
            Pain points
          </SectionTitle>
        </Flex>
        <Flex
          justifyContent="space-around"
          alignItems="center"
          pt="41px"
          pb="18px"
          width={["50%"]}
        >
          <NumberWithText
            number={1}
            title="Lifestyle"
            description="Don’t have the time to wait on the spot"
          />
          <NumberWithText
            number={1}
            title="Experience"
            description="Small buttons and confusing checkout"
          />
          <NumberWithText
            number={1}
            title="Interaction"
            description="Not to be able to pay in advance"
          />
        </Flex>
        <Flex
          justifyContent="space-around"
          alignItems="center"
          pt="20px"
          pb="40px"
          width={["50%"]}
        >
          <StaticImage
            height={168.55}
            src="../../../images/lets-cake/arrow.png"
            alt="arrow"
          />
          <StaticImage
            height={168.55}
            src="../../../images/lets-cake/arrow.png"
            alt="arrow"
          />
          <StaticImage
            height={168.55}
            src="../../../images/lets-cake/arrow.png"
            alt="arrow"
          />
        </Flex>
      </BackgroundFlex>
      <Flex
        justifyContent="space-around"
        alignItems="center"
        pt="20px"
        pb="40px"
        width={["50%"]}
      >
        <ImageWithText
          image={
            <StaticImage
              width={173.95}
              height={252.06}
              placeholder="none"
              quality={100}
              alt="1"
              src="../../../images/lets-cake/pain-points-1.png"
            />
          }
          text='Save time and go directly to "Mobile Order Pick Up"'
        />
        <ImageWithText
          image={
            <StaticImage
              width={173.95}
              height={252.06}
              placeholder="none"
              quality={100}
              alt="2"
              src="../../../images/lets-cake/pain-points-2.png"
            />
          }
          text="Smooth online purchase and clean design"
        />
        <ImageWithText
          image={
            <StaticImage
              width={173.95}
              height={252.06}
              placeholder="none"
              quality={100}
              alt="3"
              src="../../../images/lets-cake/pain-points-3.png"
            />
          }
          text="Pay in advance during the checkout process"
        />
      </Flex>
    </Flex>
  );
};
