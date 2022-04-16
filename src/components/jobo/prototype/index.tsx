import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { Flex, Text } from "rebass";
import styled from "styled-components";
import { Title } from "../title";

const BodyText = styled(Text)`
  font-size: 21px;
  line-height: 30px;
  font-weight: 300;
  letter-spacing: 0em;
`;

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
          After ideating and drafting some paper wireframes, I created the
          initial designs for the Jobo app. In this design I prioritized:
          <ul>
            <li>an easy access to app features (1)</li>
            <li>a simple job research bar (2)</li>
            <li>
              an easy access to job offers based on the resume of the user (3)
            </li>
          </ul>
        </p>
      </BodyText>
      <GatsbyImage
        alt="wireframes"
        style={{ marginBottom: 50 }}
        image={wireframesImage}
      />
    </Flex>
  );
};
