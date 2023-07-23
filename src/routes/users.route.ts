import { Router } from 'express';
import {
  createUserController,
  fetchAllUsersController,
} from '../controllers/user.controller';
import validate from '../middlewares/validator';
import { createUserSchema } from '../validators/user.validator';

const userRoutes = Router();

userRoutes.post('/', validate(createUserSchema), createUserController);
userRoutes.get('/', fetchAllUsersController);

export default userRoutes;
