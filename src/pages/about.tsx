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
            width={["100%", "100%", "60%"]}
            marginRight={["0px", "0px", "77px"]}
          >
            <Title>Who am I?</Title>
            <Body>
              I'm an Italian UX designer based in Lisbon with a lot of passion
              and a background in customer service. I'm an addicted traveler, a
              food enthusiast and a forever dreamer.
            </Body>
            <Title>Why UX design?</Title>
            <Body>
              The world of design has always fascinated me but I always saw it
              like something I couldn't aspire to. <br />
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
              one, to deep dive into the UX and put in practice what I've
              learned.
            </Body>
            <Title>Why me?</Title>
            <Body>
              <p>
                I'm a girl who is always looking for new stimuli to be the best
                part of herself and I adapt to new places very easily. Before my
                career in the UX I tried different jobs, from receptionist to
                customer service, to food quality control in a factory and so
                I'm used, and I like, working in a fast and dynamic environment.
                My previous experience in customer service helped me to relate
                to people, be more self-confident and understand in no time what
                the customer needs.
              </p>
              My strengths are <strong>empathy</strong>,{" "}
              <strong>creativity</strong>, <strong>adaptability</strong> and
              <strong>team player</strong>. I bring humor, enthusiasm and
              organization everywhere I go.
            </Body>
          </FlexColumnContainer>
          <Flex
            justifyContent="center"
            alignItems="center"
            width={["100%", "100%", "40%"]}
            mb={["40px", "40px", "0px"]}
          >
            <Box display={["none", "none", "block"]} mt="50px">
              <StaticImage
                alt="me"
                src="../images/cristina.png"
                placeholder="none"
                quality={100}
                layout="constrained"
              />
            </Box>
            <Box display={["block", "block", "none"]}>
              <StaticImage
                alt="me"
                src="../images/cristina.png"
                placeholder="none"
                quality={100}
              />
            </Box>
          </Flex>
        </Flex>
      </OuterContainer>
      <BoldFooterText>
        Want to talk about what I could bring to you or why am I the right fit
        for you? Don't be shy, let's connect!
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
          placeholder="none"
          quality={100}
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
