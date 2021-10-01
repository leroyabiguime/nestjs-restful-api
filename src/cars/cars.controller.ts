import { Controller, Get, Put, Delete, Post, Body } from '@nestjs/common';
import { CreateCarDto } from './dto/createCarDto';
import { SwaggerModule, DocumentBuilder, ApiTags } from '@nestjs/swagger';
import { Car } from 'src/database/entity/car.entity';
import { CarsService } from './cars.service';
@ApiTags('Cars')
@Controller('cars')
export class CarsController {
    constructor(private carsService: CarsService){}
    @Get()
   async getAllCar(): Promise<Car[]>{
        return await this.carsService.findAll() ;
    }
    @Get(':id')
    getOneCar(){ 
        return 'one car';
    }
    @Post()
    create(@Body() CreateCarDto: CreateCarDto){
        
    }
    
    @Put(':id')
    updateCar(): string {
        return 'update car';
    }
    @Delete(':id')
    deleteCar(){
        return 'delete car';
    }
}
