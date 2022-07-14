import { Link } from "gatsby";
import React, { ReactNode } from "react";
import { Box, Flex, Text } from "rebass";
import styled from "styled-components";

const OuterContainer = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: initial;
  width: 100%;
`;

const RootFlex = styled(Flex)`
  background-color: #f5f5f5;
  border-radius: 20px;
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
      <RootFlex
        minHeight={["auto", "auto", "350px"]}
        width={["90%", "80%", "70%"]}
        height={["auto", "auto", "350px"]}
        justifyContent="center"
      >
        <Flex
          flexDirection={["column", "column", reversed ? "row-reverse" : "row"]}
          pb={["24px", "24px", "0px"]}
          justifyContent={["flex-start", "space-between"]}
          alignItems="center"
          width="100%"
        >
          <Box
            style={{ borderRadius: 20, overflow: "hidden" }}
            mb={["24px", "24px", "0px"]}
            height={["auto", "auto", "100%"]}
            width={["100%", "100%", "60%"]}
          >
            {image}
          </Box>
          <Flex
            flexGrow="1"
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
      </RootFlex>
    </OuterContainer>
  );
};
