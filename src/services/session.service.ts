import { myDataSource } from '../connections/database';
import { Session } from '../entity/session.entity';
import { User } from '../entity/user.entity';

export async function createSession(
  user: User,
  token: string
): Promise<Session> {
  const repository = myDataSource.getRepository(Session);
  const sessionInstance = repository.create({ user: user, token: token });
  const session = await repository.save(sessionInstance);
  return session;
}
