import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {auth} from './firebase';
import Payment from "./Payment"

function App() {
  const [{user},dispatch]=useStateValue();

  useEffect(()=>{
    //It will only run once when app component loads...
    auth.onAuthStateChanged(authUser=>{
      console.log("The User is >>>",authUser)

      if(authUser){
        //the user just logged in /the user was Logged in
          dispatch({
            type:'SET_USER',
            user:authUser
          })
      }else{
        //the user is Logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  },[])
  return (
    //BEM
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={ <> <Header /> <Home /> </> } />
          <Route path="/checkout" element={<> <Header/> <Checkout/></>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/payment" element={<><Header/><Payment/></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
