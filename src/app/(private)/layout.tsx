import { PropsWithChildren } from 'react';
import { NavigationMenu } from '@/components/private/navigation-menu';

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<main className="flex min-h-full relative">
			<NavigationMenu />
			<section className="mt-13 p-16 flex-1 flex flex-col">{children}</section>
		</main>
	);
}
