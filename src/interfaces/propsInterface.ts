export interface propsInterface {
  name?: string;
  gameIsActive?: boolean;
  currentGame?: {
    name: string;
    gameImage: any;
    gameIsActive: boolean;
    items: [
      {
        name: string;
        text: string;
        image: any;
      },
      {
        name: string;
        text: string;
        image: any;
      },
      {
        name: string;
        text: string;
        image: any;
      },
      {
        name: string;
        text: string;
        image: any;
      }
    ];
  };
  setCurrentGame?: (currentGame: any) => void;
  handleCurrentGame?: (event: any) => void;
  prevState?: undefined;
}
