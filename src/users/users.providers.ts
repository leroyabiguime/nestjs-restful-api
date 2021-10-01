import { Connection } from "typeorm";
import { User } from "src/database/entity/user.entity";

export const userProviders = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(User),
        inject:  ['DATABASE_CONNECTION']
    }
]