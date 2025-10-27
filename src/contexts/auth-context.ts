import { createContext } from 'react';

type AuthContextType = {
	signed: boolean;
	signIn: (accessToken: string, username: string) => void;
	signOut: () => void;
	username: string;
};

export const AuthContext = createContext<AuthContextType>(
	{} as AuthContextType
);
