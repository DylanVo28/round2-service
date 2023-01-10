import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { IsNotEmpty, Length } from "class-validator";
import { User } from "./user.entity";
import { JoinTable } from "typeorm";


@Entity()
export class Movie{

  @PrimaryGeneratedColumn()
  id: number

  @Column({length: 50})
  @IsNotEmpty()
  title: string

  @Column()
  image:string

  //
  @ManyToMany(type => User, user=>user.movies)
  @JoinTable()
  likes: User[]
}