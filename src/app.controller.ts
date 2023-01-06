import { Body, Controller, Get, Post, UseInterceptors } from "@nestjs/common";
import { UserInterceptor } from "./interceptors/user.interceptor";
import { LoginUserDto } from "./dtos/loginUser.dto";

@Controller()
export class AppController {

  //sign in
  @Post('login')
  @UseInterceptors(UserInterceptor)
  async login(@Body() userLoginDto:LoginUserDto) {
  }

}
