import { NextApiRequest, NextApiResponse } from 'next';

import { client } from '../../../utils/client';
import {fetchChatQuery} from '../../../utils/queries';
import { uuid } from 'uuidv4';

export default async function handler(req= NextApiRequest, res= NextApiResponse) {
  if (req.method === 'GET') {
    const {id} = req.query;
    const query = fetchChatQuery(id);
    // const data = req.body;
    const data = await client.fetch(query);
    res.status(200).json(data)
  }
  else if (req.method == 'PUT') {
    const {id} = req.query;
    const {Id} = req.body;
    const data = await client
      .patch(id)
      .setIfMissing({ chats: [] })
      .insert('after', 'chats[-1]', [
        {
            messages: [],
            userId: Id,
            _key: uuid(),
        
        },
      ])
      .commit();
      const data2 = await client
      .patch(Id)
      .setIfMissing({ chats: [] })
      .insert('after', 'chats[-1]', [
        {
            messages: [],
            userId: Id,
            _key: uuid(),
        
        },
      ])
      .commit();
      res.status(200).json({data, data2})
  }
  
}