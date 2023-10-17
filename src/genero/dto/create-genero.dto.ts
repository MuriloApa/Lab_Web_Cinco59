import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateGeneroDto {
  @ApiProperty()
  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  nome: string;
}
