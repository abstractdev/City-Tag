import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useResetGameState(
  setCurrentGame: any,
  setGameIsActive: (gameIsActive: boolean) => void,
  userId: string
) {
  const location = useLocation();
  useEffect(() => {
    if (
      location.pathname === "/" ||
      location.pathname === "/leaderboard/ny" ||
      location.pathname === "/leaderboard/rio" ||
      location.pathname === "/leaderboard/tokyo" ||
      location.pathname === "/leaderboard/paris"
    ) {
      setCurrentGame(null);
      setGameIsActive(false);
    }
  }, [location]);
}
