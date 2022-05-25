const rioGame = {
  name: "rio",
  displayName: "Rio",
  color: "#00ad73",
  gameImage: require("../assets/images/rio/rio.jpg"),
  gameIsActive: false,
  items: [
    {
      name: "dancer",
      text: "Dancer",
      image: require("../assets/images/rio/dancer.jpg"),
      isFound: false
    },
    {
      name: "flag",
      text: "Flag",
      image: require("../assets/images/rio/flag.jpg"),
      isFound: false
    },
    {
      name: "tambourine",
      text: "Tambourine",
      image: require("../assets/images/rio/tambourine.jpg"),
      isFound: false
    },
    {
      name: "soccer",
      text: "Soccer ball",
      image: require("../assets/images/rio/soccer.jpg"),
      isFound: false
    },
  ],
};

export default rioGame;
