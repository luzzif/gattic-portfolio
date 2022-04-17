import React from "react";
import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div<{ marginBottom?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: #f6f6f6;
  margin-bottom: ${(props) => (props.marginBottom ? 16 : 0)}px;
  box-shadow: -5px 5px 10px rgba(221, 221, 221, 0.2),
    5px -5px 10px rgba(221, 221, 221, 0.2),
    -5px -5px 10px rgba(255, 255, 255, 0.9),
    5px 5px 13px rgba(221, 221, 221, 0.9),
    inset 1px 1px 2px rgba(255, 255, 255, 0.3),
    inset -1px -1px 2px rgba(221, 221, 221, 0.5);
`;

const Content = styled.img`
  width: 16px;
  color: ${(props) => props.theme.primary};
`;

interface SocialIconProps {
  imageUrl: string;
  href: string;
  className?: any;
}

export const SocialIcon = ({ imageUrl, href, className }: SocialIconProps) => {
  return (
    <a target="_blank" href={href} rel="noopener noreferrer">
      <Container className={className}>
        <Content src={imageUrl} />
      </Container>
    </a>
  );
};
