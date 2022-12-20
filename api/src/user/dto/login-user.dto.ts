import { IsEmail, Length } from 'class-validator';

export class LoginUserDto {
  @IsEmail(undefined, { message: 'Email is not valid' })
  email: string;

  @Length(6, 20, { message: 'Password must be between 6 and 20 characters' })
  password: string;
}
