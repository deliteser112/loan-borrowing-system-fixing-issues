import React from "react";
import "./styles.css";
import LandingNav from "./landingnav";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Footer from "./footer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import WhyHomeCrowd from "../images/home/about/whyHomecrowd.png";
import WhyHomeCrowd1 from "../images/home/whyHomecrowd1.svg";
import WhyHomeCrowd2 from "../images/home/whyHomecrowd2.svg";
import WhyHomeCrowd3 from "../images/home/whyHomecrowd3.svg";
import WhyHomeCrowd4 from "../images/home/whyHomecrowd4.svg";
import WhyHomeCrowd5 from "../images/home/whyHomecrowd5.svg";
import WhyHomeCrowd6 from "../images/home/whyHomecrowd6.svg";
// import { MDBContainer, MDBIframe } from "mdbreact";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import poster from "../images/home/happy-couple-drinking-coffee.png";
// import ReactCardFlip from 'react-card-flip';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
// import ListGroup from "react-bootstrap/ListGroup";
import partner1 from "../images/home/Partner/octopus_logo_black.png";
import partner2 from "../images/home/Partner/fintech.png";
import partner3 from "../images/home/Partner/global.png";
import partner4 from "../images/home/Partner/Impact_Hub_logo.svg.png";

import investor1 from "../images/home/investors/artesian.svg";
import investor2 from "../images/home/investors/china.svg";
import investor3 from "../images/home/investors/sosv.svg";

import megamarket from "../images/home/mediaCoverage/mergermarket.jfif";
import vulcan from "../images/home/mediaCoverage/vulcan.svg";
import E27 from "../images/home/mediaCoverage/e27.svg";
import techInAsia from "../images/home/mediaCoverage/tech-in-asia-logo-vector.png";
import techNode from "../images/home/mediaCoverage/Technode logo.png";

import testimony1 from "../images/home/testimony1.png";
import testimony2 from "../images/home/testimony2.png";
import testimony3 from "../images/home/testimony3.png";

import { FiPhoneCall } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { BiArrowToRight } from "react-icons/bi";
import blog1 from "../images/blog/blog2.png";
import blog2 from "../images/blog/blog12.jpg"


const LandingPage = () => {
  let navigate = useNavigate();


  return (
    <div className="landing">
      {/* hero */}
      <div className="hero">
        <LandingNav />
        <img
          src={WhyHomeCrowd}
          alt="WhyHomeCrowd"
          className="whyhomecrowd-background"
        ></img>
        <div className="why-container">
          <h1 className="why-title">Smarter Way To Own Your <h1 className="why-span">First Home</h1></h1>
         
          <p className="why-text">
            Your journey to homeownership starts with us
          </p>
          <div className="why-buttons>">
            <button onClick={()=>navigate('/start-borrowing')} className="start-borrowing"> Start Borrwing <BiArrowToRight/></button>
            <button onClick={()=>navigate('/start-lending')} className="start-lending"> Start lending <BiArrowToRight/></button>
          </div>
        </div>
      </div>
      {/* about us */}
      <div className="about-us">
        <Container>
          <Col>
            <div className="ratio ratio-16x9">
              <iframe
                poster={poster}
                src="https://www.youtube.com/embed/jr-Vo58RxI4"
                title="YouTube video"
                controlls
              ></iframe>
            </div>
          </Col>

          <Col className="about">
            <h2 className="about-title">BEATING CONVENTIONAL METHOD</h2>
            <br></br>
            <h4>Empowering society with home ownership and rewarding trust</h4>
            <br></br>
            <p className="about-text">
              HomeCrowd is a Web3 impact enterprise that helps underserved
              millennial homebuyers by using a holistic data-driven credit
              scoring that grants them access to a peer-to-peer (P2P) lending
              platform for mortgage, powered by blockchain technologies. We
              believe that technology can make owning your first home simpler
              and easier. Through education, personalized digital experiences,
              and human support, we aim to build stronger communities where
              everyone can experience the pride of owning their own home.
            </p>
          </Col>
        </Container>
      </div>
      {/* why homecrowd cards  */}
<div>
  <h1 className="title">WHY HOMECROWD</h1>
 
  
        <Container>
          <Card className="card" style={{ width: "20rem" }}>
            <Card.Img variant="top" src={WhyHomeCrowd1} className="card-image"/>
            <Card.Body>
              <Card.Title>Empowering Millennials</Card.Title>
              <Card.Text>
                Empowering deserving millennials with home ownership
              </Card.Text>
            </Card.Body>
          </Card>
  
          <Card className="card" style={{ width: "20rem" }}>
            <Card.Img variant="top" src={WhyHomeCrowd2} className="card-image"/>
            <Card.Body>
              <Card.Title>Competitive Rates</Card.Title>
              <Card.Text>
                We believe every individual’s credit score should be measured
                fairly. Thereby, we offer a competitive rate based on your
                holistic credit score
              </Card.Text>
            </Card.Body>
          </Card>
  
          <Card  className="card" style={{ width: "20rem" }}>
            <Card.Img variant="top" src={WhyHomeCrowd3} className="card-image"/>
            <Card.Body>
              <Card.Title>Transparent & Upfront</Card.Title>
              <Card.Text>
                We keep our terms fair, our rates low, and our fees, transparent.
                For your peace of mind, we do not charge late interest or early
                repayment fees
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
        <Container>
          <Card  className="card" style={{ width: "20rem" }}>
            <Card.Img variant="top" src={WhyHomeCrowd4} className="card-image"/>
            <Card.Body>
              <Card.Title>Innovative Technology</Card.Title>
              <Card.Text>
                We provide a convenient online platform where you may apply for a
                loan or invest in our platform at anytime and anywhere with just
                clicks - skipping tedious paper work
              </Card.Text>
            </Card.Body>
          </Card>
  
          <Card  className="card" style={{ width: "20rem"}}>
            <Card.Img variant="top" src={WhyHomeCrowd5} className="card-image"/>
            <Card.Body>
              <Card.Title>Financially Literate Choice</Card.Title>
              <Card.Text>
                As your digital personal financing assistant, we are focused on
                your financial needs and not cross selling your details.
              </Card.Text>
            </Card.Body>
          </Card>
  
          <Card  className="card"  style={{ width: "20rem" }}>
            <Card.Img variant="top" src={WhyHomeCrowd6} className="card-image"/>
            <Card.Body>
              <Card.Title>Safe & Secure</Card.Title>
              <Card.Text>
                Your loan application and/or loan investment information are
                secured with industry-standard encryption. Rest assured that your
                valuable data is safe with us.
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
  
</div>
      {/* borrower-lender  cta */}
      <div className="containercta">
        <div className="split left">
          <img src={blog1} alt="" className="cta-pic-left"/>
          <h1 className="ctah1">Borrower</h1>
          <p className="cta-p text-center">
            Do you want to buy a house without the hassle?
          </p>
          <Link to="/" className="buttoncta">
            Find Out More
          </Link>
        </div>
        <div className="split right">
        <img src={blog2} alt="" className="cta-pic-right"/>
          <h1 className="ctah1">Lender</h1>
          <p className="cta-p text-center">
            Do you want to help society by funding their dream of buying a
            house?
          </p>
          <Link to="/" className="buttoncta">
            Find Out More
          </Link>
        </div>
      </div>

      {/* partners */}

      <div className="partners">
      <h1>Our Partners</h1>
        <Container className="partners-container">
          <img src={partner1} alt="" className="partners-pic"></img>
          <img src={partner2} alt="" className="partners-pic"></img>
          <img src={partner3} alt="" className="partners-pic"></img>
          <img src={partner4} alt="" className="partners-pic"></img>
        </Container>
      </div>

      {/* investors  */}

      <div className="partners">
      <h1>Our Investors</h1>
        <Container>
          <img src={investor1} alt="" className="partners-pic"></img>
          <img src={investor2} alt="" className="partners-pic"></img>
          <img src={investor3} alt="" className="partners-pic"></img>
        </Container>
      </div>

      {/* media coverage  */}

   <div className="media">
       <h1>MEDIA COVERAGE</h1>
    
      <Row className="row-cards">
         
        <Col className="col-cards">
             <Card className="cardmedia">
               <Card.Img variant="top" src={megamarket} className="card-image"/>
               <Card.Body>
                 <a
                   href="https://drive.google.com/file/d/1-mDfN1WL4d068VAwBuL1BcfB0UCH51bd/view"
                 
                 >
                   <Card.Title className="cardmedia-text">
                     HomeCrowd plans to raise seed funding next year for services
                     expansion
                   </Card.Title>
                 </a>
               </Card.Body>
             </Card>
        </Col>
        
         <Col>
            <Card className="cardmedia">
              <Card.Img variant="top" src={techInAsia} className="card-image"/>
              <Card.Body>
                <a href="https://www.techinasia.com/equo-altotech-pitch-finals-startup-arena-pitch-battle-2021">
                  <Card.Title className="cardmedia-text">
                    HomeCrowd represented Malaysia in Startup Arena Pitch Arena with
                    other SEA's startups in the ESG theme
                  </Card.Title>
                </a>
              </Card.Body>
            </Card>
         </Col>
        
          <Col>
             <Card className="cardmedia">
               <Card.Img variant="top" src={techNode} className="card-image"/>
               <Card.Body>
                 <a href="https://technode.global/2022/03/25/fintech-continues-to-be-a-hot-sector-in-southeast-asia-after-a-booming-2021/">
                   <Card.Title className="cardmedia-text">
                     HomeCrowd's founder, Dave Chew's interview session with Technode
                   </Card.Title >
                 </a>
               </Card.Body>
             </Card>
          </Col>
        
          <Col>
             <Card className="cardmedia">
               <Card.Img variant="top" src={E27} className="card-image"/>
               <Card.Body>
                 <a href="https://e27.co/chinaccelerator-announces-9-startups-in-the-16th-demo-day-to-bridge-china-to-the-world-20191127/">
                   <Card.Title className="cardmedia-text">
                     Chinaccelerator announces 9 startups including HomeCrowd in the
                     16th Demo Day
                   </Card.Title>
                 </a>
               </Card.Body>
             </Card>
          </Col>
        
          <Col>
             <Card className="cardmedia">
               <Card.Img variant="top" src={vulcan} className="card-image"/>
               <Card.Body>
                 <a href="https://vulcanpost.com/694065/homecrowd-crowdlending-platform-millennial-buy-home-malaysia/?fbclid=IwAR2MsyCwCzyBEDoJtNiwHgrfWoqqmtf4zhjcSQ4xsAK6_B2Tsu8hNsGAIDs">
                   <Card.Title className="cardmedia-text">
                     If Banks Reject Your Home Loan Request, This M’sian Site Lets
                     Strangers Lend You Funds First
                   </Card.Title>
                 </a>
               </Card.Body>
             </Card>
          </Col>
      </Row>
       
   </div>

      {/* testimony  */}

   {/* <div className="carousel">
     
         <Carousel variant="dark">
           <Carousel.Item className="carousel-item">
    <Row>
          <Col className="col-carousel-image">
           
                  <img className="carousel-pic" src={testimony1} alt="First slide" />
              
          </Col>
             <Col className="col-carousel-caption">
                   <Carousel.Caption>
                     <h5>
                       We have been rejected by 2 banks for our home financing and we
                       would like to try HomeCrowd.
                     </h5>
                     <p>KENNETH</p>
                     
                     <p>A young couple</p>
                     <p>Borrower</p>
                   </Carousel.Caption>
             </Col>
          
    </Row>
            </Carousel.Item>
        
           <Carousel.Item>
             <img className="carousel-pic" src={testimony2} alt="Second slide" />
             <Carousel.Caption>
               <b>
                 I'm keen to invest into HomeCrowd to support younger millennial to
                 achieve their dream home ownership
               </b>
               <p>THOMAS KOSHY</p>
            
               <p>A baby boomer</p>
              
               <p>Lender</p>
             </Carousel.Caption>
           </Carousel.Item>
       
           <Carousel.Item>
             <img className="carousel-pic" src={testimony3} alt="Third slide" />
             <Carousel.Caption>
               <b>
                 I'm keen to buy my 1st house at Camelia Services Suite priced at
                 RM500k, financing with HomeCrowd.
               </b>
               <p>LIM CP</p>
               
               <p>Millenial</p>
               <p>Borrower </p>
             </Carousel.Caption>
           </Carousel.Item>
         </Carousel>
       
   </div> */}
    
   <Footer />


    </div>
  );
};

export default LandingPage;
