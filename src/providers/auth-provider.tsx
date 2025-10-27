'use client';

import { useRouter } from 'next/navigation';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import { PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { storageKeys } from '@/config/storage-keys';
import { AuthContext } from '@/contexts/auth-context';

export function AuthProvider({ children }: PropsWithChildren) {
	const getAccessToken = () => {
		const cookies = parseCookies();
		return cookies[storageKeys.ACCESS_TOKEN] || null;
	};

	const router = useRouter();

	const [signed, setSigned] = useState<boolean>(() => !!getAccessToken());
	const [username, setUsername] = useState<string>('');

	const signIn = useCallback(
		(accessToken: string, username: string) => {
			const SEVEN_DAYS_IN_SECONDS = 7 * 24 * 60 * 60;
			setCookie(null, storageKeys.ACCESS_TOKEN, accessToken, {
				maxAge: SEVEN_DAYS_IN_SECONDS,
				path: '/',
			});

			localStorage.setItem(storageKeys.USER_INFO, username);

			setSigned(true);
			setUsername(username);
			router.push('/dashboard');
		},
		[router]
	);

	const signOut = useCallback(() => {
		destroyCookie(null, storageKeys.ACCESS_TOKEN, { path: '/' });
		localStorage.removeItem(storageKeys.USER_INFO);
		setSigned(false);
		setUsername('');
		router.push('/');
	}, [router]);

	useEffect(() => {
		const storedUsername = localStorage.getItem(storageKeys.USER_INFO);
		if (storedUsername) {
			setUsername(storedUsername);
		}
	}, []);

	return (
		<AuthContext.Provider
			value={{
				signed,
				signIn,
				signOut,
				username,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}
