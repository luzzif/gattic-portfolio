import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/layout";
import styled from "styled-components";
import { SocialIcon } from "../components/social-icon";
import { Work } from "../components/work";
import { StaticImage } from "gatsby-plugin-image";
import { Flex, Text } from "rebass";

const HeaderImage = styled.img`
  margin-bottom: 140px;
  width: 100%;
`;

const SummaryText = styled(Text)`
  width: 540px;
  font-size: 21px;
  font-style: normal;
  font-weight: 300;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: center;
`;

const FirstSocialIcon = styled(SocialIcon)`
  margin-bottom: 16px;
`;

const SpacedWork = styled(Work)`
  margin-bottom: 50px;
`;

interface IndexProps {
  data: any;
}

const Index = ({ data }: IndexProps) => {
  return (
    <Layout
      linkedinSvgUrl={data.linkedin.publicURL}
      emailSvgUrl={data.email.publicURL}
    >
      <HeaderImage src={data.header.publicURL} />
      <Flex
        marginBottom="120px"
        marginLeft="81px"
        width="656px"
        justifyContent="space-between"
      >
        <SummaryText>
          My strengths are empathy, the ability to understand what people feel,
          and team player. My previous experiences in customer service helped me
          better understand the needs and fears of customers.
        </SummaryText>
        <Flex flexDirection="column">
          <FirstSocialIcon imageUrl={data.linkedin.publicURL} />
          <SocialIcon imageUrl={data.email.publicURL} />
        </Flex>
      </Flex>
      <Flex
        width="100%"
        maxWidth="100%"
        flexDirection="column"
        alignItems="center"
      >
        <SpacedWork
          image={
            <StaticImage
              alt="jobo"
              src="../images/jobo.png"
              objectFit="contain"
              placeholder="none"
              height={200}
            />
          }
          title="JOBO"
          description="Responsive web design for job search"
          to="/jobo"
        />
        {/* <Work
          reversed
          image={
            <StaticImage
              alt="the-slice"
              src="../images/lets-cake.png"
              objectFit="contain"
              placeholder="none"
              height={140}
            />
          }
          title="THE SLICE BAKERY"
          description="Web design for ordering cakes online from a local bakery"
          to="/jobo"
        /> */}
      </Flex>
    </Layout>
  );
};

export const query = graphql`
  query {
    header: file(relativePath: { eq: "header.svg" }) {
      publicURL
    }
    linkedin: file(relativePath: { eq: "linkedin.svg" }) {
      publicURL
    }
    email: file(relativePath: { eq: "email.svg" }) {
      publicURL
    }
  }
`;

export default Index;
