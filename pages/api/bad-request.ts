import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  ok: boolean;
  message: string | string[]; // "| string[]": Corrige el error de typescript en message.
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { message = 'Bad Request' } = req.query;

  res.status(400).json({
    ok: false,
    message,
  });
}
