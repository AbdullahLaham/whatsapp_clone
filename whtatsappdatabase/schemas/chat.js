
export default {
    name: 'chat',
    title: 'chat',
    type: 'document',
    fields: [
      {
        name: 'messages',
        title: 'messages',
        type: 'array',
        of: [{ type: 'message' }],
      },
      {
        name: 'userId',
        title: 'UserId',
        type: 'string',
      },
    ],
  };