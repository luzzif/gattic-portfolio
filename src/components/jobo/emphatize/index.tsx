import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { Box, Flex, Text } from "rebass";
import styled from "styled-components";
import { Title } from "../title";

const OrderedListPointText = styled(Text)`
  font-size: 25px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0em;
`;

const BodyText = styled(Text)`
  font-size: 21px;
  line-height: 30px;
  font-weight: 300;
  letter-spacing: 0em;
`;

const Circle = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6998ff;
  font-size: 35px;
  font-weight: 900;
  color: #fff;
`;

interface EmphatizeProps {
  personasImage: any;
  empathyMapImage: any;
}

export const Emphatize = ({
  personasImage,
  empathyMapImage,
}: EmphatizeProps) => {
  return (
    <Flex flexDirection="column" width="100%">
      <Text
        mt="50px"
        fontFamily="Raleway"
        fontSize="21px"
        fontWeight="300"
        lineHeight="30px"
        letterSpacing="0em"
      >
        At this stage, my priority is to understand the target user, their fears
        and needs. I conducted user research and set up my research goals. At
        this point I was able to get a clear picture of who Jobo's target users
        are and created personas that would accurately represent them.
      </Text>
      <Title mt="50px" mb="20px">
        RESEARCH GOALS
      </Title>
      <OrderedListPointText mb="26px">
        1. Understand the target user
      </OrderedListPointText>
      <BodyText mb="40px">
        After the user interviews, I identified 2 user groups and I came up with
        2 personas who best describe the demographics of Jobo users. The primary
        user group consisted of young graduates who want to enter the world of
        work and have some advice to do it in the better way. The other user
        group consisted of adults who want change their career but they can't
        find the right place to start the new journey. These personas will allow
        me to remember the people that I am designing the product for, their
        needs and want, as well as their pain points.
      </BodyText>
      <GatsbyImage alt="personas" image={personasImage} />
      <OrderedListPointText mb="26px" mt="44px">
        2. Understand the users' feeling
      </OrderedListPointText>
      <BodyText mb="40px">
        After defined Jobo's user groups, I came up with empathy maps that will
        allow me to put myself in someone else's shoes and understand users
        better.
      </BodyText>
      <GatsbyImage alt="empathy" image={empathyMapImage} />
      <OrderedListPointText mb="47px" mt="44px">
        3. Users' pain points
      </OrderedListPointText>
      <Flex
        flexDirection={["column", "row"]}
        width="100%"
        justifyContent="space-around"
        mb="50px"
      >
        <Flex flexDirection="column" alignItems="center" mb={["40px", "0px"]}>
          <Box mb="35px">
            <Circle>1</Circle>
          </Box>
          <Text
            fontSize="25px"
            fontWeight="800"
            lineHeight="30px"
            letterSpacing="0em"
            color="#6998FF"
            mb="25px"
          >
            EXPERIENCE
          </Text>
          <Text
            maxWidth="256px"
            fontSize="18px"
            fontWeight="300"
            lineHeight="25px"
            letterSpacing="0em"
            textAlign="center"
          >
            Job offers not related to the specific user
          </Text>
        </Flex>
        <Flex flexDirection="column" alignItems="center" mb={["40px", "0px"]}>
          <Box mb="35px">
            <Circle>2</Circle>
          </Box>
          <Text
            fontSize="25px"
            fontWeight="800"
            lineHeight="30px"
            letterSpacing="0em"
            color="#6998FF"
            mb="25px"
          >
            INTERACTION
          </Text>
          <Text
            maxWidth="256px"
            fontSize="18px"
            fontWeight="300"
            lineHeight="25px"
            letterSpacing="0em"
            textAlign="center"
          >
            Not being able to edit the resume while submitting a specific jobt
          </Text>
        </Flex>
        <Flex flexDirection="column" alignItems="center" mb={["40px", "0px"]}>
          <Box mb="35px">
            <Circle>3</Circle>
          </Box>
          <Text
            fontSize="25px"
            fontWeight="800"
            lineHeight="30px"
            letterSpacing="0em"
            color="#6998FF"
            mb="25px"
          >
            EMOTIONAL
          </Text>
          <Text
            maxWidth="256px"
            fontSize="18px"
            fontWeight="300"
            lineHeight="25px"
            letterSpacing="0em"
            textAlign="center"
          >
            Don't have an "advice section" to help users starting a new career
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
