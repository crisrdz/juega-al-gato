import styled from "styled-components";
import { colors } from "../../styles/global.styled";

export const BoxPuntuation = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin: 0;
  color: #E0FBFC;
`;

export const WinCounter = styled.div`
  margin: 0.5rem 1rem;
  height: max-content;
  color: ${colors.primaryLight};
`;