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

const ImageContainer = styled(Box)`
  position: relative;
`;

const HeaderImage = styled(Image)`
  position: absolute;
  top: 0px;
`;

interface IndexProps {
  data: any;
}

const Index = ({ data }: IndexProps) => {
  return (
    <Layout
      linkedinSvgUrl={data.linkedin.publicURL}
      behanceSvgUrl={data.behance.publicURL}
      logoSvgUrl={data.logo.publicURL}
      hideLogo
    >
      <ImageContainer
        width="100%"
        mt="40px"
        mb={["60px", "60px", "100px"]}
        display={["block", "none"]}
        paddingTop="48.9795918%"
      >
        <HeaderImage width="100%" src={data.headerMobile.publicURL} />
      </ImageContainer>
      <ImageContainer
        width="100%"
        mt="40px"
        mb={["60px", "60px", "100px"]}
        display={["none", "block", "none"]}
        paddingTop="34.2857143%"
      >
        <HeaderImage width="100%" src={data.headerTablet.publicURL} />
      </ImageContainer>
      <ImageContainer
        width="100%"
        mt="40px"
        mb={["60px", "60px", "100px"]}
        display={["none", "none", "block"]}
        paddingTop="18.8476563%"
      >
        <HeaderImage width="100%" src={data.headerDesktop.publicURL} />
      </ImageContainer>
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
            href="https://www.behance.net/cristinagatti1"
            imageUrl={data.behance.publicURL}
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
    behance: file(relativePath: { eq: "behance.svg" }) {
      publicURL
    }
    logo: file(relativePath: { eq: "logo.svg" }) {
      publicURL
    }
  }
`;

export default Index;
