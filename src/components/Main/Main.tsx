import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { GameBoxStyled } from "../GameBox/GameBox.styled";
import { Button, ButtonsContainer, GameContainer, GameWinner } from "./Main.styled";
import { Option } from "../../models/Option";
import { Mark } from "../../models/Mark";

type Props = {
  wins: { X: number; O: number };
  setWins: Dispatch<SetStateAction<{ X: number; O: number }>>;
};

function Main({ wins, setWins }: Props) {
  const defaultOptions = [
    [new Option(), new Option(), new Option()],
    [new Option(), new Option(), new Option()],
    [new Option(), new Option(), new Option()],
  ];
  const [winner, setWinner] = useState("");
  const [previousOption, setPreviousOption] = useState<Mark>(Mark.O);
  const [options, setOptions] = useState<Option[][]>(defaultOptions);

  useEffect(() => {
    checkGame();
  }, [options]);

  function handleOption(row: number, column: number): void {
    const optionsCopy = structuredClone(options);
    const option = previousOption === Mark.O ? Mark.X : Mark.O;
    optionsCopy[row][column] = {
      marked: true,
      option,
    };
    previousOption === Mark.O
      ? setPreviousOption(Mark.X)
      : setPreviousOption(Mark.O);

    setOptions(optionsCopy);
  }

  function checkGame(): void {
    const vertical: { [key: string]: number } = {};
    const diagonal: { [key: string]: number } = {};

    for (let i = 0; i < options.length; i++) {
      const horizontal: { [key: string]: number } = {
        O: 0,
        X: 0,
      };
      for (let j = 0; j < options[i].length; j++) {
        const option = options[i][j].option;
        if (option) {
          const verticalOption = `${option}${j}`;
          vertical[verticalOption]
            ? vertical[verticalOption]++
            : (vertical[verticalOption] = 1);
          horizontal[option]++;

          if (i === j) {
            const diagonalOption = `${option}principal`;
            diagonal[diagonalOption]
              ? diagonal[diagonalOption]++
              : (diagonal[diagonalOption] = 1);
          }

          if (i + j === options.length - 1) {
            const diagonalOption = `${option}secundaria`;
            diagonal[diagonalOption]
              ? diagonal[diagonalOption]++
              : (diagonal[diagonalOption] = 1);
          }
        }
      }

      checkWinner(horizontal);
    }

    checkWinner(vertical);
    checkWinner(diagonal);
  }

  function checkWinner(optionsObject: { [key: string]: number }): void {
    for (const option in optionsObject) {
      if (optionsObject[option] === 3) {
        setWinner(option[0]);
        saveWinner(option[0]);
      }
    }
  }

  function saveWinner(winner: string): void {
    const winsCopy = { ...wins };
    winner === Mark.O ? winsCopy.O++ : winsCopy.X++;
    setWins(winsCopy);
    localStorage.setItem("wins", JSON.stringify(winsCopy));
  }

  function resetGame(): void {
    setWinner("");
    setOptions(defaultOptions);
    setPreviousOption(Mark.O);
  }

  function resetCounter(): void {
    if(confirm(`¿Estás seguro de que quieres reiniciar el contador (${wins.X}-${wins.O})`)) {
      const defaultWins = {
        X: 0,
        O: 0
      };
      setWins(defaultWins);
      localStorage.setItem("wins", JSON.stringify(defaultWins));
    }
  }

  return (
    <main>
      {winner && <GameWinner>El ganador es: {winner}</GameWinner>}
      <GameContainer>
        {options.map((optionsRow: Option[], row: number) =>
          optionsRow.map((option: Option, column: number) => (
            <GameBoxStyled
              option={option}
              onClick={() => !winner && handleOption(row, column)}
              key={`option[${row}][${column}]`}
            ></GameBoxStyled>
          ))
        )}
      </GameContainer>
      <ButtonsContainer>
        <Button onClick={resetGame}>Reiniciar juego</Button>
        <Button onClick={resetCounter} $resetButton={true}>Reiniciar contador</Button>
      </ButtonsContainer>
    </main>
  );
}

export default Main;
