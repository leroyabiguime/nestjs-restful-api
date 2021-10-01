import { Controller, Get, Put, Delete, Post, Body, HttpCode, Query, Param } from '@nestjs/common';
import { CreateCarDto } from './dto/createCarDto';
import { SwaggerModule, DocumentBuilder, ApiTags, ApiParam } from '@nestjs/swagger';
import { Car } from 'src/interfaces/cars.interface';
import { CarsService } from './cars.service';

@ApiTags('Cars')
@Controller('cars')
export class CarsController {
    constructor(private carsService: CarsService){}
    @Get()
   async getAllCars(): Promise<Car[]>{
        return await this.carsService.findAllCars();
    }

    @Post()
    create(@Body() createCarDto: CreateCarDto): Promise<Car>{
        return this.carsService.createCars(createCarDto);
    }
    
    @Get(':id')
    async getOneCars(@Param('id') id: number): Promise<Car[]>{  
        return await this.carsService.findOneCars(id);
    }
  
    @Put(':id')
    async updateCars(@Param('id') id: number,@Body() createCarDto: CreateCarDto){
        return await this.carsService.updateCars(id,createCarDto);
    }
    @Delete(':id')
    deleteCars(@Param('id') id: number){
        return this.carsService.deleteCars(id) ;
    }
}
