import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { Box, Flex, Text } from "rebass";
import styled from "styled-components";
import { Title } from "../title";

const BodyText = styled(Text)`
  font-size: 21px;
  line-height: 30px;
  font-weight: 300;
  letter-spacing: 0em;
`;

const Circle = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6998ff;
  font-size: 35px;
  font-weight: 900;
  color: #fff;
`;

interface TestProps {
  affinityImage: any;
  usabilityImage: any;
  uiKitImage: any;
  mobileMockupImage: any;
  desktopMockupImage: any;
  calendar: string;
  location: string;
  people: string;
  clock: string;
}

export const Test = ({
  affinityImage,
  usabilityImage,
  uiKitImage,
  mobileMockupImage,
  desktopMockupImage,
  calendar,
  location,
  people,
  clock,
}: TestProps) => {
  return (
    <Flex flexDirection="column" width="100%">
      <Title mt="50px" mb="20px">
        USABILITY STUDY
      </Title>
      <BodyText mb="50px">
        With the prototype completed, I started working on a test plan to guide
        the testing that would be conducted. I then recruited participants and
        conducted usability testing in order to see how users interact with my
        design and identify where improvements to the design can be made.
      </BodyText>
      <Flex
        flexDirection={["column", "column", "column", "row"]}
        justifyContent="space-between"
      >
        <Flex flexDirection="column">
          <Flex mb="35px">
            <Box mr="27px">
              <img src={calendar} alt="calendar" />
            </Box>
            <Text
              fontSize="21px"
              fontWeight="300"
              lineHeight="25px"
              letterSpacing="0em"
            >
              <strong>Study type</strong>: Unmoderated usability study
            </Text>
          </Flex>
          <Flex mb={["35px", "35px", "35px", "0px"]}>
            <Box mr="27px">
              <img src={location} alt="location" />
            </Box>
            <Text
              fontSize="21px"
              fontWeight="300"
              lineHeight="25px"
              letterSpacing="0em"
            >
              <strong>Location</strong>: Canada, remote
            </Text>
          </Flex>
        </Flex>
        <Flex flexDirection="column">
          <Flex mb="35px">
            <Box mr="27px">
              <img src={people} alt="people" />
            </Box>
            <Text
              fontSize="21px"
              fontWeight="300"
              lineHeight="25px"
              letterSpacing="0em"
            >
              <strong>Participants</strong>: 5 participants
            </Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Flex>
              <Box mr="27px">
                <img src={clock} alt="clock" />
              </Box>
              <Text
                fontSize="21px"
                fontWeight="300"
                lineHeight="25px"
                letterSpacing="0em"
              >
                <strong>Lenght</strong>: 20/30 minutes
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Title mt="50px" mb="20px">
        USABILITY STUDY: TASKS
      </Title>
      <BodyText mb="40px">
        I asked participants to complete tasks such as:
        <ol>
          <li>Login into the platform</li>
          <li>Build a resume</li>
          <li>Search jobs</li>
          <li>Submit a job application</li>
        </ol>
      </BodyText>
      <Title mb="20px">AFFINITY MAP</Title>
      <BodyText mb="50px">
        After conducted the usability study, I put together all the observations
        discovered from the testing and I used an <strong>affinity map</strong>{" "}
        to synthesize my findings. This helped me to get a better look at the
        different experiences users had and uncover key insights.
      </BodyText>
      <GatsbyImage alt="affinity" image={affinityImage} />
      <Title mt="50px" mb="20px">
        USABILITY STUDY: FINDINGS
      </Title>
      <BodyText mb="50px">
        These were the main findings uncovered by the usability study.
      </BodyText>
      <Flex
        width="100%"
        justifyContent="space-around"
        flexDirection={["column", "row"]}
      >
        <Flex flexDirection="column" alignItems="center" mb={["40px", "0px"]}>
          <Box mb="35px">
            <Circle>1</Circle>
          </Box>
          <Text
            fontSize="25px"
            fontWeight="800"
            lineHeight="30px"
            letterSpacing="0em"
            color="#6998FF"
            mb="25px"
            textAlign="center"
          >
            SIGN IN
          </Text>
          <Text
            maxWidth="256px"
            fontSize="18px"
            fontWeight="300"
            lineHeight="25px"
            letterSpacing="0em"
            textAlign="center"
          >
            People want a confirmation of the enrollment to the app
          </Text>
        </Flex>
        <Flex flexDirection="column" alignItems="center" mb={["40px", "0px"]}>
          <Box mb="35px">
            <Circle>2</Circle>
          </Box>
          <Text
            fontSize="25px"
            fontWeight="800"
            lineHeight="30px"
            letterSpacing="0em"
            color="#6998FF"
            mb="25px"
            textAlign="center"
          >
            JOB SEARCH
          </Text>
          <Text
            maxWidth="256px"
            fontSize="18px"
            fontWeight="300"
            lineHeight="25px"
            letterSpacing="0em"
            textAlign="center"
          >
            Users want filters for easier job research
          </Text>
        </Flex>
        <Flex flexDirection="column" alignItems="center" mb={["40px", "0px"]}>
          <Box mb="35px">
            <Circle>3</Circle>
          </Box>
          <Text
            fontSize="25px"
            fontWeight="800"
            lineHeight="30px"
            letterSpacing="0em"
            color="#6998FF"
            mb="25px"
            textAlign="center"
          >
            JOB SUBMISSION
          </Text>
          <Text
            maxWidth="256px"
            fontSize="18px"
            fontWeight="300"
            lineHeight="25px"
            letterSpacing="0em"
            textAlign="center"
          >
            Users want to edit the resume during the application of a specific
            job
          </Text>
        </Flex>
      </Flex>
      <Title mt="50px" mb="20px">
        USABILITY STUDY: REVISION
      </Title>
      <BodyText mb="40px">
        <p>
          Based on the{" "}
          <i>
            <strong style={{ fontWeight: 400 }}>insights</strong>
          </i>{" "}
          from the usability studies, I applied design changes to my designs.
        </p>
        <p>
          I added <strong>filters</strong> to the job search for an easier
          online experience and I also modified the{" "}
          <strong>“Edit” button</strong> in the job application and added
          <strong>stepper</strong> that indicates at what point of the job
          application the user is.
        </p>
      </BodyText>
      <GatsbyImage alt="usability" image={usabilityImage} />
      <Title mt="50px" mb="30px">
        UI KIT
      </Title>
      <GatsbyImage alt="ui-kit" image={uiKitImage} />
      <Title mt="50px" mb="30px">
        MOBILE HIGH FIDELITY WIREFRAMES
      </Title>
      <GatsbyImage alt="mobile-mockups" image={mobileMockupImage} />
      <Title mt="50px" mb="30px">
        DESKTOP HIGH FIDELITY WIREFRAMES
      </Title>
      <GatsbyImage
        style={{ marginBottom: 50 }}
        alt="desktop-mockups"
        image={desktopMockupImage}
      />
    </Flex>
  );
};
