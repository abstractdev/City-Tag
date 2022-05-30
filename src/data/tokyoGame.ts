import {
  GeishaDiv,
  ParasolDiv,
  SumoDiv,
  SushiDiv,
} from "../shared-styles/tokyoItemDiv.style";

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
      isFound: false,
      div: GeishaDiv,
    },
    {
      name: "parasol",
      text: "Parasol",
      image: require("../assets/images/tokyo/parasol.jpg"),
      isFound: false,
      div: ParasolDiv,
    },
    {
      name: "sumo",
      text: "Sumo Wrestler",
      image: require("../assets/images/tokyo/sumo.jpg"),
      isFound: false,
      div: SumoDiv,
    },
    {
      name: "sushi",
      text: "Sushi",
      image: require("../assets/images/tokyo/sushi.jpg"),
      isFound: false,
      div: SushiDiv,
    },
  ],
};

export default tokyoGame;
