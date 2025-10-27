'use client';

import {
	CalculatorIcon,
	ChartSplineIcon,
	MessageSquareIcon,
	TicketIcon,
	UserIcon,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';

export function NavigationMenu() {
	const pathname = usePathname();

	return (
		<nav className="bg-slate-800 min-h-screen flex flex-col justify-between items-center p-4 rounded-r-3xl shadow-xl shadow-black">
			<span>teste</span>

			<div className="flex-1 flex flex-col gap-4 justify-center">
				<Link href="/dashboard">
					<Button
						size="icon"
						icon={<ChartSplineIcon />}
						isActive={pathname === '/dashboard'}
					/>
				</Link>

				<Link href="/tickets">
					<Button
						size="icon"
						icon={<TicketIcon />}
						isActive={pathname === '/tickets'}
					/>
				</Link>

				<Link href="/chat">
					<Button
						size="icon"
						icon={<MessageSquareIcon />}
						isActive={pathname === '/chat'}
					/>
				</Link>

				<Link href="/vision">
					<Button
						size="icon"
						icon={<UserIcon />}
						isActive={pathname === '/vision'}
					/>
				</Link>

				<Link href="/calculator">
					<Button
						size="icon"
						icon={<CalculatorIcon />}
						isActive={pathname === '/calculator'}
					/>
				</Link>
			</div>

			<Link
				href="/profile"
				className="w-16 h-16 flex items-center justify-center rounded-full bg-primary"
			>
				<span>AC</span>
			</Link>
		</nav>
	);
}
