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

interface IdeateProps {
  brainstormingImage: any;
  ujmImage: any;
  sitemapImage: any;
}

export const Ideate = ({
  brainstormingImage,
  ujmImage,
  sitemapImage,
}: IdeateProps) => {
  return (
    <Flex flexDirection="column" width="100%">
      <Title mt="50px" mb="20px">
        BRAINSTORMING
      </Title>
      <BodyText mb="48px">
        After a deep understanding of the user, it’s now time to brainstorming
        some protentional solutions. At this stage, I put the focus on quantity
        of ideas and not on quality.
      </BodyText>
      <GatsbyImage alt="brainstorming" image={brainstormingImage} />
      <Title mt="50px" mb="20px">
        USER JOURNEY MAPS
      </Title>
      <BodyText mb="48px">
        I put together journey maps to understand how Joey and Grace would use
        this new platform. These maps represent the future lifecycle of the
        product.
      </BodyText>
      <GatsbyImage alt="user journey map" image={ujmImage} />
      <Title mt="50px" mb="20px">
        SITEMAPS
      </Title>
      <BodyText mb="48px">
        After prioritizing the information needed to enter the website, I
        created a sitemap. It will help me to ensure a cohesive and consistent
        experience across devices and avoid designing a more complicated site
        than necessary.
      </BodyText>
      <GatsbyImage
        alt="sitemap"
        style={{ marginBottom: 50 }}
        image={sitemapImage}
      />
    </Flex>
  );
};
