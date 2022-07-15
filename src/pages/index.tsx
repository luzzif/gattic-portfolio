import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/layout";
import styled from "styled-components";
import { SocialIcon } from "../components/social-icon";
import { Work } from "../components/work";
import { StaticImage } from "gatsby-plugin-image";
import { Box, Flex, Image, Text } from "rebass";
import { ContactForm } from "../components/contact-form";

const SummaryText = styled(Text)`
  font-family: Raleway;
  font-size: 21px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: justify;
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
    >
      <Flex
        width={["100%", "90%", "70%"]}
        alignItems="center"
        justifyContent="center"
        flexDirection={["column", "column", "row"]}
      >
        <ImageContainer
          width={["auto", "auto", "50%", "50%"]}
          px={["24px", "24px", "0px"]}
          mb={["60px", "60px", "100px"]}
          mt={["60px", "60px", "60px"]}
          mr={["0px", "0px", "40px"]}
        >
          <StaticImage
            alt="header"
            src="../images/header.png"
            placeholder="none"
            quality={100}
            layout="constrained"
          />
        </ImageContainer>
        <Flex
          mb={["60px", "60px", "100px"]}
          mt={["60px", "60px", "60px"]}
          width={["auto", "auto", "50%", "50%"]}
          maxWidth="656px"
          px="32px"
          flexDirection="column"
        >
          <Text
            fontFamily="Raleway"
            fontSize="21px"
            fontWeight="500"
            lineHeight="32px"
            letterSpacing="0em"
            mb="20px"
          >
            HELLO, NICE TO MEET YOU AND WELCOME TO MY WORLD!
          </Text>
          <SummaryText mb="20px">
            I'm a girl passionate about creating usable and beautiful digital
            products. I love working with people and finding solutions to help
            them feel better. My background in customer service helped me better
            understand the needs and the fears of people.
          </SummaryText>
          <Flex flexDirection="row" mb={["70px", "70px", "0px"]}>
            <Box mr="20px">
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
              placeholder="none"
              layout="fixed"
              quality={100}
            />
          }
          title="JOBO"
          description="Responsive web design for job search"
          to="/jobo"
        />
        <Work
          reversed
          image={
            <StaticImage
              alt="the-slice"
              src="../images/lets-cake.png"
              placeholder="none"
              layout="fixed"
              quality={100}
            />
          }
          title="THE SLICE BAKERY"
          description="Web design for ordering cakes online from a local bakery"
          to="/the-slice"
        />
        <Box mt="80px" width="100%" display="flex" justifyContent="center">
          <ContactForm />
        </Box>
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
