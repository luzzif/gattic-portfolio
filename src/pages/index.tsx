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
      hideLogo
    >
      <Flex width="100%" alignItems="center" mb="-50px" mt="-70px">
        <ImageContainer width="60%" mb={["60px", "60px", "100px"]}>
          <StaticImage
            alt="header"
            src="../images/header.png"
            placeholder="none"
            quality={100}
            layout="fullWidth"
          />
        </ImageContainer>
        <Flex
          width="40%"
          maxWidth="656px"
          px="20px"
          flexDirection="column"
          mt="-70px"
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
            My strengths are empathy, the ability to understand what people
            feel, and team player. My previous experiences in customer service
            helped me better understand the needs and fears of customers.
          </SummaryText>
          <Flex flexDirection="row">
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
              layout="fullWidth"
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
              layout="fullWidth"
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
