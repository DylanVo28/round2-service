import { Module } from "@nestjs/common";
import { MoviesService } from "../services/movies.service";
import { MoviesController } from "../controllers/movies.controller";
import { UsersService } from "../services/users.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Movie } from "../entities/movie.entity";

@Module({
  imports:[TypeOrmModule.forFeature([Movie])],
  controllers : [MoviesController],
  providers: [MoviesService,
   UsersService
  ]
})
export class MovieModule{}