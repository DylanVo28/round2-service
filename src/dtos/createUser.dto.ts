import { IsNotEmpty } from "class-validator";

export class CreateUserDto{
  @IsNotEmpty()
    //you can add validate length such as @Length(6,20)
  userName: string

  @IsNotEmpty()
    //you can add validate length such as @Length(6,20)
  email: string

  @IsNotEmpty()
  password: string
}