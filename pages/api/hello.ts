// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//mongodb root : XvEiGuuBO99xDnsG
// mongodb+srv://root:XvEiGuuBO99xDnsG@entries.wg1bo.mongodb.net/test
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  ok: boolean,
  message: string,
  method: string,
}

export default function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {
  console.log(process.env);

  
  res.status(200).json({
    ok: true,
    message: 'Todo ok',
    method: req.method || 'No hay metodo'
  });
}
