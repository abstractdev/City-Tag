export interface propsInterface {
  name?: string;
  gameIsActive?: boolean;
  currentGame?:
    | {
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
      }
    | undefined;
  setCurrentGame?: (
    currentGame:
      | {
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
        }
      | undefined
  ) => void;

  handleCurrentGame?: (event: any) => void;

  userData?:
    | [
        {
          id: string;
          name: string;
          displayTime: string;
          time: number;
        }
      ]
    | [{}];

  setUserData?: (
    userData:
      | [
          {
            id: string;
            name: string;
            displayTime: string;
            time: number;
          }
        ]
      | [{}]
  ) => void;
}
