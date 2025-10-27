import { httpClient } from '../httpClient';

export async function signIn() {
	const response = await httpClient.get('/login.json');

	return response.data;
}
