import React, { ReactNode } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { SocialIcon } from "../social-icon";
import { Box, Flex } from "rebass";
import "./layout.css";

const Header = styled(Flex)`
  height: 128px;
  margin-bottom: 40px;
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

const DownloadableMenuItem = styled.a<{ last?: boolean }>`
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
  color: #000;
`;

interface LayoutProps {
  children: ReactNode;
  linkedinSvgUrl: string;
  behanceSvgUrl: string;
  logoSvgUrl: string;
  hideSocials?: boolean;
}

export const Layout = ({
  children,
  linkedinSvgUrl,
  behanceSvgUrl,
  hideSocials,
}: LayoutProps) => {
  return (
    <>
      <Header px={["24px", "36px", "75px"]} justifyContent="flex-end">
        <MenuItem
          activeStyle={{ color: "#EA4AC5", textDecoration: "underline" }}
          to="/"
        >
          work
        </MenuItem>
        <MenuItem
          activeStyle={{ color: "#EA4AC5", textDecoration: "underline" }}
          to="/about/"
        >
          about
        </MenuItem>
        <DownloadableMenuItem
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
        width="100%"
        flexDirection={["column", "column", "row"]}
        alignItems={["center"]}
        mt="60px"
        mb="80px"
      >
        <Box
          mr={hideSocials ? "0px" : ["0px", "0px", "49px"]}
          mb={hideSocials ? "0px" : ["16px", "16px", "0px"]}
        >
          <FooterEmail href="mailto:gatticristina99@gmail.com">
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
