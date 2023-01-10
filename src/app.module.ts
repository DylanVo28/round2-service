import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from "./modules/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
    dropSchema: true
  }),
    UserModule,

  ],
  controllers: [AppController],
})
export class AppModule {}
