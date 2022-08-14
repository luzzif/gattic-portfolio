import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Flex, Box, Text } from "rebass";

export const About = () => {
  return (
    <Flex
      py="82px"
      width="100%"
      backgroundColor="#161616"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        width={["100%", "90%", "70%"]}
        flexDirection="column"
        style={{ zIndex: 10 }}
        alignItems={["center", "center", "flex-end"]}
      >
        <Box mb="50px">
          <Text
            color="#fff"
            fontFamily="Raleway"
            fontSize="30px"
            fontWeight="500"
            lineHeight="30px"
            letterSpacing="0.02em"
          >
            About MyWeather
          </Text>
          <Text
            color="#fff"
            fontFamily="Open Sans"
            fontSize="21px"
            fontWeight="400"
            lineHeight="38px"
            letterSpacing="0.01em"
          >
            MyWeather is a weather app with light and dark theme. I wanted to
            make some basic UI design, something that's useful everyday, and so
            I came up with the weather app. Doing my research on the web I
            noticed that most of the designs tend to be very beautiful and
            pleasant but not so accessible and intuitive.
          </Text>
        </Box>
        <Flex>
          <Flex flexDirection="column" width="40%">
            <Box mb="50px">
              <Text
                color="#fff"
                fontFamily="Raleway"
                fontSize="30px"
                fontWeight="500"
                lineHeight="30px"
                letterSpacing="0.02em"
              >
                The goal
              </Text>
              <Text
                color="#fff"
                fontFamily="Open Sans"
                fontSize="21px"
                fontWeight="400"
                lineHeight="38px"
                letterSpacing="0.01em"
              >
                My goal is to design an app that is intuitive and accessible but
                also aesthetically pleasing, that works smoothly and doesn't
                distract the user with too many unnecessary images and screens.
              </Text>
            </Box>
            <Box>
              <Text
                color="#fff"
                fontFamily="Raleway"
                fontSize="30px"
                fontWeight="500"
                lineHeight="30px"
                letterSpacing="0.02em"
              >
                What does the user want?
              </Text>
              <Text
                color="#fff"
                fontFamily="Open Sans"
                fontSize="21px"
                fontWeight="400"
                lineHeight="38px"
                letterSpacing="0.01em"
              >
                Based on the research I've done, 70% of the users prefer
                tidiness and simplicity over the beauty of a design. The user's
                goal is to plan activities, holidays based on the weather
                consulted, or simply look at the weather to see the forecast for
                the next days.
              </Text>
            </Box>
          </Flex>
          <Box mt="-80px" mb="-160px" width="60%">
            <StaticImage
              src="../../../images/my-weather/about.png"
              alt="about"
              placeholder="none"
            />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
