import React from "react";
import "./styles.css"
import Image from "../images/newnewlogo.png"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import {Row }from "react-bootstrap";
import {Col }from "react-bootstrap";

const LandingNav = () => {
    let navigate = useNavigate();
    return ( 
        <div className="landing-nav">
        <Row>
        <Col className="logo-col">
            
             <Link to="/landing-page"><img src={Image} alt="logo" className="logo-nav"></img></Link>  
            
        </Col>
              <Col>
                  <ul className="nav-list">
                      <li><Link className="nav-links" to="/start-borrowing">Borrow</Link></li>
                      <li><Link className="nav-links" to="/start-lending">Lend</Link></li>
                      {/* <li><Link className="nav-links" to="">Campaigns</Link></li> */}
                  
                      <li><Link className="nav-links" to="/contact-us">Contact Us</Link></li>
                      <li><button onClick={()=>navigate('/auth')} className="login-button">Login</button></li>
                      <li><button onClick={()=>navigate('/auth')} className="signup-button">Sign Up</button></li>
                  </ul>
              </Col>
                
           
             </Row>
        </div>
     );
}
 
export default LandingNav;