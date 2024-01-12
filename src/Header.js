import React from "react";
import {Link} from 'react-router-dom';
import "./Header.css";
import img1 from "./assets/amz-logo.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import {useStateValue} from "./StateProvider";
import {auth} from './firebase';

function Header() {
const [{basket,user},dispatch]=useStateValue();

const handleAuthentication = () =>{
  if(user){
    auth.signOut();
  }
}

  return (
    <div className="header">
      <Link to='/'>
      <img src={img1} alt="no-image" className="header_logo" />
      </Link>

      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchOutlinedIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={!user && '/login'}>
        <div onClick={handleAuthentication} className="header_option">
          <span className="header_optionlineone">Hello {user ? user.email : 'Guest'}</span>
          <span className={`header_optionlinetwo ${user ? 'sign-out' : 'sign-in'}`}>{user ? 'Sign Out' : 'Sign In'}</span>
        </div>
        </Link>

        <div className="header_option">
          <span className="header_optionlineone">Returns</span>
          <span className="header_optionlinetwo">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionlineone">Your</span>
          <span className="header_optionlinetwo">Prime</span>
        </div>
        
      <Link to='/checkout'>
        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className="header_basketcount">
          {basket.length}</span>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
