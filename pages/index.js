import React from 'react'
import Header from '../components/Header'
import {BsEmojiSmile} from 'react-icons/bs';
import axios from 'axios';
import Sidebar from '../components/Sidebar';

function Home({data}) {
  console.log(data)
  return (
    <div className="flex w-full justify-between items-start">
      <Sidebar data={data} />
      <Header />
      
    </div>
    
  )
}

export default Home;
export const getServerSideProps = async () => {
  const response = await axios.get(`${process.env.base_url}/api/users`);
  console.log('response', response);
  return {
    props: {data: response.data}
  };


}
