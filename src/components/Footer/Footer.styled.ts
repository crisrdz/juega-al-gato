import { styled } from "styled-components";
import { colors } from "../../styles/global.styled";

export const StyledFooter = styled.footer`
  margin-top: 2rem;
  border-top: 1px solid ${colors.secondary};
  color: ${colors.tertiary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 6rem;
  font-size: 0.85rem;
`;

export const LinksContainer = styled.div`
  display: flex;
  height: max-content;
  gap: 0.3rem;
`;

export const Link = styled.a`
  display: flex;
  color: ${colors.tertiary};
  font-size: 1.3rem;
`;
