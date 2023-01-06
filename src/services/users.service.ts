import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "../dtos/createUser.dto";
import { LoginUserDto } from "../dtos/loginUser.dto";
import * as jwt from 'jsonwebtoken';
import { UserInterface } from "../interfaces/user.interface";

@Injectable()
export class UsersService{
  constructor(
    @InjectRepository(User) private repository: Repository<User>
  ) {
  }

  // register user
  async create(userDto : CreateUserDto):Promise<UserInterface>{
    const user=new User()
    user.userName=userDto.userName
    user.email=userDto.email
    user.password=userDto.password // you can add hashed password to security account such as user.password= hashPassword(userDto.password)
    const savedUser=await this.repository.save(user)
    return {
      id:savedUser.id,
      userName:savedUser.userName,
      email: savedUser.email
    }
  }

  // login
  async login(userLoginDto:LoginUserDto):Promise<String>{
    const user=await this.repository.findOneBy({userName:userLoginDto.userName})
    if(!user){
      throw new Error('User not find')
    }
    if(user.password!==userLoginDto.password){  // you can add function decoded password such as decodedPassword(user.password,userLoginDto.password)
      throw new Error('password not matches')
    }
    const payload={userId: user.id}
    return jwt.sign(payload,'secretKey',{expiresIn: '1d'})
  }

  async getUserById(id:number):Promise<User>{
    const user=await this.repository.findOneBy({id:id})
    return user
  }
}