export enum BOARD_STATUS {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}

export class Board {
  id: number;
  title: string;
  description: string;
  status: BOARD_STATUS;
}
