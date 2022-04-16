import { Link } from "gatsby";
import React, { ReactNode } from "react";
import { Box, Flex, Text } from "rebass";
import styled from "styled-components";

const OuterContainer = styled(Link)`
  display: flex;
  justify-content: center;
  width: 70%;
  height: 350px;
  background-color: #f5f5f5;
  border-radius: 20px;
  text-decoration: none;
  color: initial;
`;

interface WorkProps {
  image: ReactNode;
  title: string;
  description: string;
  reversed?: boolean;
  className?: string;
  to: string;
}

export const Work = ({
  image,
  title,
  description,
  reversed,
  className,
  to,
}: WorkProps) => {
  return (
    <OuterContainer className={className} to={to}>
      <Flex
        flexDirection={reversed ? "row-reverse" : "row"}
        justifyContent="space-between"
        alignItems="center"
        width="65%"
      >
        <Box>{image}</Box>
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Text
            fontFamily="EB Garamond"
            fontSize="48px"
            fontStyle="normal"
            fontWeight="400"
            lineHeight="55px"
            letterSpacing="0em"
            marginBottom="20px"
            textAlign="center"
          >
            {title}
          </Text>
          <Text
            maxWidth="227px"
            fontSize="21px"
            fontWeight="300"
            lineHeight="25px"
            letterSpacing="0em"
            textAlign="center"
          >
            {description}
          </Text>
        </Flex>
      </Flex>
    </OuterContainer>
  );
};
