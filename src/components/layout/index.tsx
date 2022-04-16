import React, { ReactNode } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { graphql, Link } from "gatsby";
import { SocialIcon } from "../social-icon";

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

const Header = styled.div`
  display: flex;
  height: 128px;
  margin-bottom: 40px;
  justify-content: flex-end;
  align-items: center;
  background-color: #fff;
  padding: 0 75px;
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

const Footer = styled.div`
  display: flex;
  margin: 122px 0;
  justify-content: center;
`;

const FooterEmail = styled.a`
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  color: ${(props) => props.theme.primary};
  margin-right: 49px;
`;

const FirstSocialIcon = styled(SocialIcon)`
  margin-right: 18px;
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
        <Header>
          <MenuItem to="/">work</MenuItem>
          <MenuItem last to="/about">
            about
          </MenuItem>
        </Header>
        <Content>{children}</Content>
        <Footer>
          <FooterEmail href="mailto:gatticristina99@gmail.com">
            gatticristina99@gmail.com
          </FooterEmail>
          <FirstSocialIcon imageUrl={linkedinSvgUrl} />
          <SocialIcon imageUrl={emailSvgUrl} />
        </Footer>
      </ThemeProvider>
    </>
  );
};
