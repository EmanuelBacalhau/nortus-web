'use client';

import { Header } from '@/components/private/header';

export default function Ticktes() {
	return (
		<>
			<Header title="Visão 360" />
			<div className="grid grid-cols-4 gap-4 flex-1">
				<section className="bg-white p-4 rounded-lg shadow flex-1">
					teste
				</section>

				<section className="bg-white p-4 rounded-lg shadow col-span-3 flex-1 flex flex-col">
					<div className="grid grid-cols-3 gap-4 flex-1">
						<div className="bg-yellow-500 p-4 rounded-lg shadow col-span-2">
							teste
						</div>

						<div className="bg-yellow-500 p-4 rounded-lg">
							<div>teste</div>
							<div>teste</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
