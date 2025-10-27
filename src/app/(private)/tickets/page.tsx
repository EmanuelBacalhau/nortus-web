'use client';

import { Header } from '@/components/private/header';

export default function Ticktes() {
	return (
		<>
			<Header title="Gestão de Tickests" />
			<div className="flex flex-col gap-6 flex-1">
				<div className="grid grid-cols-4 gap-4">
					<div className="bg-white p-4 rounded-lg shadow">teste</div>
					<div className="bg-white p-4 rounded-lg shadow">teste</div>
					<div className="bg-white p-4 rounded-lg shadow">teste</div>
					<div className="bg-white p-4 rounded-lg shadow">teste</div>
				</div>

				<div className="flex-1 bg-white rounded-lg"></div>
			</div>
		</>
	);
}
