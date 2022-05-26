import {
  BroadwayDiv,
  HotdogDiv,
  IlovenyDiv,
  PoliceDiv,
} from "../shared-styles/nyItemDivs.styles";

const nyGame = {
  name: "ny",
  displayName: "New York",
  color: "#f2c205",
  gameImage: require("../assets/images/ny/ny.jpg"),
  gameIsActive: false,
  items: [
    {
      name: "broadway",
      text: "Broadway Sign",
      image: require("../assets/images/ny/broadway.jpg"),
      isFound: false,
      div: BroadwayDiv,
    },
    {
      name: "hotdog",
      text: "Hot Dog Vendor",
      image: require("../assets/images/ny/hotdog.jpg"),
      isFound: false,
      div: HotdogDiv,
    },
    {
      name: "iloveny",
      text: "I Love NY",
      image: require("../assets/images/ny/iloveny.jpg"),
      isFound: false,
      div: IlovenyDiv,
    },
    {
      name: "police",
      text: "NYPD Officer",
      image: require("../assets/images/ny/police.jpg"),
      isFound: false,
      div: PoliceDiv,
    },
  ],
};

export default nyGame;
