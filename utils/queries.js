export const fetchUsersQuery = () => {
    const query = `*[_type == "user"]
    {
        _id,
        userName,
        image,
        chats[]{
            messages,
            userId,
          },
    }
    `;
    return query;
}
export const fetchChatQuery = (id) => {
    const query = `*[_type == "user" && _id == '${id}'] 
    {
        _id,
        userName,
        image,
        chats[]{
            messages,
            userId,
          },
    }
    `;
    return query;
}
export const newChatQuery = () => {
    const query = `*[_type == "user"]
    {
        _id,
        chats[]{
            messages,
            userId,
        },
    }
    `;
    return query;
}