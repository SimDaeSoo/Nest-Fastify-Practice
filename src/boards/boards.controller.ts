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
import { CreateBoardDTO, UpdateBoardDTO } from './dto';

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
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  )
  public create(@Body() createBoardData: CreateBoardDTO): Board {
    return this.boardsService.create(createBoardData);
  }

  @Put(':id')
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )
  public update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBoardData: UpdateBoardDTO,
  ): Board {
    return this.boardsService.update(id, updateBoardData);
  }

  @Delete(':id')
  public delete(@Param('id', ParseIntPipe) id: number): Board {
    return this.boardsService.delete(id);
  }
}
