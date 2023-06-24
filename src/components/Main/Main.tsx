import { Dispatch, SetStateAction } from "react";
import Game from "../Game/Game";

type Props = {
  wins: {X: number, O: number},
  setWins: Dispatch<SetStateAction<{ X: number; O: number }>>;
};

function Main({ wins, setWins }: Props) {
  return <Game wins={wins} setWins={setWins} />;
}

export default Main;
