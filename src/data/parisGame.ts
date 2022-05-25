const parisGame = {
  name: "paris",
  displayName: "Paris",
  color: "#f94910",
  gameImage: require("../assets/images/paris/paris.jpg"),
  gameIsActive: false,
  items: [
    {
      name: "brie",
      text: "Brie",
      image: require("../assets/images/paris/brie.jpg"),
      isFound: false
    },
    {
      name: "fleurdelis",
      text: "Fleur De Lis",
      image: require("../assets/images/paris/fleurdelis.jpg"),
      isFound: false
    },
    {
      name: "monalisa",
      text: "Mona Lisa",
      image: require("../assets/images/paris/monalisa.jpg"),
      isFound: false
    },
    {
      name: "tophat",
      text: "Tophat",
      image: require("../assets/images/paris/tophat.jpg"),
      isFound: false
    },
  ],
};

export default parisGame;
