import { useState } from "react";
import { Header } from "./components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./shared-styles/GlobalStyles.styles";
import { theme } from "./shared-styles/theme";
import { Footer } from "./components/Footer";
import { allGames } from "./data/allGames";
import { Home } from "./components/Home";
import { useGetUserData } from "./custom-hooks/useGetUserData";
import { Leaderboard } from "./components/Leaderboard";
import { Game } from "./components/Game";
function App() {
  const { userData } = useGetUserData();
  const [gameIsActive, setGameIsActive] = useState(false);
  const [currentGame, setCurrentGame] = useState<any>(null);
  const [time, setTime] = useState(0);
  const [userId, setUserId] = useState("");
  const [currentLeaderboard, setCurrentLeaderboard] = useState("");

  function handleCurrentGame(event: React.MouseEvent<HTMLDivElement>) {
    allGames.forEach((e) => {
      if (event !== null && event.target instanceof HTMLElement) {
        if (e.name === event.target.dataset.id) {
          setCurrentGame(e);
          e.gameIsActive = true;
          setGameIsActive(true);
        }
      }
    });
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header
        gameIsActive={gameIsActive}
        currentGame={currentGame}
        time={time}
        setTime={setTime}
        userId={userId}
        setUserId={setUserId}
        currentLeaderboard={currentLeaderboard}
        setCurrentLeaderboard={setCurrentLeaderboard}
      />
      {!currentGame && !currentLeaderboard && (
        <Home currentGame={currentGame} handleCurrentGame={handleCurrentGame} />
      )}
      {currentGame && !currentLeaderboard && (
        <Game
          currentGame={currentGame}
          setCurrentGame={setCurrentGame}
          gameIsActive={gameIsActive}
          setGameIsActive={setGameIsActive}
          handleCurrentGame={handleCurrentGame}
          userData={userData}
          time={time}
          setTime={setTime}
          userId={userId}
          setUserId={setUserId}
        />
      )}
      {currentLeaderboard && (
        <Leaderboard
          userData={userData}
          currentLeaderboard={currentLeaderboard}
        />
      )}
      <Footer />
    </ThemeProvider>
  );
}

export default App;
