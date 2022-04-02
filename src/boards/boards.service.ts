import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
  private boards = [
    {
      title: 'board title 1',
      content: 'board content 1',
    },
  ];

  public async findMany(): Promise<Array<any>> {
    return this.boards;
  }
}
