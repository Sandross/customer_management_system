import { query } from '../../db';
import { User } from '../../entities/User';
import { ICreateUserDto } from '../../useCases/CreaseUser/CreateUserDto';
import { IUsersRepository } from '../IUsersRepository';

export class PostgresUserRepository implements IUsersRepository {

async save({ name, email, phone, xCoordinate, yCoordinate }: ICreateUserDto): Promise<User> {
    const result = await query(
        'INSERT INTO users (name, email, phone, x, y) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [name, email, phone, xCoordinate, yCoordinate]
    );
    return result.rows[0];
}
  async findUsersByFilters(filters?: Partial<ICreateUserDto>): Promise<User[]> {
    let queryString = 'SELECT * FROM users WHERE 1=1';
    const values = [];
    let index = 1;
    for (const [key, value] of Object.entries(filters || {})) {
        if (value !== undefined) {
            if (key === 'name' || key === 'email') {
                queryString += ` AND ${key} ILIKE $${index++}`;
                values.push(`%${value}%`);
            } else if (key === 'phone') {
                queryString += ` AND ${key} = $${index++}`;
                values.push(value);
            } else if (key === 'xCoordinate' || key === 'yCoordinate') {
                queryString += ` AND ${key[0]} = $${index++}`;
                values.push(value);
            }
        }
    }

    const result = await query(queryString, values);
    return result.rows;
}

    calculateDistanceBetweenTwoUsers(user1: User, user2: User): number {
    const distance = Math.sqrt(Math.pow(user1.xCoordinate - user2.xCoordinate, 2) + Math.pow(user1.yCoordinate - user2.yCoordinate, 2));
    return distance;
    }

async calculateOptimizedRoute(): Promise<{ route: User[]; totalDistance: number; }> {
        let clients: User[] = await this.findUsersByFilters();
        const startPoint: User = { id: 'company', name: 'Company', email: '', phone: '', xCoordinate: 0, yCoordinate: 0 };
        let currentPoint: User = startPoint;
        let route: User[] = [];
        let totalDistance = 0;

        while (clients.length > 0) {
            let nearestIndex = clients.reduce((nearestIdx, client, idx) => {
                const distance = this.calculateDistanceBetweenTwoUsers(currentPoint, client);
                return distance < this.calculateDistanceBetweenTwoUsers(currentPoint, clients[nearestIdx]) ? idx : nearestIdx;
            }, 0);

            const nearestClient = clients[nearestIndex];
            totalDistance += this.calculateDistanceBetweenTwoUsers(currentPoint, nearestClient);
            route.push(nearestClient);
            currentPoint = nearestClient;
            clients.splice(nearestIndex, 1);
        }

        // Adiciona a distância de retorno à empresa
        totalDistance += this.calculateDistanceBetweenTwoUsers(currentPoint, startPoint);

        return { route, totalDistance };
    }
    
}
