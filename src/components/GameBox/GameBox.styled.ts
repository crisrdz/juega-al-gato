import { styled } from "styled-components";
import { colors } from "../../styles/global.styled";
import GameBox from "./GameBox";

export const GameBoxStyled = styled(GameBox)`
  background-color: ${({ option }) => option.marked ? colors.secondaryLight : colors.primaryLight};
  border: 2px solid black;
  border-radius: 1rem;
  box-shadow: 0 0 2px 0 ${colors.primary};
  cursor: pointer;
  transition: all ease 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;

  &:hover {
    background-color: ${colors.secondaryLight};
    box-shadow: 0 0 5px 0 ${colors.primary};
  }
`;