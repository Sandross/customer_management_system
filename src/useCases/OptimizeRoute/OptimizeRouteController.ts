// OptimizeRouteController.ts
import { Request, Response } from 'express';
import { OptimizeRouteUseCase } from './OptimizeRouteUseCase';

export class OptimizeRouteController {
    constructor(
        private optimizeRouteUseCase: OptimizeRouteUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { route, totalDistance } = await this.optimizeRouteUseCase.execute();
            return response.json({ route, totalDistance });
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}
