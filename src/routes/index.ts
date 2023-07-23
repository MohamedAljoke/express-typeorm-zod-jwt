import { Response, Request, Router } from 'express';
import authRoutes from './auth.route';
import userRoutes from './users.route';
const api = Router();

api.get('/', (req: Request, res: Response) => res.redirect('/docs'));
api.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));

api.use('/auth', authRoutes);
api.use('/users', userRoutes);

export default api;
