import { allGames } from "../data/allGames";

export function getGameItemTextArr(currentGame: any) {
  const game = allGames.find((e) => {
    return e.name === currentGame.name;
  });
  return game?.items.map((e) => e.text);
}

//compare filtered firebase users with existing city object to find name and color
export function getFilteredCityProperties(userCity: string) {
  const filteredCityObject = allGames.find((e: any) => e.name === userCity);
  const filteredCityName = filteredCityObject?.displayName;
  const filteredCityColor = filteredCityObject?.color;
  const filteredCityFont = filteredCityObject?.name;
  return {
    filteredCityName,
    filteredCityColor,
    filteredCityFont,
  };
}

export function getAllGameImages() {
  const allGameImages = allGames.map((e) => {
    return {
      name: e.name,
      gameImage: e.gameImage,
    };
  });
  return allGameImages;
}
