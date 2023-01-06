import { Body, Controller, HttpException, HttpStatus, Post, UseGuards, UseInterceptors } from "@nestjs/common";
import { UserGuard } from "../guards/user.guard";
import { CreateUserDto } from "../dtos/createUser.dto";
import { UsersService } from "../services/users.service";
import { UserInterceptor } from "../interceptors/user.interceptor";
import { LoginUserDto } from "../dtos/loginUser.dto";

@Controller('users')
export class UsersController{

  constructor(private readonly service: UsersService) {
  }

  // sign up
  @Post()
  async create(@Body() userDto: CreateUserDto){
    try {
      return await this.service.create(userDto)
    }catch (e) {
      throw new HttpException(e.message,HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }


}