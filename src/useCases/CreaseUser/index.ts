import { PostgresUserRepository } from './../../repositories/implementations/PostgresUserRepository';
import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';

const PostgresUserRepositoryInstance = new PostgresUserRepository();

const createUserUseCase = new CreateUserUseCase(PostgresUserRepositoryInstance);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController, createUserUseCase }
