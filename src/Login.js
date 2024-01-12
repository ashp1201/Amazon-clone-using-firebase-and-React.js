import React from 'react';
import img1 from './assets/amz-lgo.png';
import {Link   } from "react-router-dom";
import { useNavigate } from "react-router-dom";



import './Login.css';
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword ,signOut} from "firebase/auth";

import {useState } from 'react';
import { auth } from "./firebase.js";

function Login(props) {

  const navigate = useNavigate();
  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');

  const signIn = e =>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(userCredential.user);
    navigate("/");


        // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    
    //some fancy firevbase code for signin

  }

  const register = e =>{
    e.preventDefault();
    
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(userCredential.user)
    navigate("/");    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);


    // ..
  });


  }

  return (
    <div className="login">
        <Link to="/">
          <img className="login_logo" src={img1} alt="Amazon_logo" />
        </Link>

        <div className="login_container">
          <h1>Sign_in</h1>
          <form action="">

            <label htmlFor="username"><h5>E-mail</h5></label>
            <input type="email" name="username" value={email} onChange={e=>setEmail(e.target.value)}/>

            <label htmlFor="password"><h5>Password</h5></label>
            <input type="password" name='password' value={password}
            onChange={e=>setPassword(e.target.value)}/>

            <button className='login_signinButton' onClick={signIn} >Sign In</button>
          </form>
          <p>By signing-in you agree to Amazon's Fake Condition of Use & Safe.Please see our Privacy Notice,Our Cookies Notice and Our Interest-Based Ads</p>
          <button className='login_regButton' onClick={register}>Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login


// const auth = getAuth();
// signOut(auth).then(() => {
//   // Sign-out successful.
// }).catch((error) => {
//   // An error happened.
// });