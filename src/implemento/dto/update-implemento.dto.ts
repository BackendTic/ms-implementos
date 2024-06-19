import { PartialType } from '@nestjs/mapped-types';
import { CreateImplementoDto } from './create-implemento.dto';
import { IsUUID } from 'class-validator';

export class UpdateImplementoDto extends PartialType(CreateImplementoDto) {
  @IsUUID()
  id: string;
}
