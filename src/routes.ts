import { Router } from 'express';
import { createUserController } from './useCases/CreaseUser';

const router = Router();

router.post('/users', (req, res) => {
   return createUserController.handle(req, res);
});

router.get('/', (req, res) => {
    return res.json({ message: 'Hello World' });
});

export { router }
