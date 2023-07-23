import { TypeOf, object, string } from 'zod';

export const createUserSchema = object({
  body: object({
    email: string({
      required_error: 'email is required',
    }),
    password: string({
      required_error: 'password is required',
    }),
  }),
});
export type CreateUserInput = TypeOf<typeof createUserSchema>;
