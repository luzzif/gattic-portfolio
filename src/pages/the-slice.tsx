import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/layout";
import { Header } from "../components/lets-cake/header";
import { ProblemStatement } from "../components/lets-cake/problem-statement";
import { PainPoints } from "../components/lets-cake/pain-points";
import { Define } from "../components/lets-cake/define";
import { EmpathyMaps } from "../components/lets-cake/empathy-maps";
import { Ideate } from "../components/lets-cake/ideate";
import { UserFlow } from "../components/lets-cake/user-flow";
import { CardSorting } from "../components/lets-cake/card-sorting";
import { Design } from "../components/lets-cake/design";
import { StyleGuide } from "../components/lets-cake/style-guide";
import { HiFiWireframes } from "../components/lets-cake/hi-fi-wireframes";
import { Test } from "../components/lets-cake/test";
import { Refining } from "../components/lets-cake/refining";

interface JoboProps {
  data: any;
}

const Index = ({ data }: JoboProps) => {
  return (
    <Layout
      linkedinSvgUrl={data.linkedin.publicURL}
      behanceSvgUrl={data.behance.publicURL}
      logoSvgUrl={data.logo.publicURL}
    >
      <Header />
      <ProblemStatement />
      <PainPoints />
      <Define />
      <EmpathyMaps />
      <Ideate />
      <UserFlow />
      <CardSorting />
      <Design />
      <StyleGuide />
      <HiFiWireframes />
      <Test />
      <Refining />
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
    background1: file(relativePath: { eq: "lets-cake/background1.svg" }) {
      publicURL
    }
    chart: file(relativePath: { eq: "lets-cake/chart.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: NONE)
      }
    }
  }
`;

export default Index;
