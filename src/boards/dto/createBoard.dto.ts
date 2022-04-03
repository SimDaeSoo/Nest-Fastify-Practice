import { IsInt, IsNotEmpty } from 'class-validator';
import { BOARD_STATUS } from 'interfaces';

export class CreateBoardDTO {
  @IsNotEmpty()
  @IsInt()
  id: number;

  @IsNotEmpty()
  public title: string;

  @IsNotEmpty()
  public description: string;
  public status: BOARD_STATUS = BOARD_STATUS.PUBLIC;
}
