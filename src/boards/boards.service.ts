import { Injectable, NotFoundException } from '@nestjs/common';
import { Board } from '../../interfaces';
import { CreateBoardDTO } from './dto/createBoard.dto';
import { UpdateBoardDTO } from './dto/updateBoard.dto';

@Injectable()
export class BoardsService {
  private id = 0;
  private boards: Record<number, Board> = {};

  public findMany(): Array<Board> {
    return Object.keys(this.boards).map((key) => this.boards[key]);
  }

  public findOne(id: number): Board {
    if (!this.boards[id]) {
      throw new NotFoundException();
    } else {
      return this.boards[id];
    }
  }

  public delete(id: number): Board {
    if (!this.boards[id]) {
      throw new NotFoundException();
    } else {
      const deletedBoard: Board = this.boards[id];

      delete this.boards[id];

      return deletedBoard;
    }
  }

  public create(createBoardData: CreateBoardDTO): Board {
    this.boards[createBoardData.id] = createBoardData;

    return createBoardData;
  }

  public update(id: number, updateBoardData: UpdateBoardDTO): Board {
    if (!this.boards[id]) {
      throw new NotFoundException();
    } else {
      for (const key in updateBoardData) {
        this.boards[id][key] = updateBoardData[key];
      }

      return this.boards[id];
    }
  }
}
