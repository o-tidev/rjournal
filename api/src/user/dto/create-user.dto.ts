import { IsEmail } from 'class-validator';

export class CreateUserDto {
  fullname: string;

  @IsEmail()
  email: string;
  password?: string;
}
