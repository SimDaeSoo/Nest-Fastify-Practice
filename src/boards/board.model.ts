export enum BOARD_STATUS {
  PUBLIC,
  PRIVATE,
}

export interface Board {
  id: number;
  title: string;
  description: string;
  status: BOARD_STATUS;
}
