import React from "react";
import {useEffect} from "react";
import {useState} from "react";
import "./style.css";
import image from "../../images/HC_Logo_square.png";
import user from '../../images/user-profile.png';
import useAuth from "../../../hooks/useAuth";


const Navbar = () => {

    
    const { auth } = useAuth();

    return ( <div>
          <div className="navbar">         
            <h5 className="KYC">KYC</h5>
            <div className="profile-section">
            <button  className="refer">Refer a Friend</button>
              <a href="#">

            <img src={user} className="user"></img>&nbsp;
            <small>{auth?.decodedToken?.name}</small>
              </a>
            
            </div>
          </div>
    </div> );
}
 
export default Navbar;