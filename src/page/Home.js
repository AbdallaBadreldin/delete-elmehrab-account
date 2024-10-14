import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  var returnedView = ""
  const navigate = useNavigate();

  const handleNavigateToLogin = () => {
   navigate('/login');
  };

  const handleNavigateToLogout = () => {
    navigate('/delete');
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        handleNavigateToLogout()
        console.log("uid", uid)
      } else {
        // User is signed out
        console.log("user is logged out")
        handleNavigateToLogin()
       
        console.log("user is logged out")
      }
    });

  }, [])


}

export default Home