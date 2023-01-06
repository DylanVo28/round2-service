import { Body, Controller, Get, HttpException, HttpStatus, Param, Put, Query, Res, UseGuards } from "@nestjs/common";
import { UserGuard } from "../guards/user.guard";
import { MoviesService } from "../services/movies.service";
import { UpdateMovieDto } from "../dtos/updateMovie.dto";
import * as jwt from 'jsonwebtoken';

@Controller('movies')
@UseGuards(UserGuard)  // authenticate
export class MoviesController{
  constructor(private readonly service: MoviesService) {
  }

  //filter movie by size, pageSize
  @Get()
  async getMovies(@Query() query:any){
    try {
      return await this.service.getMovies(query)
    }catch (e) {
      throw new HttpException(e.message,HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Put(':id')
  async updateMovie(@Param('id') id: number, @Body() updateMovieDto:UpdateMovieDto,@Res() res){
    try {
      const user=await jwt.decode(res.headers.authorization)
      return await this.service.updateMovie(id,updateMovieDto,user)
    }catch (e) {
      throw new HttpException(e.message,HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}