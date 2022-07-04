import { StaticImage } from "gatsby-plugin-image";
import React, { ReactNode } from "react";
import { Box, Flex, Text } from "rebass";
import styled from "styled-components";

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

export const Test = () => {
  return (
    <Flex flexDirection="column" alignItems="center" width="100%" pb="47px">
      <Flex
        flexDirection="column"
        mb="40px"
        maxWidth={["100%", "90%", "50%"]}
        px={["24px", "24px", "0px"]}
      >
        <Text
          fontFamily="Bowlby One"
          fontSize="50px"
          fontWeight="400"
          lineHeight="78px"
          letterSpacing="0em"
          color="#E7B1B1"
          mb="15px"
          mt={["24px", "24px", "54px"]}
        >
          Test
        </Text>
        <Text
          fontFamily="Raleway"
          fontSize="21px"
          fontWeight="300"
          lineHeight="30px"
          letterSpacing="0em"
          mb="40px"
        >
          Once created the prototype, I asked users to perform certain tasks.
          With the usability test I want to see{" "}
          <strong>how users interact with my design</strong>.
        </Text>
        <Text
          fontFamily="Raleway"
          fontSize="25px"
          fontWeight="600"
          lineHeight="29px"
          letterSpacing="0em"
          mb="35px"
        >
          Parameters
        </Text>
        <Flex
          justifyContent="space-between"
          flexDirection={["column", "column", "row"]}
        >
          <Flex flexDirection="column">
            <Flex alignItems="center" mb="40px">
              <Box mr="28px">
                <StaticImage
                  alt="calendar"
                  src="../../../images/lets-cake/calendar.svg"
                  placeholder="none"
                  width={30}
                  quality={100}
                />
              </Box>
              <Text
                fontFamily="Raleway"
                fontSize="21px"
                fontWeight="300"
                lineHeight="25px"
                letterSpacing="0em"
              >
                <strong>Study type</strong>: unmoderated usability study
              </Text>
            </Flex>
            <Flex alignItems="center" mb="40px">
              <Box mr="28px">
                <StaticImage
                  alt="spot"
                  src="../../../images/lets-cake/spot.svg"
                  placeholder="none"
                  width={30}
                  quality={100}
                />
              </Box>
              <Text
                fontFamily="Raleway"
                fontSize="21px"
                fontWeight="300"
                lineHeight="25px"
                letterSpacing="0em"
              >
                <strong>Location</strong>: Toronto (ON), remote
              </Text>
            </Flex>
          </Flex>
          <Flex flexDirection="column">
            <Flex alignItems="center" mb="40px">
              <Box mr="28px">
                <StaticImage
                  alt="people"
                  src="../../../images/lets-cake/people.svg"
                  placeholder="none"
                  width={30}
                  quality={100}
                />
              </Box>
              <Text
                fontFamily="Raleway"
                fontSize="21px"
                fontWeight="300"
                lineHeight="25px"
                letterSpacing="0em"
              >
                <strong>Participants</strong>: 5 participants
              </Text>
            </Flex>
            <Flex alignItems="center" mb="40px">
              <Box mr="28px">
                <StaticImage
                  alt="clock"
                  src="../../../images/lets-cake/clock.svg"
                  placeholder="none"
                  width={30}
                  quality={100}
                />
              </Box>
              <Text
                fontFamily="Raleway"
                fontSize="21px"
                fontWeight="300"
                lineHeight="25px"
                letterSpacing="0em"
              >
                <strong>Duration</strong>: 20/30 minutes
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Text
          fontFamily="Raleway"
          fontSize="25px"
          fontWeight="600"
          lineHeight="29px"
          letterSpacing="0em"
          mb="35px"
          mt={["32px", "32px", "55px"]}
        >
          Tasks
        </Text>
        <Flex
          flexDirection={["column", "column", "row"]}
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
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
              Go to "Cakes Category" and click on "Cheesecakes"
            </Text>
          </Flex>
          <Box display={["block", "block", "none"]} my="32px">
            <StaticImage
              alt="arrow-1"
              src="../../../images/lets-cake/arrow.svg"
              placeholder="none"
              width={60}
              quality={100}
              style={{ transform: "rotate(90deg)" }}
            />
          </Box>
          <Box display={["none", "none", "block"]} mr="12px">
            <StaticImage
              alt="arrow-1"
              src="../../../images/lets-cake/arrow.svg"
              placeholder="none"
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
              Select the cheesecake desired and put it into the cart
            </Text>
          </Flex>
          <Box display={["block", "block", "none"]} my="32px">
            <StaticImage
              alt="arrow-2"
              src="../../../images/lets-cake/arrow.svg"
              placeholder="none"
              width={60}
              quality={100}
              style={{ transform: "rotate(90deg)" }}
            />
          </Box>
          <Box display={["none", "none", "block"]} mr="12px">
            <StaticImage
              alt="arrow-2"
              src="../../../images/lets-cake/arrow.svg"
              placeholder="none"
              width={60}
              quality={100}
            />
          </Box>
          <Flex alignItems="center">
            <Box minWidth="auto" mr="13px">
              <CircleWithNumber size={40} number={3} />
            </Box>
            <Text
              fontFamily="Raleway"
              fontSize="18px"
              fontWeight="300"
              lineHeight="30px"
            >
              Go ahead and complete all the checkout process{" "}
            </Text>
          </Flex>
        </Flex>
        <Text
          fontFamily="Raleway"
          fontSize="25px"
          fontWeight="600"
          lineHeight="29px"
          letterSpacing="0em"
          mb="35px"
          mt="55px"
        >
          Findings
        </Text>
        <Flex
          justifyContent="space-between"
          alignItems={["center", "center", "flex-start"]}
          flexDirection={["column", "column", "row"]}
        >
          <Box mr={["0px", "0px", "60px"]} mb={["60px", "60px", "0px"]}>
            <FindingCard number={1}>
              5/5 participants wants a more visible “added to cart” notification
            </FindingCard>
          </Box>
          <Box mr={["0px", "0px", "60px"]} mb={["60px", "60px", "0px"]}>
            <FindingCard number={2}>
              3/5 participants wants the option for a schedule pickup
            </FindingCard>
          </Box>
          <FindingCard number={3}>
            4/5 participants wants a multiple choice of payment
          </FindingCard>
        </Flex>
      </Flex>
    </Flex>
  );
};
