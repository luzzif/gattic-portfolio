import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/layout";
import styled from "styled-components";
import { SocialIcon } from "../components/social-icon";
import { Work } from "../components/work";
import { StaticImage } from "gatsby-plugin-image";
import { Box, Flex, Image, Text } from "rebass";

const SummaryText = styled(Text)`
  max-width: 540px;
  font-size: 21px;
  font-style: normal;
  font-weight: 300;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: center;
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
      <Box width="100%" mt="40px" mb={["60px", "60px", "100px"]}>
        <Image
          width="100%"
          display={["block", "none"]}
          src={data.headerMobile.publicURL}
        />
        <Image
          width="100%"
          display={["none", "block", "none"]}
          src={data.headerTablet.publicURL}
        />
        <Image
          width="100%"
          display={["none", "none", "block"]}
          src={data.headerDesktop.publicURL}
        />
      </Box>
      <Flex
        flexDirection={["column", "column", "row"]}
        marginBottom={["60px", "60px", "90px"]}
        marginLeft={["0px", "0px", "81px"]}
        maxWidth="656px"
        justifyContent="space-between"
        px="20px"
      >
        <SummaryText mb={["40px", "40px", "0px"]}>
          My strengths are empathy, the ability to understand what people feel,
          and team player. My previous experiences in customer service helped me
          better understand the needs and fears of customers.
        </SummaryText>
        <Flex flexDirection={["row", "row", "column"]} justifyContent="center">
          <Box mb={["0px", "0px", "20px"]} mr={["20px", "20px", "0px"]}>
            <SocialIcon
              href="https://www.linkedin.com/in/cristinagatti99/"
              imageUrl={data.linkedin.publicURL}
            />
          </Box>
          <SocialIcon
            href="mailto:gatticristina99@gmail.com"
            imageUrl={data.email.publicURL}
          />
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
    headerDesktop: file(relativePath: { eq: "header/desktop.svg" }) {
      publicURL
    }
    headerTablet: file(relativePath: { eq: "header/tablet.svg" }) {
      publicURL
    }
    headerMobile: file(relativePath: { eq: "header/mobile.svg" }) {
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
