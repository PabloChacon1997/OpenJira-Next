import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../../database';
import { Entry, IEntry } from '../../../../models';

type Data = 
  | {message: string}
  | IEntry

export default function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {

  switch (req.method) {
    case 'PUT':
      return updateEntry(req, res);
  
    case 'GET':
      return getEntry(req, res);
  
    default:
      return res.status(400).json({ message: 'El método no existe' });
  }
}


const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect();
  const { id } = req.query;
  const entryToUpdate = await Entry.findById(id);

  if (!entryToUpdate) {
    await db.disconnect();
    return res.status(400).json({ message: 'No hay entrada con el ID: ' + id });
  }

  const {
    description = entryToUpdate.description,
    status = entryToUpdate.status,
  } = req.body;
  try {
    
    const updatedEntry = await Entry.findByIdAndUpdate(id,{ description, status }, { runValidators: true, new : true });
    return res.status(200).json(updatedEntry!);
  } catch (error: any) {
    console.log(error);
    await db.disconnect();
    res.status(400).json({ message: error.errors.status.message });
  }

}
const getEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;
  await db.connect();
  const entryToGet = await Entry.findById(id);
  await db.disconnect();

  if (!entryToGet) {
    await db.disconnect();
    return res.status(400).json({ message: 'No hay entrada con el ID: ' + id });
  }

  return res.status(200).json(entryToGet);

}