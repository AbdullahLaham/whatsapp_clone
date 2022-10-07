export default {
    name: 'message',
    title: 'message',
    type: 'document',
    fields: [
      {
        name: 'postedBy',
        title: 'PostedBy',
        type: 'user',
      },
      {
        name: 'receiver',
        title: 'receiver',
        type: 'user',
      },
      {
        name: 'message',
        title: 'message',
        type: 'string',
      },
    ],
  }