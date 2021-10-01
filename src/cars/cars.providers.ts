import {Connection} from "typeorm";
import { Car } from "src/database/entity/car.entity";
import { Inject } from "@nestjs/common";


export const carProviders = [
   { provide: 'CAR_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Car),
    inject: ['DATABASE_CONNECTION']
   }
]