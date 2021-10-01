import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { ApiTags } from '@nestjs/swagger';
import { identity } from 'rxjs';
import { UsersService } from './users.service';
import { User } from 'src/interfaces/users.interface';


@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}

    @Get()
    getAllUser(): Promise<User[]>{
        return this.usersService.findAllUser();
    }
    
    @Get(':id')
    getOneUser(@Param('id') id: number): Promise<User>{
        return this.usersService.findOneUser(id) ;
    }
    
    @Post()
    createUser(@Body() createUserDto: CreateUserDto): Promise<User>{
        return this.usersService.createUsers(createUserDto)
    }
    
    @Put(':id')
    updateUser(@Param('id') id: number, @Body() createUserDto: CreateUserDto){
        return this.usersService.updateUser(id, createUserDto);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number){
       return this.usersService.deleteUser(id)
    }
}
