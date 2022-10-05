import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  console.log('Passed through "/api/entries/:path/"');
  console.log({ path: req.nextUrl.pathname });
  return NextResponse.next();
}

export const config = {
  matcher: '/api/entries/:path/',
};
