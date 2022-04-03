import { IsByteLength, IsEnum, IsOptional, IsString } from 'class-validator';
import { BOARD_STATUS } from 'interfaces';

export class UpdateBoardDTO {
  @IsOptional()
  @IsString()
  @IsByteLength(0, 256)
  public title: string;

  @IsOptional()
  @IsString()
  @IsByteLength(0, 256)
  public description?: string;

  @IsOptional()
  @IsEnum(BOARD_STATUS)
  public status: BOARD_STATUS;
}
