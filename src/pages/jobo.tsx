import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/layout";
import { Box, Flex, Text } from "rebass";
import { GatsbyImage } from "gatsby-plugin-image";
import { JoboOverview } from "../components/jobo/overview";
import { SectionDivider } from "../components/jobo/section-divider";
import { Emphatize } from "../components/jobo/emphatize";
import { Define } from "../components/jobo/define";
import { Prototype } from "../components/jobo/prototype";
import { Ideate } from "../components/jobo/ideate";
import { Test } from "../components/jobo/test";
import { GoingForward } from "../components/jobo/going-forward";

interface JoboProps {
  data: any;
}

const Index = ({ data }: JoboProps) => {
  return (
    <Layout
      linkedinSvgUrl={data.linkedin.publicURL}
      emailSvgUrl={data.email.publicURL}
    >
      <Flex
        justifyContent="center"
        width="100%"
        padding="40px 20px"
        backgroundColor="#f5f5f5"
        marginBottom="42px"
      >
        <GatsbyImage
          alt="header"
          image={data.header.childImageSharp.gatsbyImageData}
        />
      </Flex>
      <Flex justifyContent="center">
        <Flex alignItems="center" flexDirection="column">
          <Text
            fontFamily="EB Garamond"
            fontSize="35px"
            fontWeight="400"
            lineHeight="40px"
            letterSpacing="0em"
            marginBottom="37px"
          >
            JOBO
          </Text>
          <Text
            width={["100%", "80%", "65%", "45%"]}
            px="20px"
            fontSize="21px"
            fontWeight="300"
            lineHeight="25px"
            letterSpacing="0em"
            textAlign="center"
            marginBottom="13px"
          >
            Jobo is a new nonprofit organization focused on job research. The
            organization needs a tool that helps people find a job and start a
            new career. Jobo's primary target users include young graduates that
            want to enter the world of work and adults who want to change their
            career.
          </Text>
          <Text
            fontSize="16px"
            fontStyle="italic"
            fontWeight="300"
            lineHeight="19px"
            letterSpacing="0em"
            textAlign="center"
            marginBottom="42px"
            px="20px"
          >
            This project was conducted for educational purposes.
          </Text>
          <Box px="20px" width={["100%", "80%", "65%", "45%"]}>
            <JoboOverview />
          </Box>
        </Flex>
      </Flex>
      <SectionDivider text="EMPHATIZE" />
      <Flex justifyContent="center">
        <Flex
          width={["100%", "80%", "65%", "45%"]}
          px="20px"
          alignItems="center"
          flexDirection="column"
        >
          <Emphatize
            personasImage={data.personas.childImageSharp.gatsbyImageData}
            empathyMapImage={data.empathy.childImageSharp.gatsbyImageData}
          />
        </Flex>
      </Flex>
      <SectionDivider text="DEFINE" />
      <Flex justifyContent="center">
        <Flex
          width={["100%", "80%", "65%", "45%"]}
          px="20px"
          alignItems="center"
          flexDirection="column"
        >
          <Define
            goalsImage={data.goals.childImageSharp.gatsbyImageData}
            joeyImage={data.joey.childImageSharp.gatsbyImageData}
            graceImage={data.grace.childImageSharp.gatsbyImageData}
          />
        </Flex>
      </Flex>
      <SectionDivider text="IDEATE" />
      <Flex justifyContent="center">
        <Flex
          width={["100%", "80%", "65%", "45%"]}
          px="20px"
          alignItems="center"
          flexDirection="column"
        >
          <Ideate
            brainstormingImage={
              data.brainstorming.childImageSharp.gatsbyImageData
            }
            ujmImage={data.ujm.childImageSharp.gatsbyImageData}
            sitemapImage={data.sitemap.childImageSharp.gatsbyImageData}
          />
        </Flex>
      </Flex>
      <SectionDivider text="PROTOTYPE" />
      <Flex justifyContent="center">
        <Flex
          width={["100%", "80%", "65%", "45%"]}
          px="20px"
          alignItems="center"
          flexDirection="column"
        >
          <Prototype
            wireframesImage={data.wireframes.childImageSharp.gatsbyImageData}
          />
        </Flex>
      </Flex>
      <SectionDivider text="TEST" />
      <Flex justifyContent="center">
        <Flex
          width={["100%", "80%", "65%", "45%"]}
          px="20px"
          alignItems="center"
          flexDirection="column"
        >
          <Test
            affinityImage={data.affinity.childImageSharp.gatsbyImageData}
            usabilityImage={data.usability.childImageSharp.gatsbyImageData}
            uiKitImage={data.uiKit.childImageSharp.gatsbyImageData}
            mobileMockupImage={
              data.mobileMockups.childImageSharp.gatsbyImageData
            }
            desktopMockupImage={
              data.desktopMockups.childImageSharp.gatsbyImageData
            }
            calendar={data.calendar.publicURL}
            location={data.location.publicURL}
            people={data.people.publicURL}
            clock={data.clock.publicURL}
          />
        </Flex>
      </Flex>
      <SectionDivider text="GOING FORWARD" />
      <Flex justifyContent="center">
        <Flex
          width={["100%", "80%", "65%", "45%"]}
          px="20px"
          alignItems="center"
          flexDirection="column"
        >
          <GoingForward />
        </Flex>
      </Flex>
    </Layout>
  );
};

export const query = graphql`
  query {
    header: file(relativePath: { eq: "jobo/header.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: NONE, height: 312)
      }
    }
    linkedin: file(relativePath: { eq: "linkedin.svg" }) {
      publicURL
    }
    email: file(relativePath: { eq: "email.svg" }) {
      publicURL
    }
    personas: file(relativePath: { eq: "jobo/personas.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: NONE)
      }
    }
    empathy: file(relativePath: { eq: "jobo/empathy.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: NONE)
      }
    }
    goals: file(relativePath: { eq: "jobo/goals.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: NONE)
      }
    }
    brainstorming: file(relativePath: { eq: "jobo/brainstorming.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: NONE)
      }
    }
    ujm: file(relativePath: { eq: "jobo/user-journey-map.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: NONE)
      }
    }
    sitemap: file(relativePath: { eq: "jobo/sitemap.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: NONE)
      }
    }
    joey: file(relativePath: { eq: "jobo/joey.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: NONE)
      }
    }
    grace: file(relativePath: { eq: "jobo/grace.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: NONE)
      }
    }
    wireframes: file(relativePath: { eq: "jobo/wireframes.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: NONE)
      }
    }
    affinity: file(relativePath: { eq: "jobo/affinity.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: NONE)
      }
    }
    usability: file(relativePath: { eq: "jobo/usability.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: NONE)
      }
    }
    uiKit: file(relativePath: { eq: "jobo/ui-kit.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: NONE)
      }
    }
    mobileMockups: file(relativePath: { eq: "jobo/mobile-mockups.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: NONE)
      }
    }
    desktopMockups: file(relativePath: { eq: "jobo/desktop-mockups.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: NONE)
      }
    }
    calendar: file(relativePath: { eq: "jobo/calendar.svg" }) {
      publicURL
    }
    location: file(relativePath: { eq: "jobo/location.svg" }) {
      publicURL
    }
    people: file(relativePath: { eq: "jobo/people.svg" }) {
      publicURL
    }
    clock: file(relativePath: { eq: "jobo/clock.svg" }) {
      publicURL
    }
  }
`;

export default Index;
