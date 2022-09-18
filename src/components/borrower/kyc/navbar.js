import React from "react";
import "./style.css";
import "../../../App.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import user from '../../images/user-profile.png';
import sideBarPic from '../../images/business-3d-325.png';
import logo from '../../images/newnewlogo.png';
import info from '../../images/identification.svg';
import commitment from '../../images/commitment.svg';
import docs from '../../images/documents.svg';
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