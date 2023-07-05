import { createContext } from 'react';
import { UserDataContextValue } from '../interfaces/userData';

const userContext = createContext<UserDataContextValue | null>(null);

export default userContext;
