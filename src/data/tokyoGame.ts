const tokyoGame = {
  name: "tokyo",
  displayName: "Tokyo",
  color: "#d78ebf",
  gameImage: require("../assets/images/tokyo/tokyo.jpg"),
  gameIsActive: false,
  items: [
    {
      name: "geisha",
      text: "Geisha",
      image: require("../assets/images/tokyo/geisha.jpg"),
      isFound: false
    },
    {
      name: "parasol",
      text: "Parasol",
      image: require("../assets/images/tokyo/parasol.jpg"),
      isFound: false
    },
    {
      name: "sumo",
      text: "Sumo Wrestler",
      image: require("../assets/images/tokyo/sumo.jpg"),
      isFound: false
    },
    {
      name: "sushi",
      text: "Sushi",
      image: require("../assets/images/tokyo/sushi.jpg"),
      isFound: false
    },
  ],
};

export default tokyoGame;
