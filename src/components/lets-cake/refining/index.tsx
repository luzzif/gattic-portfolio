import { StaticImage } from "gatsby-plugin-image";
import React, { ReactNode } from "react";
import { Box, Flex, Text } from "rebass";
import styled from "styled-components";
import { SectionTitle } from "../section-title";

const Circle = styled.div<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  background-color: #e6c8d2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface CircleWithNumberProps {
  size: number;
  number: number;
  className?: any;
}

const CircleWithNumber = ({
  size,
  number,
  className,
}: CircleWithNumberProps) => {
  return (
    <Circle size={size} className={className}>
      <Text
        font-family="Bowlby One"
        fontSize="23px"
        fontWeight="400"
        lineHeight="36px"
        letterSpacing="0em"
        color="#fff"
      >
        {number}
      </Text>
    </Circle>
  );
};

interface FindingCardProps {
  children: ReactNode;
  number: number;
}

const Root = styled(Flex)`
  position: relative;
  background-color: #fff;
  box-shadow: 16px 16px 20px 5px rgba(241, 208, 208, 0.5);
  border-radius: 30px;
  padding: 40px 14px;
`;

const AbsoluteCircle = styled(CircleWithNumber)`
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
`;

const FindingCard = ({ children, number }: FindingCardProps) => {
  return (
    <Root mt="40px">
      <AbsoluteCircle number={number} size={60} />
      <Text
        fontFamily="Raleway"
        fontSize="18px"
        fontWeight="300"
        lineHeight="30px"
        letterSpacing="-0.011em"
        textAlign="center"
      >
        {children}
      </Text>
    </Root>
  );
};

export const Refining = () => {
  return (
    <Flex flexDirection="column" alignItems="center" width="100%">
      <Flex flexDirection="column" alignItems="center" mb="40px" maxWidth="50%">
        <Flex flexDirection="column" width={["80%"]} mb="40px" mt="34px">
          <Box alignSelf="flex-start" mb="16px" width="fit-content">
            <SectionTitle color="#FFF" backgroundColor="#EBD7DE">
              Refining the design &
            </SectionTitle>
          </Box>
          <Box alignSelf="flex-end" width="fit-content">
            <SectionTitle color="#FFF" backgroundColor="#EBD7DE">
              ACCESSIBILITY CONSIDERATIONS
            </SectionTitle>
          </Box>
        </Flex>
        <Flex justifyContent="space-between" mb="50px">
          <Box mr="60px">
            <FindingCard number={1}>
              Headings with different sized text for clear visual hierachy{" "}
            </FindingCard>
          </Box>
          <Box>
            <FindingCard number={2}>
              Detailed imagery to help all users better understand the design{" "}
            </FindingCard>
          </Box>
        </Flex>
        <Text
          fontFamily="Bowlby One"
          fontSize="50px"
          fontWeight="400"
          lineHeight="78px"
          letterSpacing="0em"
          color="#E7B1B1"
          mb="15px"
          mt="54px"
        >
          Next steps
        </Text>
        <Flex justifyContent="space-between" alignItems="center" width="100%">
          <Flex alignItems="center" mr="12px">
            <Box minWidth="auto" mr="13px">
              <CircleWithNumber size={40} number={1} />
            </Box>
            <Text
              fontFamily="Raleway"
              fontSize="18px"
              fontWeight="300"
              lineHeight="30px"
            >
              Conduct follow-up usability testing on the new website
            </Text>
          </Flex>
          <Box mr="12px">
            <StaticImage
              alt="arrow-1"
              src="../../../images/lets-cake/arrow.svg"
              placeholder="blurred"
              width={60}
              quality={100}
            />
          </Box>
          <Flex alignItems="center" mr="12px">
            <Box minWidth="auto" mr="13px">
              <CircleWithNumber size={40} number={2} />
            </Box>
            <Text
              fontFamily="Raleway"
              fontSize="18px"
              fontWeight="300"
              lineHeight="30px"
            >
              Identify any additional areas of need and ideate on new features
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
