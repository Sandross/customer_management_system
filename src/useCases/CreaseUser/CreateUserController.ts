import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase
        ) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, phone, xCoordinate, yCoordinate } = request.body;
        try {
            await this.createUserUseCase.execute({name, email, phone, xCoordinate, yCoordinate});
            return response.status(201).send();
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error'
            });
        }
    }
}
