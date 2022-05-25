export interface propsInterface {
  name?: string;
  gameIsActive?: boolean;
  currentGame?: {
    name: string;
    displayName: string;
    color: string;
    gameImage: any;
    gameIsActive: boolean;
    items: [
      {
        name: string;
        text: string;
        image: any;
        isFound: boolean;
      },
      {
        name: string;
        text: string;
        image: any;
        isFound: boolean;
      },
      {
        name: string;
        text: string;
        image: any;
        isFound: boolean;
      },
      {
        name: string;
        text: string;
        image: any;
        isFound: boolean;
      }
    ];
  } | null;
  setCurrentGame?: (
    currentGame: {
      name: string;
      displayName: string;
      color: string;
      gameImage: any;
      gameIsActive: boolean;
      items: [
        {
          name: string;
          text: string;
          image: any;
          isFound: boolean;
        },
        {
          name: string;
          text: string;
          image: any;
          isFound: boolean;
        },
        {
          name: string;
          text: string;
          image: any;
          isFound: boolean;
        },
        {
          name: string;
          text: string;
          image: any;
          isFound: boolean;
        }
      ];
    } | null
  ) => void;

  handleCurrentGame?: (event: React.MouseEvent<HTMLDivElement>) => void;
  userData?: any[];
  setUserData?: (userData: any[]) => void;
  nyLeaderboardIsClicked?: boolean;
  rioLeaderboardIsClicked?: boolean;
  tokyoLeaderboardIsClicked?: boolean;
  parisLeaderboardIsClicked?: boolean;
  setNyLeaderboardIsClicked?: (nyLeaderboardIsClicked: boolean) => void;
  setRioLeaderboardIsClicked?: (rioLeaderboardIsClicked: boolean) => void;
  setTokyoLeaderboardIsClicked?: (tokyoLeaderboardIsClicked: boolean) => void;
  setParisLeaderboardIsClicked?: (parisLeaderboardIsClicked: boolean) => void;
}
