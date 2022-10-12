import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from '../env/config';
import {ConfigModule} from "@nestjs/config";


@Module({
  imports: [
    ConfigModule.forRoot(({ isGlobal: true })),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: config.database.host,
      port: Number(config.database.port),
      username: config.database.username,
      password: config.database.password,
      database: config.database.database,
      entities: [],
      extra: config.database.options,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
