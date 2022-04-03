import {
  IsByteLength,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { BOARD_STATUS } from 'interfaces';

export class CreateBoardDTO {
  @IsNotEmpty()
  @IsInt()
  id: number;

  @IsNotEmpty()
  @IsString()
  @IsByteLength(0, 256)
  public title: string;

  @IsOptional()
  @IsString()
  @IsByteLength(0, 256)
  public description = '';

  @IsEnum(BOARD_STATUS)
  public status: BOARD_STATUS = BOARD_STATUS.PUBLIC;
}
