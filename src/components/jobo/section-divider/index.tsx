import React from "react";
import { Flex, Text } from "rebass";
import styled from "styled-components";

const Root = styled(Flex)``;

interface SectionDividerProps {
  text: string;
}

export const SectionDivider = ({ text }: SectionDividerProps) => {
  return (
    <Root
      width="100%"
      height="80px"
      justifyContent="center"
      alignItems="center"
      backgroundColor="#6998FF"
    >
      <Text
        fontSize="35px"
        fontWeight="800"
        lineHeight="41px"
        letterSpacing="0em"
        color="#fff"
      >
        {text}
      </Text>
    </Root>
  );
};
