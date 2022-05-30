export interface propsInterface {
  name?: string;
  gameIsActive?: boolean;
  setGameIsActive?: (gameIsActive: boolean) => void;
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
        div: any;
      },
      {
        name: string;
        text: string;
        image: any;
        isFound: boolean;
        div: any;
      },
      {
        name: string;
        text: string;
        image: any;
        isFound: boolean;
        div: any;
      },
      {
        name: string;
        text: string;
        image: any;
        isFound: boolean;
        div: any;
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
          div: any;
        },
        {
          name: string;
          text: string;
          image: any;
          isFound: boolean;
          div: any;
        },
        {
          name: string;
          text: string;
          image: any;
          isFound: boolean;
          div: any;
        },
        {
          name: string;
          text: string;
          image: any;
          isFound: boolean;
          div: any;
        }
      ];
    } | null
  ) => void;

  handleCurrentGame?: (event: React.MouseEvent<HTMLDivElement>) => void;
  userData?: any[];
  setUserData?: (userData: any[]) => void;
  userModalIsVisible?: boolean;
  setUserModalIsVisible?: (userModalIsVisible: boolean) => void;
  leaderboardModalIsVisible?: boolean;
  setLeaderboardModalIsVisible?: (leaderboardModalIsVisible: boolean) => void;
  time?: number;
  setTime?: any;
  currentGameUserData?: any[];
  setCurrentGameUserData?: (currentGameUserData: any[]) => void;
  userId?: string;
  setUserId?: (userId: string) => void;
  timeErrorSpanIsVisible?: boolean;
  setTimeErrorSpanIsVisible?: (timeErrorSpanIsVisible: boolean) => void;
}
