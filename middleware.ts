import { NextFetchEvent, NextRequest, NextResponse, URLPattern } from 'next/server';

// const PATTERNS = [
//   [new URLPattern({ pathname: '/entries/:id' }), ({ pathname }: any) => pathname.groups],
// ];

// Esta expresión no es invocable. No todos los constituyentes del tipo 'URLPattern | (({ nombre de ruta }: cualquiera) => cualquiera)' son invocables. El tipo 'URLPattern' no tiene firmas de llamada
// This expression is not callable. Not all constituents of type 'URLPattern | (({ pathname }: any) => any)' are callable. Type 'URLPattern' has no call signatures

// const params = (url: string) => {
//   const input = url.split('/')[0];
//   let result = {};

//   for (const [pattern, handler] of PATTERNS) {
//     const patternResult = pattern.exec(input);
//     if (patternResult !== null && 'pathname' in patternResult) {
//       result = handler(patternResult);
//       break;
//     }
//   }
//   return result;
// };

export const middleware = (req: NextRequest, e: NextFetchEvent) => {
  // const id = req.page.params?.id || ''; // @deprecated: "page" has been deprecated in favour of URLPattern
  // console.log('Elis:', req.nextUrl.pathname);

  if (req.nextUrl.pathname.startsWith('/api/entries/633aeda1a359f88ef0a51632')) {
    // const {id} = params(req.url) || '';
    console.log('Hello Elis from middleware');

    // const checkMongoIDRegExp = new RegExp('^[0-9a-fA-F]{24}$');

    // return new Response(JSON.stringify())
    // return NextResponse.next();
  }

  // Another route...
  // if (req.nextUrl.pathname.startsWith('/another-route')) {
  // This logic is only applied to /dashboard]
  // }
};

export const config = {
  matcher: ['/api/entries/:id*'],
};
