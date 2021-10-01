import { Inject, Injectable } from '@nestjs/common';
import { Car } from 'src/database/entity/car.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarsService {
    constructor(
        @Inject('CAR_REPOSITORY')
        private carRepository: Repository<Car>,
    ){}

    async findAll(): Promise<Car[]>{
        return this.carRepository.find()
    }
}
