import { Request, Response } from 'express';
import { LoginUserInput } from '../validators/auth.validator';
import log from '../utils/logger';
import { findUserByEmail } from '../services/user.service';
import { signJwt } from '../utils/jwt';
import config from '../../config/config';
import { createSession } from '../services/session.service';

export async function loginController(
  req: Request<{}, {}, LoginUserInput['body']>,
  res: Response
) {
  log.info('[Auth-createUserController] was triggered');
  const { email, password } = req.body;
  try {
    const user = await findUserByEmail(email);
    if (!user || !user.comparePassword(password)) {
      return res.status(401).send('Invalid email or password');
    }
    //create token
    const accessToken = signJwt(
      { ...user, session: user.id },
      { expiresIn: config.accessTokenTtl } //15min
    );
    await createSession(user, accessToken);

    res.cookie('accessToken', accessToken, {
      maxAge: 900000, //15min
      httpOnly: true,
      domain: 'localhost',
      path: '',
      sameSite: 'strict',
      secure: false,
    });

    res.status(201).json({ ...user, accessToken });
  } catch (error) {
    console.log(error);
    //TODO: CHECK IF EMAIL EXIST
    log.error('[Auth-createUserController] error triggered', error);
    res.status(500).json({ error: 'Internal server error', e: error });
  }
}
