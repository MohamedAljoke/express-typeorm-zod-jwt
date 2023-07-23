import { myDataSource } from '../connections/database';
import { User } from '../entity/user.entity';
import { removeElement } from '../helpers/removeElementFromObject';
import { CreateUserInput } from '../validators/user.validator';

export async function fetchUserService(): Promise<User[]> {
  const users = await myDataSource.getRepository(User).find();
  const cleanedUsers = users.map((user) => {
    const noPasswordUser = removeElement(user, 'password');
    return noPasswordUser;
  });
  return cleanedUsers;
}

export async function createUserService(
  data: CreateUserInput['body']
): Promise<User> {
  const repository = myDataSource.getRepository(User);
  const userInstance = repository.create(data);
  const user = await repository.save(userInstance);
  const noPasswordUser = removeElement(user, 'password');
  return noPasswordUser;
}
export async function findUserByEmail(
  email: User['email']
): Promise<User | null> {
  const repository = myDataSource.getRepository(User);
  const user = await repository.findOneBy({ email });
  const noPasswordUser = removeElement(user, 'password');
  return noPasswordUser;
}
