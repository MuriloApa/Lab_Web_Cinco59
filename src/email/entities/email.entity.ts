import { IsEmail } from 'class-validator';
import { BaseEntity } from 'src/shared/entities';
import { Entity } from 'typeorm';

@Entity()
export class Email extends BaseEntity {
  @IsEmail()
  endereco: string;
}
