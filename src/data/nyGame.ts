import styled from "styled-components";

const nyDiv = styled.div`
  position: absolute;
  border: 5px solid ${({ theme }) => theme.colors.ny};
  outline: 3px solid ${({ theme }) => theme.colors.main};
  @media screen and (max-width: 670px) {
    border: 2px solid ${({ theme }) => theme.colors.ny};
    outline: 1px solid ${({ theme }) => theme.colors.main};
  }
  border-radius: 5px;
`;
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
      div: styled(nyDiv)`
        width: 7%;
        height: 6.2%;
        left: 53.5%;
        bottom: 84.2%;
      `,
    },
    {
      name: "hotdog",
      text: "Hot Dog Vendor",
      image: require("../assets/images/ny/hotdog.jpg"),
      isFound: false,
      div: styled(nyDiv)`
        width: 3%;
        height: 9.3%;
        left: 15.4%;
        bottom: 32%;
      `,
    },
    {
      name: "iloveny",
      text: "I Love NY",
      image: require("../assets/images/ny/iloveny.jpg"),
      isFound: false,
      div: styled(nyDiv)`
        width: 3.1%;
        height: 8.7%;
        left: 45.9%;
        bottom: 42%;
      `,
    },
    {
      name: "police",
      text: "NYPD Officer",
      image: require("../assets/images/ny/police.jpg"),
      isFound: false,
      div: styled(nyDiv)`
        width: 3%;
        height: 8%;
        left: 52%;
        bottom: 61%;
      `,
    },
  ],
};

export default nyGame;
