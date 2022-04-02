import { Injectable } from '@nestjs/common';
import { Board, BOARD_STATUS } from './board.model';

@Injectable()
export class BoardsService {
  private boards: Array<Board> = [];

  public findMany(): Array<Board> {
    return this.boards;
  }

  public create(board: Partial<Board>): Board {
    const createdBoard: Board = {
      id: this.boards.length,
      title: '',
      description: '',
      status: BOARD_STATUS.PUBLIC,
      ...board,
    };

    this.boards.push(createdBoard);

    return createdBoard;
  }
}
