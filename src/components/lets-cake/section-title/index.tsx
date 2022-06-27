import styled from "styled-components";

export const SectionTitle = styled.div<{
  color: string;
  backgroundColor: string;
}>`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border-radius: 20px;
  padding: 16px 24px;
  font-family: Raleway;
  font-size: 30px;
  font-weight: 700;
  line-height: 35px;
  letter-spacing: 0em;
  text-transform: uppercase;
  text-align: center;
`;
