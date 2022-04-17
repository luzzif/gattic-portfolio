import React, { ReactNode } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { Link } from "gatsby";
import { SocialIcon } from "../social-icon";
import { Box, Flex } from "rebass";

const GlobalStyle = createGlobalStyle`
  body,
  #___gatsby {
    font-family: "Raleway", sans-serif;
    padding: 0px;
    margin: 0px;
    width: 100%;
    max-width: 100%;
  }
`;

const Header = styled(Flex)`
  height: 128px;
  margin-bottom: 40px;
  justify-content: flex-end;
  align-items: center;
  background-color: #fff;
`;

const MenuItem = styled(Link)<{ last?: boolean }>`
  color: initial;
  text-decoration: none;
  font-size: 19px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  margin-right: ${(props) => (props.last ? 0 : 29)}px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Footer = styled(Flex)`
  margin: 122px 0;
  justify-content: center;
`;

const FooterEmail = styled.a`
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  color: ${(props) => props.theme.primary};
`;

interface LayoutProps {
  children: ReactNode;
  linkedinSvgUrl: string;
  emailSvgUrl: string;
}

export const Layout = ({
  children,
  linkedinSvgUrl,
  emailSvgUrl,
}: LayoutProps) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{ primary: "#EA4AC5" }}>
        <Header px={["24px", "36px", "75px"]}>
          <MenuItem
            activeStyle={{ color: "#EA4AC5", textDecoration: "underline" }}
            to="/"
          >
            work
          </MenuItem>
          <MenuItem
            activeStyle={{ color: "#EA4AC5", textDecoration: "underline" }}
            last
            to="/about/"
          >
            about
          </MenuItem>
        </Header>
        <Content>{children}</Content>
        <Footer
          width="100%"
          flexDirection={["column", "column", "row"]}
          alignItems={["center"]}
          mt="60px"
          mb="80px"
        >
          <Box mr={["0px", "0px", "49px"]} mb={["16px", "16px", "0px"]}>
            <FooterEmail href="mailto:gatticristina99@gmail.com">
              gatticristina99@gmail.com
            </FooterEmail>
          </Box>
          <Flex flexDirection={["row", "row", "column"]}>
            <Box mr={["18px", "18px", "0px"]} mb={["0px", "0px", "18px"]}>
              <SocialIcon
                href="https://www.linkedin.com/in/cristinagatti99/"
                imageUrl={linkedinSvgUrl}
              />
            </Box>
            <SocialIcon
              href="mailto:gatticristina99@gmail"
              imageUrl={emailSvgUrl}
            />
          </Flex>
        </Footer>
      </ThemeProvider>
    </>
  );
};
