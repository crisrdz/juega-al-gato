import { BoxPuntuation, Title, WinCounter } from "./Header.styled";

type Props = {
  wins: {X: number, O: number}
}

function Header({ wins } : Props) {
  return (
    <header>
      <BoxPuntuation>
        <WinCounter>Victorias X: {wins.X}</WinCounter>
        <WinCounter>Victorias O: {wins.O}</WinCounter>
      </BoxPuntuation>
      <Title>¡Juega al gato 🐈!</Title>
    </header>
  );
}

export default Header;
