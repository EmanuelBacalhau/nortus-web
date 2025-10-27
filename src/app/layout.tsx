import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/providers/auth-provider';
import { TanstacQueryClientProvider } from '@/providers/tanstack-query-client-provider';

const spaceGrotesk = Space_Grotesk({
	variable: '--font-space-grotesk-sans',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Nortus',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body
				className={`${spaceGrotesk.variable} antialiased min-h-screen bg-background`}
			>
				<TanstacQueryClientProvider>
					<AuthProvider>{children}</AuthProvider>
				</TanstacQueryClientProvider>
			</body>
		</html>
	);
}
