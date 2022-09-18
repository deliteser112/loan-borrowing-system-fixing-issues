import React from "react";
import "./style.css";
import "../../../App.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {useEffect, useState} from "react";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import user from '../../images/user-profile.png';
import sideBarPic from '../../images/business-3d-325.png';
import logo from '../../images/newnewlogo.png';
import info from '../../images/identification.svg';
import commitment from '../../images/commitment.svg';
import docs from '../../images/documents.svg';
import {useNavigate} from 'react-router-dom';
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import useAuth from "../../../hooks/useAuth";

const Form4 = () => {


  const { auth } = useAuth();
  let navigate = useNavigate();
  const [estimatedPrice, setEstimatedPrice] = useState(1);
  const [downPayment, setDownPayment] = useState(0);
    
  const [id, setId] = useState(1);
 
    
    useEffect(() => {
        fetch('http://localhost:5002/kyc/getid').then((response) => response.json()).then((data) => {
            setId(data[0].id);
        }).catch((err) => {
            console.log(err.message);
        });
    }, []);


    const updatekyc = async () => {
        await fetch('http://localhost:5002/kyc/form4/' + auth?.decodedToken?.userId, {
            method: 'PUT',
            body: JSON.stringify(
                {"estimated_price": estimatedPrice, "down_payment": downPayment}
            ),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }).then((response) => response.json()).then(data => console.log(data)).catch((err) => {
            console.log(err.message);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updatekyc();
        navigate('/summary_kyc');
    };


    return (
        <div>
            <Navbar/>
            <Sidebar/>
            <div className="main">
                <div className="form-container">
                    <b>Applicant 1</b>
                    <br></br>
                    <small>Complete your Mortgage pre-approval details below</small>
                </div>
                <div className="container">
                    <img src={docs}
                        className="docs"></img>
                    <img src={info}
                        className="info"></img>
                    <img src={commitment}
                        className="commitment"></img>
                </div>

                <Form className="form4"
                    onSubmit={handleSubmit}>


                    <Form.Label className="label">
                        What is the value of the property you are thinking of buying?
                    </Form.Label>
                    <InputGroup >
                        <InputGroup.Text>SGD</InputGroup.Text>
                        <Form.Control className="input" type="number"
                            onChange={
                                (e) => setEstimatedPrice(e.target.value)
                            }
                            aria-label="Amount (to the nearest dollar)"/>
                    </InputGroup>

                    <Form.Label className="label">What is your estimated down payment?</Form.Label>
                    <br></br>
                    <InputGroup>
                        <br></br>
                        <InputGroup.Text>SGD</InputGroup.Text>
                        <Form.Control className="input" type="number"
                            onChange={
                                (e) => setDownPayment(Math.min(estimatedPrice, e.target.value))
                            }
                            aria-label="Amount (to the nearest dollar)"/>
                    </InputGroup>
                    <br></br>
                    <small>
                        Typically is 10% of the property price, however feel free to let us
                                              
                                               know your comfortable amount you can fork up
                    </small>

                    {/* to put condition here */}


                    <Form.Group className="mb-4">
                        <Form.Label className="label">Will you be having a joint applicant?</Form.Label>
                        <Form.Select className="select">
                            <option>Yes</option>
                            <option>No</option>
                        </Form.Select>
                    </Form.Group>


                    <div className="button">
                        <Button variant="warning" type="submit">
                            Review and Submit
                        </Button>
                    </div>
                </Form>
            </div>
        </div>

    );
}

export default Form4;
