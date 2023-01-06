import { IsNotEmpty } from "class-validator";


export class UserLoginDto{
  @IsNotEmpty()
    //you can add validate length such as @Length(6,20)
  userName: string

  @IsNotEmpty()
  password: string
}