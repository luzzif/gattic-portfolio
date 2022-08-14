import React, { ReactNode, useCallback, useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";
import { SocialIcon } from "../social-icon";
import { Box, Flex } from "rebass";
import "./layout.css";

const Header = styled(Flex)<{
  noHeaderSpacing?: boolean;
  dark?: boolean;
  hero?: boolean;
}>`
  height: ${(props) => (props.dark ? "80px" : "128px")};
  width: 100%;
  position: ${(props) => (props.noHeaderSpacing ? "fixed" : "relative")};
  margin-bottom: ${(props) => (props.noHeaderSpacing ? "0px" : "40px")};
  align-items: center;
  z-index: 100;
  transition: background-color ease 0.2s;
  ${(props) =>
    !props.hero &&
    props.dark &&
    css`
      background-color: #161616;
    `}
`;

const MenuItem = styled(Link)<{ last?: boolean; dark?: boolean }>`
  color: ${(props) => (props.dark ? "#fff" : "initial")};
  text-decoration: none;
  font-size: 19px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  margin-right: ${(props) => (props.last ? 0 : 29)}px;
`;

const DownloadableMenuItem = styled.a<{ last?: boolean; dark?: boolean }>`
  color: ${(props) => (props.dark ? "#fff" : "initial")};
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

const Footer = styled(Flex)<{ dark?: boolean }>`
  background-color: ${(props) => (props.dark ? "#161616" : "initial")};
  padding: 122px 0;
  justify-content: center;
`;

const FooterEmail = styled.a<{ dark?: boolean }>`
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  color: ${(props) => (props.dark ? "#fff" : "#000")};
`;

interface LayoutProps {
  children: ReactNode;
  linkedinSvgUrl: string;
  behanceSvgUrl: string;
  logoSvgUrl: string;
  hideSocials?: boolean;
  noHeaderSpacing?: boolean;
  dark?: boolean;
}

export const Layout = ({
  children,
  linkedinSvgUrl,
  behanceSvgUrl,
  hideSocials,
  noHeaderSpacing,
  dark,
}: LayoutProps) => {
  const [hero, setHero] = useState(
    !(typeof window !== "undefined" && !window.scrollY)
  );

  const handleScroll = useCallback(() => {
    setHero(!window.scrollY);
  }, [window.scrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header
        px={["24px", "36px", "75px"]}
        justifyContent="flex-end"
        noHeaderSpacing={noHeaderSpacing}
        dark={dark}
        hero={hero}
      >
        <MenuItem
          dark={dark}
          activeStyle={{ color: "#EA4AC5", textDecoration: "underline" }}
          to="/"
        >
          work
        </MenuItem>
        <MenuItem
          dark={dark}
          activeStyle={{ color: "#EA4AC5", textDecoration: "underline" }}
          to="/about/"
        >
          about
        </MenuItem>
        <DownloadableMenuItem
          dark={dark}
          last
          target="_blank"
          rel="noopener noreferrer"
          href="/cristina-gatti-resume.pdf"
        >
          resume
        </DownloadableMenuItem>
      </Header>
      <Content>{children}</Content>
      <Footer
        dark={dark}
        width="100%"
        flexDirection={["column", "column", "row"]}
        alignItems={["center"]}
        pt="60px"
        pb="80px"
      >
        <Box
          mr={hideSocials ? "0px" : ["0px", "0px", "49px"]}
          mb={hideSocials ? "0px" : ["16px", "16px", "0px"]}
        >
          <FooterEmail dark={dark} href="mailto:gatticristina99@gmail.com">
            gatticristina99@gmail.com
          </FooterEmail>
        </Box>
        {!hideSocials && (
          <Flex flexDirection={["row", "row", "row"]}>
            <Box
              mr={["18px", "18px", "18px"]} /* mb={["18px", "18px", "0px"]} */
            >
              <SocialIcon
                href="https://www.linkedin.com/in/cristinagatti99/"
                imageUrl={linkedinSvgUrl}
              />
            </Box>
            <SocialIcon
              href="https://www.behance.net/cristinagatti1"
              imageUrl={behanceSvgUrl}
            />
          </Flex>
        )}
      </Footer>
    </>
  );
};
