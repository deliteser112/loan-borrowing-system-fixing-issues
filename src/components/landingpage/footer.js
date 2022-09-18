import "./styles.css";
import address from "../images/home/address.png";
import email from "../images/home/email.png";
import phone from "../images/home/phone.png";

import LandingNav from "./landingnav";
import cover from "../images/home/contactUs.png";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { FiPhoneCall } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

const Footer = () => {
    return ( 
        <div>
  {/* joine newsletter  */}
    
  <div className="join-newletter">
            <h1 className="title">Join Our Newsletter</h1>
            <h3>Personalized for you & your specific homebuying goals</h3>
      
            <Form className="newsletter-form">
                <Row>
            <Col>
              
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      {/* <Form.Label>Name</Form.Label> */}
                      <Form.Control type="text" placeholder="Enter Your Name" />
                    </Form.Group>
              
            </Col>
      
             <Col>
                   <Form.Group className="mb-3" controlId="formBasicEmail">
                     {/* <Form.Label>Email address</Form.Label> */}
                     <Form.Control type="email" placeholder="Enter email" />
                   </Form.Group>
              
             </Col>
      
               <Col>
                   <Button variant="warning" type="submit">
                    <FaTelegramPlane />
                       Subscribe
                   </Button>
                
               </Col>
                </Row>
            </Form>
      
    </div>
    {/* contact us  */}
    <Container>
      <Row>
        <Col className="footer-contact-us">
     <h6 style={{ color:"gray" }}>HomeCrowd SDN BHD</h6>
     <h6 style={{ color:"gray" }}>(1310658-M)</h6>
     
     <p className="footer-text"> <b className="footer-text">Address: </b>  Level 15, Menara HLX,
    3 Jalan Kia Peng,
    50450 Kuala Lumpur, Malaysia</p>
    <p className="phone-mail"><FiPhoneCall />+6010 655 7320</p>
    <p className="phone-mail"><FiMail /> hello@myhomecrowd.com</p>
        </Col>
    
        <Col className="footer-contact-us">
        <b className="bold">
        Useful Links
        </b>
        <ul className="footer-list">
         <a href="#"><li className="footer-text">Home</li></a>
         <a href="#"><li className="footer-text">About Us</li></a>
         <a href="#"><li className="footer-text">Terms of service</li></a>
         <a href="#"><li className="footer-text">Privacy Policy</li></a>
        </ul>
        
        </Col>
    
        <Col className="footer-contact-us">
        <b className="bold">Main Information</b>
        <ul className="footer-list">
         <Link to="/start-borrowing"><li className="footer-text">Borrow</li></Link> 
         <Link to="/start-lending"><li className="footer-text">Lend</li></Link>
         {/* <Link to="#"><li className="footer-text">Campaigns</li></Link> <br></br> */}
        </ul>
        
        
        </Col>
        
        <Col className="footer-contact-us">
        <b style={{ color:"gray" }}>
        Our Social Media
        </b>
        <p className="footer-text">Please check us out on other social media platform</p>
      <div className="icon-container">
         <a target="_blank" href="https://www.instagram.com/myhomecrowd/?hl=en" ><FiInstagram className="social-media-icon" /></a>
         <a target="_blank" href="https://www.facebook.com/P2PHomeCrowd/"><FiFacebook className="social-media-icon" /></a>
         <a target="_blank" href="https://www.linkedin.com/company/home-crowd/"><FiLinkedin className="social-media-icon" /></a>
        
      </div>
        </Col>
      </Row>
    </Container>
    
    {/* footer  */}
    
    <div className="footer">
    
    <p className="copy-right">© Copyright HomeCrowd Sdn Bhd | All Rights Reserved</p>
    
    </div>
    
        </div>
     );
}
 
export default Footer;