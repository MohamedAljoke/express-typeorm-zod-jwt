import { TypeOf, object, string } from 'zod';

export const loginUserSchema = object({
  body: object({
    email: string({
      required_error: 'email is required',
    }),
    password: string({
      required_error: 'password is required',
    }),
  }),
});
export type LoginUserInput = TypeOf<typeof loginUserSchema>;
