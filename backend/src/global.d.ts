import { User } from './common/types/users.types';

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

export {};
