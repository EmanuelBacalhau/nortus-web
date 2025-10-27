'use client';

import { useQuery } from '@tanstack/react-query';
import { Header } from '@/components/private/header';
import { privateServices } from '@/services/private-services';

export default function Dashboard() {
	const { data: indicators } = useQuery({
		queryKey: ['indicators'],
		queryFn: privateServices.getIndicators,
	});

	console.log(indicators);

	return (
		<>
			<Header title="Dashboard" />
			<div className="flex flex-col gap-6 flex-1">
				<div className="grid grid-cols-4 gap-4 flex-1">
					<div className="col-span-3 bg-white p-4 rounded-lg shadow">teste</div>
					<div className="bg-white p-4 rounded-lg shadow">teste</div>
				</div>

				<div className="grid grid-cols-4 gap-4 flex-1">
					<div className="col-span-3 bg-white p-4 rounded-lg shadow">teste</div>
					<div className="bg-white p-4 rounded-lg shadow">teste</div>
				</div>
			</div>
		</>
	);
}
