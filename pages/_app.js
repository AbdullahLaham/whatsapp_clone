import useAuthStore from '../store/authStore'
import '../styles/globals.css'
import Login from '../components/Login';
import Sidebar from '../components/Sidebar';

function MyApp({ Component, pageProps }) {
  const {profile} = useAuthStore();
  return <div className='flex'>
    <Component {...pageProps} />
  </div>
}

export default MyApp
