// import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

// export function middleware(req: NextRequest, e: NextFetchEvent) {
  // const id = req.page.params?.id || ''; // @deprecated: "page" has been deprecated in favour of URLPattern
  // console.log(req);
  // const checkMongoIDRegExp = new RegExp('^[0-9a-fA-F]{24}$');

  // if (checkMongoIDRegExp.test(id)) {
  //   return new Response(JSON.stringify({ message: 'ID is not valid' + id }), {
  //     status: 400,
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  // }

  // return NextResponse.next();
// }

export const functionName = () => {
  console.log('hello elis from deprecated_middleware');
};

