import { IsNotEmpty } from 'class-validator';
import { BOARD_STATUS } from 'interfaces';

export class UpdateBoardDTO {
  @IsNotEmpty()
  public title?: string;

  @IsNotEmpty()
  public description?: string;

  @IsNotEmpty()
  public status?: BOARD_STATUS;
}
