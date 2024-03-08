import { User } from '../../entities/User';
import { ICreateUserDto } from '../../useCases/CreaseUser/CreateUserDto';
import { IUsersRepository } from '../IUsersRepository';

export class PostgresUserRepository implements IUsersRepository {

    async save(data: ICreateUserDto): Promise<User> {
        //metodo da orm para salvar no banco
    }

    async findUsersByFilters(data: Partial<ICreateUserDto>): Promise<User[]> {
        //metodo da orm para buscar no banco
    }

    calculateDistanceBetweenTwoUsers(user1: User, user2: User): number {
        //calculo de distancia
    }
}
