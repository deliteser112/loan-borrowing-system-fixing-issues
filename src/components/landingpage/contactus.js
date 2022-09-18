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
import Footer from "./footer";


const ContactUs = () => {
  return (
<div>
        <div className="contact-page">
          <LandingNav />
          <img src={cover} alt="cover" className="cover"></img>
          <h1 className="contact-us-title">
            CONTACT <span className="contact-us-span">US</span>
          </h1>
          <h1 className="get-in-touch">Get In Touch With Us</h1>
    
          <div className="contact-container">
            <Container>
              <Col className="contact-col">
                <div className="form-span">
                  <p className="contact-details">
                    Address:<br></br>
                    Level 15, Menara HLX,<br></br>
    3 Jalan Kia Peng,<br></br>
    50450 Kuala Lumpur, Malaysia.
                  </p>
                  <img className="icon-contact" src={address} alt="address"></img>
                </div>
    
                <div className="form-span">
                  <p className="contact-details">
                    Email:<br></br>
                    hello@myhomecrowd.com
                  </p>
                  <img className="icon-contact" src={email} alt="address"></img>
                </div>
    
                <div className="form-span">
                  <p className="contact-details">
                    Contact No:<br></br>
                    +6010 655 7320
                  </p>
                  <img className="icon-contact" src={phone} alt="address"></img>
                </div>
              </Col>
    
              <Col>
                <h1 className="title-black">
                  What's On<span className="title-gold">Your Mind</span>
                </h1>
                <h3 className="title-black">We'd Love To Hear From You</h3>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                   
                    <Form.Control type="text" placeholder="Your Name" className="input-field" />
                  </Form.Group>
    
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                   
                    <Form.Control type="email" placeholder="Your Email Address" className="input-field"/>
                  </Form.Group>
    
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                   
                    <Form.Control type="tel" placeholder="Your Phone Number" className="input-field" />
                  </Form.Group>
    
                  <Form.Group className="mb-3">
                  
                    <Form.Select className="input-field">
                      <option disabled>Inquiry for:</option>
                      <option>Borrower</option>
                      <option>Lender</option>
                      <option>Borrower and Lender</option>
                    </Form.Select>
                  </Form.Group>
    
                  
                    
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                          
                            <Form.Control as="textarea" placeholder="Your Inquiry" rows="4" name="inquiry" className="input-field" />
                        </Form.Group>
                  
    
                  <Button type="submit" variant="warning" className="send-button">Send an Inquiry</Button>
                </Form>
              </Col>
            </Container>
          </div>
        </div>
    
   <Footer />
    
</div>



  );
};

export default ContactUs;
