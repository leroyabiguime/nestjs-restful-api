import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { ApiTags } from '@nestjs/swagger';
import { identity } from 'rxjs';

@ApiTags('Users')
@Controller('users')
export class UsersController {

    @Get()
    getAllUser(): string{
        return 'all';
    }
    
    @Get(':id')
    getOneUser(@Param('id') id): string{
        return 'one';
    }
    @Post()
    createUser(@Body() CreateUserDto: CreateUserDto){

    }
    
    @Put(':id')
    updateUser(@Param('id') id, @Body() CreateUserDto: CreateUserDto){
    }

    @Delete(':id')
    deleteUser(@Param('id') identity){}
}
