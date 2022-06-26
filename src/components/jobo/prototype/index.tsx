import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { Box, Flex, Text } from "rebass";
import styled from "styled-components";
import { Title } from "../title";

const BodyText = styled(Text)`
  font-size: 21px;
  line-height: 30px;
  font-weight: 300;
  letter-spacing: 0em;
`;

/* const Button = styled.a`
  height: 67px;
  width: 285px;
  border-radius: 30px;
  border: 1.5px solid #6998ff;
  box-shadow: 0px 6px 20px 0px rgba(105, 152, 255, 0.2);
  border-radius: 30px;
  color: #6998ff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Raleway;
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  margin-bottom: 31px;
  text-decoration: none;
`; */

interface PrototypeProps {
  wireframesImage: any;
}

export const Prototype = ({ wireframesImage }: PrototypeProps) => {
  return (
    <Flex flexDirection="column" width="100%">
      <Title mt="50px" mb="20px">
        WIREFRAMES
      </Title>
      <BodyText mb="40px">
        <p>
          Collecting everything I learned and discovered during this process, I
          started making decisions on how to organize the contents of the Jobo
          website according to the project goals I want to achieve.
        </p>
        <p>
          After ideating and drafting some <strong>paper wireframes</strong>, I
          created the initial designs for the Jobo app. In this design I
          prioritized:
          <ul>
            <li>
              an easy <strong>access to app features</strong> (1)
            </li>
            <li>
              a <strong>simple job research bar</strong> (2)
            </li>
            <li>
              an <strong>easy access to job offers</strong> based on the resume
              of the user (3)
            </li>
          </ul>
        </p>
        <p>
          I created <strong>desktop</strong> and <strong>mobile</strong>{" "}
          versions to make sure that the design is responsive and effective
          across the different device screens that users would be accessing the
          website on.
        </p>
      </BodyText>
      <Box mb="83px">
        <GatsbyImage alt="wireframes" image={wireframesImage} />
      </Box>
      {/* <Title mb="20px">Prototype</Title>
      <Text
        fontSize="21px"
        fontWeight="300"
        lineHeight="25px"
        letterSpacing="0em"
        mb="27px"
      >
        In the digital wireframes I've just added the essential information to
        allow users to navigate between pages and complete tasks that I will
        present to them during the <strong>usability tests</strong>.
      </Text>
      <Button href="" rel="noopener noreferrer" target="_blank">
        View Lo-Fi Prototype
      </Button> */}
    </Flex>
  );
};
