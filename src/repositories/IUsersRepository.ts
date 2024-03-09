import { User } from '../entities/User';
import { ICreateUserDto } from '../useCases/CreaseUser/CreateUserDto';

export interface IUsersRepository {
    save(data: ICreateUserDto): Promise<User>
    findUsersByFilters(data: Partial<ICreateUserDto>): Promise<User[]>
    calculateDistanceBetweenTwoUsers(user1: User, user2: User): number;
    calculateOptimizedRoute(): Promise<{ route: User[]; totalDistance: number; }>;
}
