import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Box, Flex, Text } from "rebass";
import styled from "styled-components";
import { Layout } from "../components/layout";
import { SocialIcon } from "../components/social-icon";

const IntroductionText = styled.div`
  font-family: "EB Garamond";
  font-size: 28px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: center;
  margin-bottom: 56px;
  padding: 0 20px;
`;

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const FlexColumnContainer = styled(Flex)`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 21px;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0em;
  margin-bottom: 22px;
`;

const Body = styled.div`
  font-family: Raleway;
  font-size: 21px;
  font-weight: 300;
  line-height: 25px;
  letter-spacing: 0em;
  margin-bottom: 28px;
`;

const BoldFooterText = styled.div`
  font-size: 26px;
  font-weight: 500;
  line-height: 31px;
  letter-spacing: 0em;
  text-align: center;
  max-width: 674px;
  margin-top: 88px;
  padding: 0 20px;
`;

const ConnectWithMeText = styled(Flex)`
  align-items: center;
  font-size: 21px;
  font-weight: 300;
  line-height: 25px;
  letter-spacing: 0em;
  margin-top: 32px;
  padding: 0 20px;
`;

const SignatureContainer = styled.div`
  margin-top: 65px;
`;

interface AboutProps {
  data: any;
}

const About = ({ data }: AboutProps) => {
  return (
    <Layout
      linkedinSvgUrl={data.linkedin.publicURL}
      behanceSvgUrl={data.behance.publicURL}
      logoSvgUrl={data.logo.publicURL}
      hideSocials
    >
      <IntroductionText>
        OH HEY,
        <br /> HAPPY TO SEE YOU AGAIN!
      </IntroductionText>
      <OuterContainer>
        <Flex
          flexDirection={["column-reverse", "column-reverse", "row"]}
          width={["100%", "100%", "60%"]}
          px="20px"
        >
          <FlexColumnContainer
            width={["100%", "100%", "70%"]}
            marginRight={["0px", "0px", "77px"]}
          >
            <Title>Who am I?</Title>
            <Body>
              I’m a <b>junior UX designer</b> with a backgorund in customer
              service. I love working with people and help them feeling better
              and my previous experiences in this role helped me better
              understand the needs and the fears of customers.
            </Body>
            <Title>Why UX design?</Title>
            <Body>
              The world of design has always fascinated me but I always saw it
              like something I couldn’t aspire to. <br />
              Last year with the lockdowns and the whole Covid situation, I
              decided to <b>turn my life around</b> and start doing what I am
              really passionate about.
              <br />
              <br /> I started by following the <b>
                Social Media Marketing
              </b>{" "}
              Professional course on Coursera and a fews months ago I started
              and finished the <b>Google UX Design</b> course to acquire the
              foundamentals to enter the UX world. I'm now ready to start a new
              one, to deep dive into the UX and put in practice what I’ve
              learned.
            </Body>
            <Title>Why me?</Title>
            <Body>
              I'll be short. <br />
              My strengths are <b>empathy</b>, the ability to understand what
              people feels , and <b>team player</b>.
              <br /> I bring creativity, enthusiasm and organizational skills to
              all my works and everywhere I go.
            </Body>
          </FlexColumnContainer>
          <Flex
            justifyContent="center"
            width={["100%", "100%", "30%"]}
            mb={["40px", "40px", "0px"]}
          >
            <Box display={["none", "none", "block"]} mt="50px">
              <StaticImage
                aspectRatio={9 / 16}
                alt="me"
                src="../images/cristina.png"
                placeholder="blurred"
                quality={80}
              />
            </Box>
            <Box display={["block", "block", "none"]}>
              <StaticImage
                aspectRatio={1 / 1}
                alt="me"
                src="../images/cristina.png"
                placeholder="blurred"
                quality={80}
              />
            </Box>
          </Flex>
        </Flex>
      </OuterContainer>
      <BoldFooterText>
        Want to talk about what I could bring to you or why am I the right fit
        for you? Don’t be shy, let’s connect!
      </BoldFooterText>
      <ConnectWithMeText
        mt="40px"
        flexWrap="wrap"
        justifyContent="center"
        textAlign="center"
      >
        <Text mr="8px">Connect with me on</Text>
        <Box mr="8px">
          <SocialIcon
            href="https://www.linkedin.com/in/cristinagatti99/"
            imageUrl={data.linkedin.publicURL}
          />
        </Box>
        <Text mr="8px">or </Text>
        <Box mr="8px">
          <SocialIcon
            href="https://www.behance.net/cristinagatti1"
            imageUrl={data.behance.publicURL}
          />
        </Box>
      </ConnectWithMeText>
      <SignatureContainer>
        <StaticImage
          alt="signature"
          src="../images/signature.png"
          width={235}
          placeholder="blurred"
          quality={80}
        />
      </SignatureContainer>
    </Layout>
  );
};

export const query = graphql`
  query {
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

export default About;
