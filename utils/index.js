import axios from 'axios';

export async function createOrGetUser (response, setOurUser) {
    // console.log('response', response);
    if (response) {
        const {uid, photoURL, displayName} = response;
        const user = {
            _id: uid,
            _type: 'user',
            userName: displayName,
            image: photoURL,
        }
        setOurUser(user)
        await axios.post(`${process.env.base_url}/api/users`, user)
    }
}