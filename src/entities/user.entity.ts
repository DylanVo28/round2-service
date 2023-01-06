import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { IsNotEmpty } from "class-validator";
import { Movie } from "./movie.entity";


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

  // many user - many vote like
  @ManyToMany(type => Movie, movie=>movie.likes)
  movies: Movie[]
}