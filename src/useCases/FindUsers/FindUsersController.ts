import { FindUsersUseCase } from './FindUserUseCase';
import { Request, Response } from 'express';

export class FindUsersController {
    constructor(private findUsersUseCase: FindUsersUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const filters = request.query;
            const users = await this.findUsersUseCase.execute(filters);
            return response.json(users);
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}
