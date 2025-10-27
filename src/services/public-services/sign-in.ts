import { httpClient } from '../httpClient';

type SignInResponse = {
	data: {
		accessToken: string;
		username: string;
	};
};

export async function signIn() {
	const response = await httpClient.get<SignInResponse>('/login.json');

	return response.data;
}
