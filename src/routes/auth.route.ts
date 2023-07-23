import { Router } from 'express';
import { loginController } from '../controllers/auth.controller';
import { loginUserSchema } from '../validators/auth.validator';
import validate from '../middlewares/validator';

const authRoutes = Router();

authRoutes.post('/login', validate(loginUserSchema), loginController);

export default authRoutes;
