import axios from 'axios'
import React from 'react'
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import useAuthStore from '../../store/authStore';
import {MdSettingsVoice} from 'react-icons/md';
import {AiOutlineLink} from 'react-icons/ai';
import {BsEmojiSmile} from 'react-icons/bs'
import dynamic from 'next/dynamic';
function Chat({user, data}) {
  console.log('chat', user[0].chats);
  const {profile} = useAuthStore();
  const createNewCaht = async () => {
    const res = await axios.put(`/api/chat/${user[0]._id}`, {Id: profile?._id});
    console.log('createNewCaht', res.data);

  }
  if (user[0].chats == null)  {
    createNewCaht();
  }
  return (
    <div>
      <div className="flex w-full items-start">
        <Sidebar data={data} />
        <div className="flex flex-col justify-between min-w-[68rem]">
          <Header user={user} />
          <div className='flex flex-col justify-between'>
            <main className='h-[33rem] bg-grey-200'>

            </main>
            <footer className='flex  justify-between'>
              <MdSettingsVoice />
              <input type='text w-[100%] ' />
              <div className='w-[4rem] flex'>
                <AiOutlineLink className='mr-[1rem]' />
                <BsEmojiSmile />
              </div>
            </footer>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default dynamic(() => Promise.resolve(Chat), { ssr: false });
export const getServerSideProps = async ({params: {id}}) => {
    const res = await axios.get(`${process.env.base_url}/api/chat/${id}`);
    const response = await axios.get(`${process.env.base_url}/api/users`);
    return {
      props: {
          user: res.data,
          data: response.data
      },
  }
}