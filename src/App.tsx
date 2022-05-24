import { useState } from "react";
import { Header } from "./components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./shared-styles/GlobalStyles.styles";
import { theme } from "./shared-styles/theme.styles";
import { Footer } from "./components/Footer";
import { allGames } from "./data/allGames";
import { Home } from "./components/Home";
import { Route, Routes } from "react-router-dom";

function App() {
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
          path="/city-tag"
          element={
            <Home
              currentGame={currentGame}
              handleCurrentGame={handleCurrentGame}
            />
          }
        />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
