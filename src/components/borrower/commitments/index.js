import React from "react";
import "./style.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Ident from "../../images/identification.svg";
import Income from "../../images/income.svg";
import Commitment from "../../images/commitment.svg";
import Mortgage from "../../images/mortgage.svg";
import Documents from "../../images/documents.svg";
import { useNavigate } from "react-router-dom";




const OtherFinancingDetails = () => {
let navigate = useNavigate();



  return (
    <div className="main">
      <div className="image-container-header">
        <b>Commitments</b>
        <p>Loan Application Status incomplete</p>
        <div className="images-container">
          <img src={Ident} className="Identification" alt=""></img>
          <img src={Income} className=" Income" alt=""></img>
          <img src={Commitment} className="Commitment" alt=""></img>
          <img src={Mortgage} className="Mortgage" alt=""></img>
          <img src={Documents} className="Documents" alt=""></img>
        </div>
      </div>
      <Form className="borrower-form">    
                {/* commitment */}
                <div className="form-container-child">
                    <div className="side-box">
                        <h6>Commitments</h6> 
                        <br/>
                        <Button variant="warning" size="sm">+ Add more credit card</Button>
                    </div>
                    <div className="form-input">
                        <Row>
                            <Form.Group as={Col} className="mb-3">
                                <Form.Label>Type:</Form.Label>
                                <Form.Select name="Type">
                                    <option disabled selected>--Select Loan--</option>
                                    <option id="Credit Card">Credit Card</option>
                                    <option id="Debit Card">Debit Card</option>
                                </Form.Select> 
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3">
                                <Form.Label>Outstanding Balance</Form.Label>
                                <Form.Control placeholder="" />
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3">
                                <Form.Label>Select Bank Name:</Form.Label>
                                
                                <Form.Select name="banks" id="banks">
                                    <option disabled selected>
                                    --Select Bank--
                                    </option>
                                    <option value="RHB Bank">RHB Bank</option>
                                    <option value="Allicance Bank">Alliance Bank</option>
                                    <option value="AmBank">AmBank</option>
                                
                                    <option value="CIMB Bank">CIMB Bank</option>
                                    <option value="Hong Leong Bank">Hong Leong Bank</option>
                                    <option value="Public Bank">Public Bank</option>
                                    <option value="Affin Bank">Affin Bank</option>
                                    <option value="Maybank">Maybank</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3">
                                <Form.Label>Monthly Repayment</Form.Label>
                                <Form.Control placeholder="" type="number" />
                            </Form.Group>
                        </Row>
                    </div>
                </div>

                {/* loans */}
                <div className="form-container-child">
                    <div className="side-box">
                        <h6>Loans</h6>
                        <br/>
                        <Button variant="warning" size="sm">+ Add more loan</Button>
                    </div>
                    <div className="form-input">
                        <Row>
                            <Form.Group as={Col} className="mb-3">
                                <Form.Label>Type:</Form.Label>
                                <Form.Select name="" id="">
                                    <option disabled selected>
                                    --Select Loan--
                                    </option>
                                    <option value="">Personal Loan</option>
                                    <option value="">Car Loan</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3">
                                <Form.Label>Monthly Repayment</Form.Label>
                                <Form.Control placeholder="" type="number" />
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3">
                                <Form.Label>Source of Loan</Form.Label>
                                <Form.Control placeholder="" type="text" />
                            </Form.Group>
                        </Row>
                    </div>
                </div>

                {/* bills */}
                <div className="form-container-child">
                    <div className="side-box">
                        <h6>Bills</h6>
                    </div>
                    <div className="form-input">
                        <Row>
                            <Form.Group as={Col} className="mb-3">
                                <Form.Label>Electricity Bill</Form.Label>
                                <Form.Control placeholder="" type="number" />
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3">
                                <Form.Label>Water Bill</Form.Label>
                                <Form.Control placeholder="" type="number" />
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3">
                                <Form.Label>Internet Bill</Form.Label>
                                <Form.Control placeholder="" type="number" />
                            </Form.Group>
                        </Row>
                    </div>
                </div>

                <div className="form-footer clearfix">
                    <Button onClick={()=>navigate("/borrower")} className='button-back' variant="link">
                        Back
                    </Button>
                    <Button  onClick={()=>navigate("/borrower")} className='button-submit' variant="warning" type="submit">
                        Submit
                    </Button>
                </div>
            </Form>
      {/* form container */}
    </div>
    // main
  );
};

export default OtherFinancingDetails;
