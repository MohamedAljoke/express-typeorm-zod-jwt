import { Request, Response } from 'express';
import { createUserService, fetchUserService } from '../services/user.service';
import log from '../utils/logger';
import { CreateUserInput } from '../validators/user.validator';

export async function createUserController(
  req: Request<{}, {}, CreateUserInput['body']>,
  res: Response
) {
  log.info('[users-createUserController] was triggered');
  const data = req.body;
  try {
    const createdUser = await createUserService(data);
    res.status(201).json(createdUser);
  } catch (error) {
    //TODO: CHECK IF EMAIL EXIST
    log.error('[users-createUserController] error triggered', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function fetchAllUsersController(req: Request, res: Response) {
  log.info('[users-fetchAllUsers] was triggered');
  try {
    const usersList = await fetchUserService();
    res.status(200).json(usersList);
  } catch (error) {
    log.error('[users-fetchAllUsers] error triggered', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
