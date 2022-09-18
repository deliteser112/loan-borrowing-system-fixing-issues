import LandingNav from "./landingnav";
import "./styles.css";
import {Card} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {Container} from "react-bootstrap";
import bg from "../images/home/lender/banner.png";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Button} from "react-bootstrap";
import trad1 from "../images/home/borrower/trad1.svg";
import trad2 from "../images/home/borrower/trad2.svg";
import trad3 from "../images/home/borrower/trad3.svg";

import step1 from "../images/home/lender/step1.svg";
import step2 from "../images/home/borrower/step2.svg";
import step3 from "../images/home/borrower/step3.svg";
import step4 from "../images/home/borrower/step44.svg";

import holistic from "../images/home/borrower/holistic.svg";
import freelancer from "../images/home/borrower/freelancer.svg";
import botBanner from "../images/home/borrower/botBanner.svg";
import {Link} from "react-router-dom";
import {FiPhoneCall} from "react-icons/fi";
import {FiMail} from "react-icons/fi";
import Footer from "./footer";
import {FiFacebook} from "react-icons/fi";
import {FiInstagram} from "react-icons/fi";
import {FiLinkedin} from "react-icons/fi";
import {FaTelegramPlane} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import { calculateMortgage } from "./calculateMortgage";
// import { BiArrowToRight } from "react-icons/bi";
import NumberFormat from 'react-number-format';

const StartBorrowing = () => {
    const [show, setShow] = useState(false);
    const [amount, setAmount] = useState(0);
    const [monthlyInstallement, setMonthlyInstallement] = useState(1);
    const [minIncome, setMinIncome] = useState(1);
    const [year, setYear] =useState(35);
    let mortgage = calculateMortgage;
    let navigate = useNavigate();

    useEffect(() => {
      let sum = mortgage(amount,year,0.1,5);
      setMonthlyInstallement(sum);
      setMinIncome(sum*2);
  }, [amount]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(show){
          navigate('/auth');
        }
        setShow(true);
    };

    return (
        <div>
            <LandingNav/> {/* 1  */}
            <div onSubmit={handleSubmit}>
                <img src={bg}
                    className="bg"
                    alt=""/>
                <div className="bg-text">
                    <h1 className="owning-home">
                        OWNING YOUR 1ST HOME{" "}
                        <span className="owning-home-span">- IT'S EASIER WITH US</span>
                    </h1>

                    <h5 className="get-pre-qualified">
                        Get Pre-Qualified{" "}
                        <span className="get-pre-qualified-span">Now</span>
                    </h5>
                    <p className="free-hassle">
                        With our hassle-free peer-to-peer (P2P) lending platform
                    </p>
                    <Container>
                        <Card className="calculate-loan">
                            <Form>
                                <Form.Label>
                                    What is the property value (SGD) you are buying?
                                </Form.Label>
                                
                                <NumberFormat  
                                    thousandSeparator={true}
                                    prefix={'SGD'}
                                    onValueChange={(values) => {
                                        const { formattedValue, value } = values;
                                        // formattedValue = $2,223
                                        // value ie, 2223
                                        setAmount(value);
                                    }
                                }/>

                                <Form.Label>How many years? (Loan tenure)</Form.Label>

                                <div className="range">
                                    30{" "}
                                    <input type="range"
                                        min={30}
                                        max={35}
                                        style={
                                            {width: "70px"}
                                        }
                                        onChange={(e) => {setYear(e.target.value)}
                                        }/>
                                    35
                                </div>
                                <Button variant="warning" type="submit" className="submit">
                                    {!show ? 'Calculate Now' : 'See if you qualify'}
                                </Button>
                            </Form>
                        </Card>
                        <Card className="calaulate-result">
                            <p>Monthly Installment</p>
                            {
                            show ? "SGD " + monthlyInstallement : null
                        }
                            <p>Minimum Income Required</p>
                            {
                            show ? "SGD " + minIncome : null
                        }
                            <p>Interest Rate</p>
                            <b>5% *</b>
                        </Card>
                    </Container>
                </div>
            </div>
            <div className="headline">
                <h1 className="title-gold">
                    THE TRADITIONAL MORTGAGE INDUSTRY{" "}
                    <span className="title-yellow">PAIN POINTS</span>
                    {" "} </h1>
                <b className="text-gold">
                    {" "}
                    Since 2017, 60% of Malaysian homebuyers had their mortgage loan
                                              applications declined by traditional banks.
                </b>
            </div>
            <Container>
                <Row>
                    <Col>
                        <img src={trad1}
                            alt=""
                            className="trad"></img>
                        <p>Home Loan approval is challenging</p>
                    </Col>
                    <Col>
                        <img src={trad2}
                            alt=""
                            className="trad"></img>
                        <p>2/3 of Malaysian millenials have yet to own a home</p>
                    </Col>
                    <Col>
                        <img src={trad3}
                            alt=""
                            className="trad"></img>
                        <p>
                            Survey says each person wants to own a home in the next 5 years
                        </p>
                    </Col>
                </Row>
            </Container>
            <div className="headline">
                <h1 className="title-gold">
                    UNLOCK YOUR PROPERTY BY{" "}
                    <span className="title-yellow">FOLLOWING THIS STEPS</span>
                </h1>
                <b className="text-gold">
                    Join us in humanizing financial solutions through technology
                </b>
            </div>

            <Container className="step-container">
                <span className="step-span">
                    <h1 className="step-title">Step1</h1>
                    <div className="step-text">
                        <b>
                            An eligible loan applicant applies for home financing by
                                                                  submitting the necessary details on HomeCrowd platform.
                        </b>
                    </div>
                </span>
                <img src={step1}
                    alt=""
                    className="step-pic-right"></img>
            </Container>

            <Container className="step-container">
                <img src={step2}
                    alt=""
                    className="step-pic-left"></img>
                <span className="step-span">
                    <h1 className="step-title">Step2</h1>
                    <div className="step-text">
                        <b>
                            Our team authenticate the loan applicant details, assesses their
                                                                  credit score & processes their application.
                        </b>
                    </div>
                </span>
            </Container>

            <Container className="step-container">
                <span className="step-span">
                    <h1 className="step-title">Step3</h1>
                    <div className="step-text">
                        <b>Our pool of lenders bid on funding eligible loan portfolios.</b>
                    </div>
                </span>
                <img src={step3}
                    alt=""
                    className="step-pic-right"></img>
            </Container>

            <Container className="step-container">
                <img src={step4}
                    alt=""
                    className="step-pic-left"></img>
                <span className="step-span">
                    <h1 className="step-title">Step4</h1>
                    <div className="step-text">
                        <b>
                            Funds are then disbursed to the property developer/owner on behalf
                                                                  of the loan applicant, and you can move into your new home.
                        </b>
                    </div>
                </span>
            </Container>

            <div className="headline">
                <h1 className="title-gold">
                    HOW ARE WE
                    <span className="title-yellow">DIFFERENT</span>
                </h1>
                <p className="text-gold">
                    We are millennial ourselves, understand your home financing needs
                                              better
                </p>
            </div>

            <Container>
                <Card className="card"
                    style={
                        {width: "30rem"}
                }>
                    <Card.Img variant="top"
                        src={holistic}
                        className="card-image"/>
                    <Card.Body>
                        <Card.Title>Holistic Credit Score</Card.Title>
                        <Card.Text>
                            We evaluate your credit worthiness beyond standard credit bureau
                                                                  reports, and are flexible in serving your financing needs.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="card"
                    style={
                        {width: "30rem"}
                }>
                    <Card.Img variant="top"
                        src={freelancer}
                        className="card-image"/>
                    <Card.Body>
                        <Card.Title>Freelancer/Gig Economy Worker</Card.Title>
                        <Card.Text>
                            We understand the flexibility and freedom of more and more
                                                                  millennials choosing to become their own boss. We are able to
                                                                  evaluate credit worthiness of those are underserved by traditional
                                                                  banking.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>

            <img src={botBanner}
                alt=""
                className="botbanner"></img>
            <div className="botbanner-text">
                <h1 className="title-white">
                    UNLOCK YOUR PROPERTY BY FOLLOWING THESE STEPS
                </h1>
                <p className="text-white">
                    Join us in humanizing financial solutions through technology
                </p>
                <Button className="banner-button"
                    
                >SIGN UP</Button>
            </div>
            <Footer/>
        </div>
    );
};

export default StartBorrowing;
