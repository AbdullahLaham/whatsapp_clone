
import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai';
import {FiMoreVertical} from 'react-icons/fi';
import useAuthStore from '../store/authStore';
import Login from './Login';
const Header = ({user}) => {
  
  console.log('iser', user)
  let {ourUser} = useAuthStore();
  if (user) {
    ourUser = user[0];
  }
  const {displayName} = ourUser? ourUser : '';
  return (
    <div className="flex min-w-[60rem] justify-between items-center p-[.5rem]">
      <div className='flex items-center justify-between px-2 '>
        <img src={ourUser?.image} className='object-cover width-[2.5rem] h-[2.5rem] rounded-full mr-[1rem]' />
        <p className='text-xl'>{ourUser?.userName}</p>
      </div>
      <div className='flex items-center justify-content w-[3rem] '>
        <AiOutlineSearch className='block cursor-pointer'/> 
        <FiMoreVertical className='block ml-[1rem] cursor-pointer'/>
      </div>
      {!ourUser?.image && <Login />}
    </div>
  )
}

export default Header;
