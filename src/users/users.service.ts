import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../database/entity/user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ){}

    findAll() {
        //return this.usersRepository.find();
      }


      findOne(id: string){
          //return this.usersRepository.findOne(id);
      }
      
      async remove(id: string){
          return ;//await this.usersRepository.delete(id);
      }
      
}
