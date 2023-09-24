import { IsString, MinLength, IsInt } from 'class-validator';
import { BaseEntity } from 'src/shared/entities';
import { Entity } from 'typeorm';

@Entity()
export class Cargo extends BaseEntity {
  @IsString()
  @MinLength(3)
  nome: string;

  @IsString()
  @MinLength(2)
  sigla: string;

  @IsInt()
  ordenacaoForcada: number;
}
