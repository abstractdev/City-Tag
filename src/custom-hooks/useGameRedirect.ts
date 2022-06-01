import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { nyGame, rioGame, tokyoGame, parisGame } from "../data";

export function useGameRedirect(
  currentGame: any,
  setCurrentGame: any,
  setGameIsActive: any
) {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/game/ny" && !currentGame) {
      navigate("/");
      setCurrentGame(nyGame);
      setGameIsActive(true);
      navigate("/game/ny");
    } else if (location.pathname === "/game/rio" && !currentGame) {
      navigate("/");
      setCurrentGame(rioGame);
      setGameIsActive(true);
      navigate("/game/rio");
    } else if (location.pathname === "/game/tokyo" && !currentGame) {
      navigate("/");
      setCurrentGame(tokyoGame);
      setGameIsActive(true);
      navigate("/game/tokyo");
    } else if (location.pathname === "/game/paris" && !currentGame) {
      navigate("/");
      setCurrentGame(parisGame);
      setGameIsActive(true);
      navigate("/game/paris");
    }
  }, [location, currentGame]);
}
