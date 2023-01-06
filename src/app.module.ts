import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from "./modules/user.module";
import { MovieModule } from "./modules/movie.module";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [UserModule,MovieModule],
})
export class AppModule {}
