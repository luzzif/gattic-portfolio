import React from "react";

import { Box, Flex, Text } from "rebass";
import styled from "styled-components";

const SectionTitle = styled(Text).attrs({ mb: "12px" })`
  font-size: 21px;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0em;
`;

const SectionBody = styled(Text)`
  font-size: 21px;
  font-weight: 300;
  line-height: 25px;
  letter-spacing: 0em;
`;

export const JoboOverview = () => {
  return (
    <Flex
      mb="44px"
      flexDirection="column"
      backgroundColor="#f5f5f5"
      px={["28px", "53px"]}
      py={["24px", "63px"]}
      width="100%"
    >
      <Text
        fontFamily="EB Garamond"
        fontSize="35px"
        fontWeight="400"
        lineHeight="40px"
        letterSpacing="0em"
        marginBottom="36px"
      >
        Project Overview
      </Text>
      <Flex flexDirection={["column", "row"]} justifyContent="space-between">
        <Flex mr="77px" flexDirection="column">
          <Box mb="36px">
            <SectionTitle>THE PROBLEM</SectionTitle>
            <SectionBody>
              Most of young graduates doesn't know much about the world of work
              and how to enter it in the easiest and smoothest way and some
              adults with a career in their back can't find a job because of
              their age.
            </SectionBody>
          </Box>
          <Box mb="36px">
            <SectionTitle>THE GOAL</SectionTitle>
            <SectionBody>
              Design a responsive website to help people start enter the world
              of work or start a new career.
            </SectionBody>
          </Box>
          <Box mb={["36px", "0px"]}>
            <SectionTitle>TIME</SectionTitle>
            <SectionBody>1 month.</SectionBody>
          </Box>
        </Flex>
        <Flex flexDirection="column">
          <Box mb="36px">
            <SectionTitle>ROLE</SectionTitle>
            <SectionBody>
              UX/UI designer leading the app and responsive website design from
              conception to delivery.
            </SectionBody>
          </Box>
          <Box>
            <SectionTitle>RESPONSIBILITIES</SectionTitle>
            <SectionBody>
              Conducting interviews, paper and digital wireframing, low and high
              fidelity prototyping, conducting usability studies, iterating on
              designs, determining information architecture and responsive
              design.
            </SectionBody>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
