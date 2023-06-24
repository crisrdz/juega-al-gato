import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { Page } from "./App.styled";

function App() {
  const [wins, setWins] = useState({X: 0, O: 0});

  useEffect(() => {
    let winsSaved = localStorage.getItem("wins");
    if(winsSaved) {
      setWins(JSON.parse(winsSaved));
    } else {
      winsSaved = JSON.stringify(wins);
      localStorage.setItem("wins", winsSaved);
      setWins(JSON.parse(winsSaved));
    }
  }, []);

  return (
    <Page>
      <Header wins={wins} />
      <Main wins={wins} setWins={setWins} />
      <Footer />
    </Page>
  );
}

export default App;
