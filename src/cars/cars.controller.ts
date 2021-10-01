import { Controller, Get, Put, Delete, Post, Body } from '@nestjs/common';
import { CreateCarDto } from './dto/createCarDto';
import { SwaggerModule, DocumentBuilder, ApiTags } from '@nestjs/swagger';

@ApiTags('Cars')
@Controller('cars')
export class CarsController {
    @Get()
    getAllCar(): string{
        return 'all';
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
