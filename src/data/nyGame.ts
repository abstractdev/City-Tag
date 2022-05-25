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
      isFound: false
    },
    {
      name: "hotdog",
      text: "Hot Dog Vendor",
      image: require("../assets/images/ny/hotdog.jpg"),
      isFound: false
    },
    {
      name: "iloveny",
      text: "I Love NY",
      image: require("../assets/images/ny/iloveny.jpg"),
      isFound: false
    },
    {
      name: "police",
      text: "NYPD Officer",
      image: require("../assets/images/ny/police.jpg"),
      isFound: false
    },
  ],
};

export default nyGame;
