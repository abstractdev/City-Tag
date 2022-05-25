export interface stylesInterface {
  filteredCityColor?: string;
  filteredCityFont?: string;
  boardIsClicked?: boolean;
  targetPosition?: number[];
  dropdownPosition?: number[];
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
  } | null;
}
