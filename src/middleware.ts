import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { storageKeys } from './config/storage-keys';

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	const loginUrl = new URL('/', request.url);
	const dashboardUrl = new URL('/dashboard', request.url);

	const publicRoutes = ['/'];

	const token = request.cookies.get(storageKeys.ACCESS_TOKEN)?.value;

	const isPublicRoute = publicRoutes.includes(pathname);

	if (token) {
		if (isPublicRoute) {
			return NextResponse.redirect(dashboardUrl);
		}

		return NextResponse.next();
	}

	if (!token) {
		if (isPublicRoute) {
			return NextResponse.next();
		}

		return NextResponse.redirect(loginUrl);
	}

	return NextResponse.next();
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
