import React from 'react'
import {GoogleButton} from 'react-google-button'
import Link from 'next/link';
import {auth} from '../utils/firebase';
import {createOrGetUser} from '../utils';
import { getAuth, signOut, signInWithPopup, signInWithRedirect, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import useAuthStore from '../store/authStore';

const Login = () => {
  const {ourUser, setOurUser} = useAuthStore();
  const signIn = (provider) => {
    signInWithPopup(auth, provider)
    
  }
  const handleSignIn = () => {
    try {
      const provider = new GoogleAuthProvider();
      signIn(provider)
    }
    catch (e) {
      console.log(e);
    }
    createOrGetUser(auth.currentUser, setOurUser);
  }
  console.log('ourUser', ourUser);
  return (
    <div>
        <GoogleButton onClick={handleSignIn} />
    </div>
    
  )
}

export default Login
