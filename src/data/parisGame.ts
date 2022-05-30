import {
  BrieDiv,
  FleurDiv,
  MonaLisaDiv,
  TophatDiv,
} from "../shared-styles/parisItemDivs.styles";

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
      isFound: false,
      div: BrieDiv,
    },
    {
      name: "fleurdelis",
      text: "Fleur De Lis",
      image: require("../assets/images/paris/fleurdelis.jpg"),
      isFound: false,
      div: FleurDiv,
    },
    {
      name: "monalisa",
      text: "Mona Lisa",
      image: require("../assets/images/paris/monalisa.jpg"),
      isFound: false,
      div: MonaLisaDiv,
    },
    {
      name: "tophat",
      text: "Tophat",
      image: require("../assets/images/paris/tophat.jpg"),
      isFound: false,
      div: TophatDiv,
    },
  ],
};

export default parisGame;
