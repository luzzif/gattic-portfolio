import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Box, Flex, Text } from "rebass";
import styled from "styled-components";
import { SectionTitle } from "../section-title";
import background3 from "../../../images/lets-cake/background3.svg";

const ThirdFlex = styled(Flex)`
  background-image: url(${background3});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: 35% 0%;
`;

const FirstPieChart = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: conic-gradient(#e7b1b1 0% 70%, #bb8898 70%);
`;

const SecondPieChart = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: conic-gradient(#e7b1b1 0% 40%, #bb8898 40%);
`;

export const ProblemStatement = () => {
  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        width="100%"
        backgroundColor="#e9d1d9"
        pt="53px"
        pb={["36px", "48px"]}
        px={["24px", "0px"]}
      >
        <SectionTitle color="#E9D1D9" backgroundColor="#FCFCFC">
          Problem statement
        </SectionTitle>
      </Flex>
      <ThirdFlex
        width="100%"
        alignItems="center"
        flexDirection="column"
        pb="200px"
        mb="-200px"
      >
        <Flex
          justifyContent="space-around"
          alignItems="center"
          pt={["0px", "20px"]}
          pb="40px"
        >
          <Text
            width={["100%", "50%"]}
            fontSize="25px"
            fontWeight="700"
            lineHeight="30px"
            letterSpacing="0em"
            textAlign="justify"
            alignSelf="center"
            color="#FCFCFC"
            style={{ textTransform: "uppercase" }}
            px={["24px", "0px"]}
          >
            Most local bakeries IN WINNIPEG don't have an online booking process
            and the few places that have this option don't accept online
            payments. The SLICE BAKERY WANTS TO STAND OUT AND EVALUATE ITS
            SERVICE AND LET CUSTOMERS ORDER ONLINE THEIR FAVORITES CAKES AND PAY
            IN ADVANCE TO AVOID annoying queue.
          </Text>
        </Flex>
      </ThirdFlex>
      <Flex flexDirection="column" alignItems="center" mb="62px">
        <Flex
          width={["100%", "50%"]}
          px={["24px", "0px"]}
          flexDirection="column"
        >
          <Text
            fontFamily="Bowlby One"
            fontSize="50px"
            fontWeight="400"
            lineHeight="78px"
            letterSpacing="0em"
            textAlign={["center", "left"]}
            mb="15px"
            mt="108px"
            color="#E9D1D9"
          >
            Empathize
          </Text>
          <Text
            fontSize="21px"
            fontWeight="300"
            lineHeight="30px"
            letterSpacing="0em"
            textAlign={["justify", "left"]}
            width={["100%", "60%"]}
            mb={["24px", "0px"]}
          >
            <p>
              I conducted user interviews, which I then turned into empathy maps
              to better understand the target user and their needs. A primary
              user group identified through the research consisted of busy
              working adults who want to relax with their favorite dessert after
              a long day at work.
            </p>
            <p>
              The research also revealed that another group of users are teens
              who love sweets but bad at making them.
            </p>
          </Text>
          <Flex
            width="100%"
            alignItems={["center", "flex-end"]}
            flexDirection={["column", "row"]}
            mt={["0px", "-200px"]}
            justifyContent="space-around"
          >
            <Flex flexDirection="column" alignItems="center">
              <Box mb="35px">
                <FirstPieChart />
              </Box>
              <Text
                fontSize="21px"
                fontWeight="600"
                lineHeight="25px"
                letterSpacing="0.01em"
                textAlign="center"
                maxWidth="238px"
                minHeight="75px"
              >
                70% are women
                <br />
              </Text>
            </Flex>
            <Flex flexDirection="column" alignItems="center">
              <Box mb="35px">
                <SecondPieChart />
              </Box>
              <Text
                fontSize="21px"
                fontWeight="600"
                lineHeight="25px"
                letterSpacing="0.01em"
                textAlign="center"
                maxWidth="238px"
                minHeight="75px"
              >
                40% aged 25-35 years old
              </Text>
            </Flex>
            <Flex flexDirection="column" alignItems="center">
              <Box mb="35px">
                <StaticImage
                  src="../../../images/lets-cake/chart.png"
                  objectFit="contain"
                  placeholder="none"
                  alt="chart"
                  quality={100}
                />
              </Box>
              <Text
                fontSize="21px"
                fontWeight="600"
                lineHeight="25px"
                letterSpacing="0.01em"
                textAlign="center"
                maxWidth="238px"
                minHeight="75px"
              >
                45% order from bakery at least once per month
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
