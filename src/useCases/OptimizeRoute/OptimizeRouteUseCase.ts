import { User } from '../../entities/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

export class OptimizeRouteUseCase {
    constructor(
        private usersRepository: IUsersRepository
    ){}

    async execute(): Promise<{ route: User[]; totalDistance: number; }> {
        return this.usersRepository.calculateOptimizedRoute();
    }
}
