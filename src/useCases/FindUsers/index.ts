import { PostgresUserRepository } from './../../repositories/implementations/PostgresUserRepository';
import { FindUsersController } from './FindUsersController';
import { FindUsersUseCase } from './FindUserUseCase';

const postgresUserRepositoryInstance = new PostgresUserRepository();

const findUsersUseCase = new FindUsersUseCase(postgresUserRepositoryInstance);

const findUsersController = new FindUsersController(findUsersUseCase);

export { findUsersController, findUsersUseCase };
