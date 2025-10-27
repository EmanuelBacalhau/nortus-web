import { httpClient } from '../httpClient';
import type { IndicatorsResponse } from '../types/get-indicators.types';

export async function getIndicators(): Promise<IndicatorsResponse> {
	const response = await httpClient.get('/dash.json');
	console.log(response.data);

	return response.data;
}
