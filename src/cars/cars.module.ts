import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/config/database.module';
import { Car } from 'src/database/entity/car.entity';
import { CarsController } from './cars.controller';
import { carProviders } from './cars.providers';
import { CarsService } from './cars.service';

@Module({
    imports: [DatabaseModule],
    controllers: [CarsController],
    providers: [
        ...carProviders,
        CarsService
    ]
})
export class CarsModule {}
