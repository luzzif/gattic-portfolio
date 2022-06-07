import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Box, Flex, Text } from "rebass";
import styled from "styled-components";
import background1 from "../../../images/lets-cake/background1.svg";
import background2 from "../../../images/lets-cake/background2.svg";

const FirstFlex = styled(Flex)`
  background: url(${background1}) no-repeat left top scroll;
  background-size: cover;
`;

const SecondFlex = styled(Flex)`
  background: url(${background2}) no-repeat left top scroll;
  background-size: cover;
`;

export const Header = () => {
  return (
    <>
      <FirstFlex width="100%" justifyContent="center">
        <Flex
          justifyContent="space-around"
          alignItems="center"
          pt="48px"
          pb="81px"
          width={["60%"]}
        >
          <Box mr="24px">
            <StaticImage
              alt="header-image"
              src="../../../images/lets-cake/header1.png"
              placeholder="none"
              quality={100}
            />
          </Box>
          <Flex
            flexDirection="column"
            style={{ zIndex: 10 }}
            maxWidth="424px"
            alignItems="flex-end"
          >
            <Box mb="26px">
              <StaticImage
                alt="header-logo"
                src="../../../images/lets-cake/logo.png"
                placeholder="none"
                quality={100}
              />
            </Box>
            <Text
              fontSize="30px"
              fontWeight="300"
              lineHeight="35px"
              letterSpacing="0em"
              textAlign="right"
            >
              Web design for ordering cakes online from a local bakery
            </Text>
          </Flex>
        </Flex>
      </FirstFlex>
      <SecondFlex width="100%" alignItems="center" flexDirection="column">
        <Flex
          justifyContent="space-around"
          alignItems="center"
          pt="50px"
          pb="40px"
          width={["60%"]}
        >
          <Flex flexDirection="column" style={{ zIndex: 10 }} maxWidth="513px">
            <Text
              mb="35px"
              fontFamily="EB Garamond"
              fontSize="35px"
              fontWeight="400"
              lineHeight="40px"
              letterSpacing="0em"
            >
              The Slice Bakery - Overview
            </Text>
            <Text
              fontSize="21px"
              fontWeight="300"
              lineHeight="30px"
              letterSpacing="0em"
              textAlign="justify"
              mb="16px"
            >
              <i>The Slice Bakery</i> is a local bakery based in Winnipeg. The
              typical user is between 18/40 years old and most users are busy
              workers or early career professionals. The Slice Bakery website is
              to help people who are busy or unable to bake to order cakes, pay
              online and skip the line on the spot.
            </Text>
            <Text
              fontSize="16px"
              fontStyle="italic"
              fontWeight="300"
              lineHeight="19px"
              letterSpacing="0em"
            >
              This project was conducted for educational purposes.
            </Text>
          </Flex>
          <Box mr="24px">
            <StaticImage
              alt="header-image"
              src="../../../images/lets-cake/header2.png"
              placeholder="none"
              quality={100}
            />
          </Box>
        </Flex>
        <Flex
          justifyContent="space-around"
          alignItems="center"
          pb="47px"
          width={["60%"]}
        >
          <Text
            fontSize="20px"
            fontWeight="300"
            lineHeight="23px"
            letterSpacing="0em"
          >
            <strong>Role</strong>: UX/UI designer from conception to delivery
          </Text>
          <Text
            fontSize="20px"
            fontWeight="300"
            lineHeight="23px"
            letterSpacing="0em"
          >
            <strong>Timeline</strong>: December 2021 - January 2022
          </Text>
        </Flex>
      </SecondFlex>
    </>
  );
};
