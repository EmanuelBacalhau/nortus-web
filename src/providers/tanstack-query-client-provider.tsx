'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';
import { queryClient } from '@/libs/query-client';

export function TanstacQueryClientProvider({ children }: PropsWithChildren) {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
}
