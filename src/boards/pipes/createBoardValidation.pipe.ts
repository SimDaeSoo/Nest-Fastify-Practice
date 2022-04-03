import { ArgumentMetadata, PipeTransform } from '@nestjs/common';

export class CreateBoardValidationPipe implements PipeTransform {
  public transform(value: any, metadata: ArgumentMetadata): any {
    console.log(value);
    console.log(metadata);

    return value;
  }
}
