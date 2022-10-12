import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from '../env/config';
import {ConfigModule} from "@nestjs/config";
import { EmployeModule } from './employe/employe.module';
import {Employe} from "./employe/entities/employe.entity";


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
      entities: [Employe],
      extra: config.database.options,
    }),
    EmployeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
