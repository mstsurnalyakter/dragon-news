import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { createContext } from 'react'
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const auth = getAuth(app);

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })

        return () => unSubscribe();
    },[auth])

    const authInfo = {
      createUser,
      signIn,
      logOut,
      user,
      loading
    };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children:PropTypes.node
};

export default AuthProvider