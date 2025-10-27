import axios from 'axios';
import { parseCookies } from 'nookies';
import { storageKeys } from '@/config/storage-keys';

export const httpClient = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
});

httpClient.interceptors.request.use(config => {
	const cookies = parseCookies();
	const token = cookies[storageKeys.ACCESS_TOKEN];

	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}

	return config;
});
