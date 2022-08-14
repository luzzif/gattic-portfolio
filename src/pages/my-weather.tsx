import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/layout";
import { Header } from "../components/my-weather/header";
import { About } from "../components/my-weather/about";
import { Wireframes } from "../components/my-weather/wireframes";
import { UsabilityTesting } from "../components/my-weather/usability-testing";
import { Goals } from "../components/my-weather/goals";
import { Results } from "../components/my-weather/results";
import { TypographyColor } from "../components/my-weather/typography-color";
import { Mockups } from "../components/my-weather/mockups";
import { Footer } from "../components/my-weather/footer";

interface MyWeatherProps {
  data: any;
}

const Index = ({ data }: MyWeatherProps) => {
  return (
    <Layout
      linkedinSvgUrl={data.linkedin.publicURL}
      behanceSvgUrl={data.behance.publicURL}
      logoSvgUrl={data.logo.publicURL}
      noHeaderSpacing
      dark
    >
      <Header />
      <About />
      <Wireframes />
      <UsabilityTesting />
      <Goals />
      <Results />
      <TypographyColor />
      <Mockups />
      <Footer />
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
    mockups: file(relativePath: { eq: "my-weather/mockups.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE, quality: 10)
      }
    }
  }
`;

export default Index;
