require('dotenv').config();

module.exports={
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [
    __dirname + '/src/entities/*.entity{.ts,.js}',
  ],
  synchronize: true,
}