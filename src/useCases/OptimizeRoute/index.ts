import { PostgresUserRepository } from './../../repositories/implementations/PostgresUserRepository';
import { OptimizeRouteController } from './OptimizeRouteController';
import { OptimizeRouteUseCase } from './OptimizeRouteUseCase';

const postgresUserRepositoryInstance = new PostgresUserRepository();

const optimizeRouteUseCase = new OptimizeRouteUseCase(postgresUserRepositoryInstance);
const optimizeRouteController = new OptimizeRouteController(optimizeRouteUseCase);

export { optimizeRouteController, optimizeRouteUseCase };