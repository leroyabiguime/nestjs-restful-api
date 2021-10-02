import { Inject, Injectable, Post } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Car } from 'src/interfaces/cars.interface';
import { CreateCarDto } from './dto/createCarDto';
@Injectable()
export class CarsService {
    constructor(
        @Inject('CAR_REPOSITORY')
        private carRepository: Repository<Car>,
    ){}

    async findAllCars(): Promise<Car[]>{
        return this.carRepository.find()
    }

    async createCars(createCarDto: CreateCarDto){
      return this.carRepository.save(createCarDto);
    }

    findOneCars(id: number): Promise<Car> {

    return this.carRepository.findOne(id);
    }

    async updateCars(id: number,createCarDto: CreateCarDto) {
        return this.carRepository.update(id, createCarDto);
    }

    async deleteCars(id: number) {
        return await this.carRepository.delete(id);
    }
}
