import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
import { IsNotEmpty } from "class-validator";


@Entity()
@Unique(['userName'])
export class User{

  @PrimaryGeneratedColumn()
  id: number

  @Column({unique:true})
  @IsNotEmpty()
    //you can add validate for the column here such as @IsEmail(),...
  userName: string

  @Column()
  @IsNotEmpty()
  email: string

  @Column()
  @IsNotEmpty()
  password: string
}