import {
  DancerDiv,
  FlagDiv,
  SoccerDiv,
  TambourineDiv,
} from "../shared-styles/rioItemDivs.styles";

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
      isFound: false,
      div: DancerDiv,
    },
    {
      name: "flag",
      text: "Flag",
      image: require("../assets/images/rio/flag.jpg"),
      isFound: false,
      div: FlagDiv,
    },
    {
      name: "tambourine",
      text: "Tambourine",
      image: require("../assets/images/rio/tambourine.jpg"),
      isFound: false,
      div: TambourineDiv,
    },
    {
      name: "soccer",
      text: "Soccer Ball",
      image: require("../assets/images/rio/soccer.jpg"),
      isFound: false,
      div: SoccerDiv,
    },
  ],
};

export default rioGame;
