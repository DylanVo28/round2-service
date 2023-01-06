import { Module } from "@nestjs/common";
import { MoviesService } from "../services/movies.service";
import { MoviesController } from "../controllers/movies.controller";
import { UsersService } from "../services/users.service";

@Module({
  controllers : [MoviesController],
  providers: [MoviesService,
   UsersService
  ]
})
export class MovieModule{}