import { Body, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../database/entity/user.entity';
import { CreateUserDto } from './dto/createUserDto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ){}

    async findAllUser(): Promise<User[]> {
        return await this.usersRepository.find()
    }
    async findOneUser(id: number): Promise<User> {
        return await this.usersRepository.findOne(id);
    }
    async createUsers(createUserDto: CreateUserDto): Promise<User>{
        return this.usersRepository.save(createUserDto) ;
    }

    async updateUser(id: number, createUserDto: CreateUserDto){
        return await this.usersRepository.update(id, createUserDto);
    }

    async deleteUser(id: number){
        return await this.usersRepository.delete(id)
    }
      
}