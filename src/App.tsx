import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./shared-styles/GlobalStyles.styles";
import { theme } from "./shared-styles/theme";
import { Footer } from "./components/Footer";
import { allGames } from "./data/allGames";
import { Home } from "./components/Home";
import { Route, Routes } from "react-router-dom";
import { useGetUserData } from "./custom-hooks/useGetUserData";
import { propsInterface } from "./interfaces/propsInterface";
import { Leaderboard } from "./components/Leaderboard";
import { Game } from "./components/Game";

function App() {
  const { userData } = useGetUserData();
  const [gameIsActive, setGameIsActive] = useState(false);
  const [currentGame, setCurrentGame] = useState<any>();

  function handleCurrentGame(event: any) {
    allGames.forEach((e) => {
      if (e.name === event.target.dataset.id) {
        setCurrentGame(e);
        e.gameIsActive = true;
      }
    });
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header gameIsActive={gameIsActive} currentGame={currentGame} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              currentGame={currentGame}
              handleCurrentGame={handleCurrentGame}
            />
          }
        />
        <Route
          path="/game/:city"
          element={
            <Game
              currentGame={currentGame}
              handleCurrentGame={handleCurrentGame}
            />
          }
        />
        <Route
          path="/leaderboard/:city"
          element={<Leaderboard userData={userData} />}
        />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
