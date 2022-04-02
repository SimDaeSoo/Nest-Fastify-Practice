import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board, BOARD_STATUS } from './board.model';

@Controller('boards')
export class BoardsController {
  private boardsService: BoardsService;

  constructor(boardsService: BoardsService) {
    this.boardsService = boardsService;
  }

  @Get('/')
  public findMany(): Array<Board> {
    return this.boardsService.findMany();
  }

  @Post('/')
  public create(
    @Body('id') id?: number,
    @Body('title') title?: string,
    @Body('description') description?: string,
    @Body('status') status?: BOARD_STATUS,
  ): Board {
    return this.boardsService.create({
      ...(id !== undefined && { id }),
      ...(title !== undefined && { title }),
      ...(description !== undefined && { description }),
      ...(status !== undefined && { status }),
    });
  }
}
