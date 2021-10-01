import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './database/entity/user.entity';
import { UsersModule } from './users/users.module';
import { Car } from './database/entity/car.entity';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'restful',
      entities: [User, Car],
      synchronize: true
    }),
    UsersModule,
    CarsModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
