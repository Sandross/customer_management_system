import { Router } from 'express';
import { createUserController } from './useCases/CreaseUser'; 
import { PostgresUserRepository } from './repositories/implementations/PostgresUserRepository';

const userRepository = new PostgresUserRepository();
const router = Router();

// Rota para criar um novo usuário
router.post('/users', (req, res) => {
   return createUserController.handle(req, res);
});

// Rota para filtrar usuários
router.get('/users/filter', async (req, res) => {
    try {
        const filters = req.query;
        const users = await userRepository.findUsersByFilters(filters);
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para calcular a rota otimizada
router.get('/users/optimize-route', async (req, res) => {
    try {
        const { route, totalDistance } = await userRepository.calculateOptimizedRoute();
        res.json({ route, totalDistance });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export { router };
