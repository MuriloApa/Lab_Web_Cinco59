import { IsString, Length } from 'class-validator';
import { BaseEntity } from 'src/shared/entities';
import { Entity } from 'typeorm';

@Entity()
export class Endereco extends BaseEntity {
  @IsString()
  @Length(8, 8)
  CEP: string;

  @IsString()
  logradouro: string;
}
