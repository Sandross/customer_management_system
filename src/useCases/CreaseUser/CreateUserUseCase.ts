import { User } from '../../entities/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { ICreateUserDto } from './CreateUserDto';

export class CreateUserUseCase {
    constructor(
        private usersRepository: IUsersRepository
    ){}

async execute(data: ICreateUserDto) {
    const userAlreadyExists = await this.usersRepository.findUsersByFilters({email: data.email});
    console.log(userAlreadyExists);
    if (userAlreadyExists.length > 0) {
        throw new Error('User already exists');
    }
    const user = new User(data);
    await this.usersRepository.save(user);
}
}
