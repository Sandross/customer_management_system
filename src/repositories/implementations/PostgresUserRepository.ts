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

  async findUsersByFilters({ name, email, phone, xCoordinate, yCoordinate }: Partial<ICreateUserDto>): Promise<User[]> {
        // Iniciar a consulta com a base que sempre será verdadeira para poder adicionar ANDs facilmente
        let queryString = 'SELECT * FROM users WHERE 1=1';
        const values = [];
        let index = 1;

        // Adiciona cláusulas WHERE dinamicamente com base nos filtros fornecidos
        if (name) {
            queryString += ` AND name ILIKE $${index++}`;
            values.push(`%${name}%`);
        }
        if (email) {
            queryString += ` AND email ILIKE $${index++}`;
            values.push(`%${email}%`);
        }
        if (phone) {
            queryString += ` AND phone = $${index++}`;
            values.push(phone);
        }
        if (xCoordinate !== undefined) { // Verifica explicitamente undefined para permitir coordenadas 0
            queryString += ` AND x = $${index++}`;
            values.push(xCoordinate);
        }
        if (yCoordinate !== undefined) { // Mesma lógica que xCoordinate
            queryString += ` AND y = $${index++}`;
            values.push(yCoordinate);
        }

        // Executa a consulta com os filtros dinâmicos
        const result = await query(queryString, values);
        return result.rows;
    }
}

    calculateDistanceBetweenTwoUsers(user1: User, user2: User): number {
        //calculo de distancia
    }
}
