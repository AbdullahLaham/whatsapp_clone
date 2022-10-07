import { NextApiRequest, NextApiResponse } from 'next';

import { postDetailQuery } from '../../utils/queries';
import { client } from '../../utils/client';
import {fetchUsersQuery} from '../../utils/queries'
export default async function handler(req= NextApiRequest, res= NextApiResponse) {
  if (req.method === 'GET') {
    const query = fetchUsersQuery();
    // const data = req.body;
    const data = await client.fetch(query);
    res.status(200).json(data)
  }
  else if (req.method == 'POST') {
    const doc = req.body;
    await client.createIfNotExists(doc)
    .then(() => {
      res.status(200).json('user created')
    })
    .catch(err => {
      console.log(err);
    })
    
    
  }
}