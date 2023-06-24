import styled from "styled-components";
import { colors } from "../../styles/global.styled";

const gameSize = "22rem";

export const GameContainer = styled.div`
  width: ${gameSize};
  height: ${gameSize};
  max-width: 80%;
  margin: 1rem auto;
  background-color: ${colors.primaryLight};
  padding: 1rem;
  border: 2px solid ${colors.secondary};
  border-radius: 1rem;
  box-shadow: 0 0 6px 3px black;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem;
`;

export const GameWinner = styled.div`
  color: ${colors.primaryLight};
  font-size: 1.5rem;
  border: 1px solid ${colors.secondaryLight};
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  width: max-content;
  margin: 1rem auto;
  box-shadow: 0 0 2px 1px ${colors.tertiary};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

export const Button = styled.button<{ $resetButton? : boolean }>`
  cursor: pointer;
  background-color: ${ props => props.$resetButton ? "beige" : colors.primaryLight };
  border: 1px solid ${colors.secondary};
  border-radius: 1rem;
  width: max-content;
  display: flex;
  font-size: 0.9rem;
  padding: 0.3rem 0.6rem;
  box-shadow: 0 0 4px 2px black;
  transition: all ease 0.3s;
  font-family: 'Gloria Hallelujah', cursive;

  &:hover {
    box-shadow: 0 0 8px 4px black;
    background-color: ${ props => props.$resetButton ? "bisque" : colors.secondaryLight };
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
  }
`;