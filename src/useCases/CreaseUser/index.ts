import { PostgresUserRepository } from './../../repositories/implementations/PostgresUserRepository';
import { CreateUserUseCase } from './CreateUserUseCase';

const PostgresUserRepositoryInstance = new PostgresUserRepository();

const createUserUseCase = new CreateUserUseCase(PostgresUserRepositoryInstance);
