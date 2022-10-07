import create from 'zustand'
import {persist} from 'zustand/middleware';
import axios from 'axios';

const authStore = (set) => ({
    ourUser: null,
    // allProfiles: null,
    // currentPost: null,
    // allUsers: null,
    setOurUser: (user) => set({ourUser: user}),
    // deleteUser: () => set({profile: null}),
    // setPost: (post) => set({currentPost: post}),
    // fetchAllUsers: async () => {
    //     const data = await axios.get(`${process.env.base_url}api/users`)
    //     if (data) {
    //         set({allUsers: data.data})
    //     }
    // },
    // setAllProfiles: (users) => set({allProfiles: users})
})
const useAuthStore = create(
    persist(authStore, {
        name: 'auth',
    })
)
export default useAuthStore