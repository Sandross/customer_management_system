import { User } from '../../entities/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { FindUsersDto } from './FindUserDto';

export class FindUsersUseCase {
    constructor(
        private usersRepository: IUsersRepository
    ){}

    async execute(filters?: FindUsersDto): Promise<User[]> {
        const users = await this.usersRepository.findUsersByFilters(filters);
        return users;
    }
}
