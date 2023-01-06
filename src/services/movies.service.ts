import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Movie } from "../entities/movie.entity";
import { MovieInterface } from "../interfaces/movie.interface";
import { UpdateMovieDto } from "../dtos/updateMovie.dto";
import { UserInterface } from "../interfaces/user.interface";
import { UsersService } from "./users.service";

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie) private repository: Repository<Movie>,
     private readonly usersService: UsersService
  ) {
  }

  async getMovies(query: any): Promise<MovieInterface[]>{

    const result=await this.repository.createQueryBuilder('m')
      .select(['m.id','m.title','m.image','m.numberOfLike','m.isLike'])
      //... write query database using lib typeorm in here

      .skip(query.size*query.index).take(query.size).getManyAndCount()

   return result
  }

  async updateMovie(id:number,updateMovie: UpdateMovieDto,userInterface: UserInterface):Promise<MovieInterface>{
    const movie=await this.repository.findOneBy({id: id})
    const user=await this.usersService.getUserById(userInterface.id)
    if(updateMovie.isLike){
      movie.likes.push(user)
    }
    else{
      let likes=movie.likes.filter(item=>item.id!==user.id)
      movie.likes=likes
    }
    const savedMovie= await this.repository.save(movie)
    return {
      id: savedMovie.id,
      isLike: updateMovie.isLike,
      image: savedMovie.image,
      numberOfLikes: savedMovie.likes.length,
      title: savedMovie.title
    }
  }
}