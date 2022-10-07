import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai';
import {FiMoreVertical} from 'react-icons/fi';
import {BsFillChatLeftFill} from 'react-icons/bs';
import axios from 'axios';
import useAuthStore from '../store/authStore';
import Link from 'next/link'
function Sidebar({data}) {
  // current profile
  const {ourUser} = useAuthStore();
  let users = data?.length ? data : [];
  console.log(users, 'Users')
  const createChat = () => {
    const input = prompt("please enter an email aaddress for the user you want to cchat with")
    if (input) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (input.match(mailformat)) {
          
          
        }
    }
  }  
  return (
      <div className='min-w-[16rem]'>
        <div className='flex sticky top-0 bg-white z-1 items-center justify-between py-[20px] h-[20px] border-b-2'>
            <div className='flex py-[1rem] justify-start items-center bg-grey-100 rounded-md w-full bg-gray-100 h-[1rem]'>
                <button className=' bg-grey-200 '>
                  <FiMoreVertical className='text-1xl block ml-2xl ml-[1rem]' />
                </button>
                <button className='bg-grey-200 '>
                  <BsFillChatLeftFill className='text-1xl block ml-2xl ml-[1rem]' /> 
                </button>
                
            </div>
        </div>
        <div className='flex w-full py-[.5rem] items-center justify-between'>
            <AiOutlineSearch className='text-1xl mx-2'/>
            <input className='w-full justify-between border-none outline-none ml-[.2rem] bg-gray-100 rounded-md p-2' placeholder='Search in chats' />
        </div>
        <button onClick={createChat} className='w-full bg-grey-100 text-1xl p-[.5rem]' >Start a new chat</button>
        <hr />
        <div className='mt-[1rem]' >
          {users.length && users.map((user, i) => 
              user?._id !== ourUser?._id &&(
              <Link href={`/chat/${user?._id}`} key={i}>  
                  <div className='flex items-center justify-between px-2 mb-[1rem] cursor-pointer hover:bg-gray-200 p-[.5rem] rounded-md'>
                    <img src={user?.image} className='object-cover width-[2.5rem] h-[2.5rem] rounded-full mr-[1rem]' />
                    <p>{user?.userName}</p>
                  </div>
              </Link>
            )
          )}
        </div>
      </div>
  )
}

export default Sidebar;

