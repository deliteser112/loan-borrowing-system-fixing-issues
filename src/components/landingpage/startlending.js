import LandingNav from "./landingnav";
import "./styles.css";
import bg2 from "../images/blog/blog12.jpg";
import step1 from "../images/home/lender/step1.svg";
import step2 from "../images/home/lender/step2.svg";
import step3 from "../images/home/lender/step3.svg";
import step4 from "../images/home/lender/step4.svg";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import comp from "../images/home/lender/comp.svg";
import social from "../images/home/lender/social.svg";
import diversity from "../images/home/lender/diversity.svg";
import security from "../images/home/lender/security.svg";
import { Container } from "react-bootstrap";
import { Stepper } from "react-form-stepper";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import banner from "../images/home/lender/botBanner.svg";
import { FiPhoneCall } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import Footer from "./footer";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const StartLending = () => {
    let navigate = useNavigate();
  return (
    <div>
      <LandingNav />
      <div className="hero">
        <img src={bg2} alt="" className="whyhomecrowd-background"></img>
        <div className="why-container2">
          <h1 className="why-title2">
            Stable & Transparent Returns From
            <span className="why-span2"> Diversifying Your Investments</span>
          </h1>

          <p className="why-text2">
            With our hassle-free peer-to-peer (P2P) lending platform
          </p>
        </div>
      </div>
      <div className="headline2">
        <h1 className="title-gold">
          BE PART OF THE NEW COMMUNITY FINANCING{" "}
          <span className="title-yellow">THE MILLENNIALS' FUTURE</span>{" "}
        </h1>
        <b className="text-gold">
          {" "}
          With competitive returns - a fixed-income alternative, up to 12% P.A.
        </b>
      </div>

      <div className="steps-container-lending">
        <Container>
          <img src={step1} className="step-lending-pic" alt=""></img>
          <img src={step2} className="step-lending-pic" alt=""></img>
          <img src={step3} className="step-lending-pic" alt=""></img>
          <img src={step4} className="step-lending-pic" alt=""></img>
        </Container>
        <Stepper
          className="stepper"
          steps={[
            { label: "Step 1" },
            { label: "Step 2" },
            { label: "Step 3" },
            { label: "Step 4" },
          ]}
        />
        <Container>
          <Col className="steps-text">
            <p>
              Browse our offerings and view our portfolio of property backed
              home loans.
            </p>
          </Col>

          <Col className="steps-text">
            <p>
              Invest anywhere and anytime: choose the loan portfolio you'll like
              to invest in and set your investment amount for as little as
              RM500.
            </p>
          </Col>

          <Col className="steps-text">
            <p>Get paid quarterly - and earn returns of up to 12% annually.</p>
          </Col>

          <Col className="steps-text">
            <p>
              Cash-out when you need to: your return is optimized if held for
              the maximum duration of the loan, however, you have the choice of
              cashing-out by selling it in our secondary exchange as well.
            </p>
          </Col>
        </Container>
      </div>
      <div className="headline2">
        <h1 className="title-gold">
          UNLOCK A NEW ASSET,
          <span className="title-yellow"> INVEST IN MILLENNIAL</span>{" "}
        </h1>
        <b className="text-gold">
          {" "}
          Historically, only banks and large institutions could invest in
          consumer credit. With HomeCrowd, you get access to a new asset class
          that these institutions have enjoyed for decades - enabling you to
          diversify your portfolio, and earn competitive returns.
        </b>
      </div>
      <Container>
        <Card className="card" style={{ width: "20rem" }}>
          <Card.Img variant="top" src={comp} className="card-image" />
          <Card.Body>
            <Card.Title>Competitive Returns</Card.Title>
            <Card.Text>
              A fixed-income alternative, with returns of up to 12% P.A. No
              entry fees charged.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="card" style={{ width: "20rem" }}>
          <Card.Img variant="top" src={social} className="card-image" />
          <Card.Body>
            <Card.Title> Social Impact Investment</Card.Title>
            <Card.Text>
              Invest and create a positive impact with your money.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="card" style={{ width: "20rem" }}>
          <Card.Img variant="top" src={diversity} className="card-image" />
          <Card.Body>
            <Card.Title> Diversify</Card.Title>
            <Card.Text>
              Distribute your funds across many loan notes as possible to
              minimize default risk.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="card" style={{ width: "20rem" }}>
          <Card.Img variant="top" src={security} className="card-image" />
          <Card.Body>
            <Card.Title> Security</Card.Title>
            <Card.Text>
              All money received from lenders is held by an independent and
              licensed trustee. We hold no authorization over the money held.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>

      <img src={banner} alt="" className="botbanner"></img>
      <div className="botbanner-text">
        <h1 className="title-white">
        DEALS FUNDED BY PEOPLE
            JUST LIKE YOU AND ME
        </h1>
       
        <Button className="banner-button" onClick={() => navigate("/auth")}>SIGN UP</Button>
      </div>
<Footer />



    </div>
  );
};

export default StartLending;
