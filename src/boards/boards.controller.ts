import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from '../../interfaces';
import { UpdateBoardDTO } from './dto/updateBoard.dto';
import { CreateBoardDTO } from './dto/createBoard.dto';

@Controller('boards')
export class BoardsController {
  private boardsService: BoardsService;

  constructor(boardsService: BoardsService) {
    this.boardsService = boardsService;
  }

  @Get()
  public findMany(): Array<Board> {
    return this.boardsService.findMany();
  }

  @Get(':id')
  public findOne(@Param('id', ParseIntPipe) id: number): Board {
    return this.boardsService.findOne(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  public create(@Body() createBoardData: CreateBoardDTO): Board {
    return this.boardsService.create(createBoardData);
  }

  @Put(':id')
  @UsePipes(ValidationPipe)
  public update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBoardData?: UpdateBoardDTO,
  ): Board {
    return this.boardsService.update(id, updateBoardData);
  }

  @Delete(':id')
  public delete(@Param('id', ParseIntPipe) id: number): Board {
    return this.boardsService.delete(id);
  }
}
