import React from "react";
import { Box, Flex, Text, Button } from "rebass";
import styled from "styled-components";
import bubbles from "../../images/bubbles.svg";

const RootFlex = styled(Flex)`
  background-color: #f5f5f5;
  border-radius: 20px;
  padding: 0 28px;
  background-image: url(${bubbles});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  background-color: #fbfbfb;
  padding: 24px 30px;
  border: none;
  border-radius: 20px;
  font-size: 20px;
  outline: none;
  font-family: Raleway;
  ::placeholder {
    font-family: Raleway;
    color: #000;
  }
`;

export const TextArea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  background-color: #fbfbfb;
  padding: 20px 24px;
  border: none;
  border-radius: 20px;
  font-size: 20px;
  outline: none;
  font-family: Raleway;
  ::placeholder {
    font-family: Raleway;
    color: #000;
  }
`;

export const SubmitButton = styled(Button)`
  background: #ea4ac5;
  box-shadow: 0px 4px 20px 5px rgba(234, 74, 197, 0.2),
    0px 4px 20px 5px rgba(98, 24, 81, 0.38);
  border-radius: 20px !important;
  width: 100%;
  height: 72px;
  cursor: pointer;
`;

export const ContactForm = () => {
  return (
    <RootFlex
      minHeight={["auto", "auto", "350px"]}
      width={["90%", "80%", "70%"]}
      justifyContent="center"
    >
      <Flex
        flexDirection="column"
        pt={["40px", "50px", "60px"]}
        pb={["60px", "80px", "100px"]}
        justifyContent={["flex-start", "space-between"]}
        alignItems="center"
        width="100%"
      >
        <Text
          width={["100%", "90%", "30%"]}
          fontSize="28px"
          fontWeight="500"
          lineHeight="31px"
          letterSpacing="0em"
          textAlign="center"
          mb="70px"
        >
          Did I catch your attention? Get in touch!
        </Text>
        <Box mb="25px" width={["100%", "90%", "60%"]}>
          <Input type="text" placeholder="First name" aria-label="Nome" />
        </Box>
        <Box mb="25px" width={["100%", "90%", "60%"]}>
          <Input type="text" placeholder="Last name" aria-label="Nome" />
        </Box>
        <Box mb="25px" width={["100%", "90%", "60%"]}>
          <Input
            type="text"
            placeholder="What's your email? *"
            aria-label="Nome"
          />
        </Box>
        <Box mb="40px" width={["100%", "90%", "60%"]}>
          <TextArea placeholder="What's your question? *" aria-label="Nome" />
        </Box>
        <Box width={["100%", "90%", "60%"]}>
          <SubmitButton>
            <Text
              fontSize="24px"
              fontWeight="700"
              lineHeight="29px"
              letterSpacing="0em"
            >
              Send message
            </Text>
          </SubmitButton>
        </Box>
      </Flex>
    </RootFlex>
  );
};
