import React from "react";
import {useEffect, useState} from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
// import Col from 'react-bootstrap/Col';
import Ident from "../images/identification.svg";
import Income from "../images/income.svg";
import Commitment from "../images/commitment.svg";
import Mortgage from "../images/mortgage.svg";
import Documents from "../images/documents.svg";
import {PriceChange} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import Navbar from "../borrower/kyc/navbar";
import Sidebar from "../borrower/kyc/sidebar";


const LoanForm = () => {
    let navigate = useNavigate();

    const [id, setId] = useState(1);
    const [kycId, setKycId] = useState(1);
    const [propertyId, setPropertyId] = useState(1);
    const [amount, setAmount] = useState(0);
    const [outstandingBalance, setOutstandingBalance] = useState(0);
    const [repayments, setRepayments] = useState(0);
    const [purchasePrice, setPurchasePrice] = useState(0);
    const [downPayment, setDownPayment] = useState(0);

    useEffect(() => {
        fetchLoanId();
        fetchKycId();
        fetchPropertyId();
    }, []);

    const fetchLoanId = async () => {
        fetch('http://localhost:5002/loan/getid').then((response) => response.json()).then((data) => {
            setId(!data[0].id ? 1 : parseInt(data[0].id + 1))
        }).catch((err) => {
            console.log(err.message);
        });
    }

    const fetchKycId = async () => {
        fetch('http://localhost:5002/kyc/getid').then((response) => response.json()).then((data) => {
            setKycId(!data[0].id ? 1 : parseInt(data[0].id))
        }).catch((err) => {
            console.log(err.message);
        });
    }

    const fetchPropertyId = async () => {
        fetch('http://localhost:5002/property/getid').then((response) => response.json()).then((data) => {
            setPropertyId(!data[0].id ? 1 : parseInt(data[0].id))
        }).catch((err) => {
            console.log(err.message);
        });
    }

    const createLoan = async () => {
        await fetch('http://localhost:5002/loan/createloan/', {
            method: 'POST',
            body: JSON.stringify(
                {
                    "id": id,
                    "kycId": kycId,
                    "propertyId": propertyId,
                    "amount": amount,
                    "outstandingBalance": outstandingBalance,
                    "repayments": repayments,
                    "purchasePrice": purchasePrice,
                    "downPayment": downPayment
                }
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
        createLoan();
        navigate("/borrower");
    };

    return (
        <div>
            <Navbar/>
            <Sidebar/>
            <div className="main">
                <div className="image-container-header">
                    <b>Loan Form</b>
                    <p>Loan Application Status: incomplete</p>
                    <div className="images-container">
                        <img src={Ident}
                            className="Identification"
                            alt=""></img>
                        <img src={Income}
                            className=" Income"
                            alt=""></img>
                        <img src={Commitment}
                            className="Commitment"
                            alt=""></img>
                        <img src={Mortgage}
                            className="Mortgage"
                            alt=""></img>
                        <img src={Documents}
                            className="Documents"
                            alt=""></img>
                    </div>
                </div>

                <div className="form-container">
                    <Form className="borrower-form"
                        onSubmit={handleSubmit}>
                        {/* loan information */}
                        <div className="form-container-child">
                            <div className="side-box">
                                <h6>Loan Information</h6>
                            </div>

                            <div className="form-input">
                                <Row>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Loan Amount (RM)</Form.Label>
                                        <Form.Control placeholder="" type="number"
                                        onChange={
                                            (e) => setAmount(e.target.value)
                                        }/>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Tenure Years</Form.Label>
                                        <Form.Control placeholder="" type="number"/>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Purchase Price</Form.Label>
                                        <Form.Control placeholder="" type="text"
                                         onChange={
                                            (e) => setPurchasePrice(e.target.value)
                                        }/>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Down Payment</Form.Label>
                                        <Form.Control placeholder="" type="text"
                                         onChange={
                                            (e) => setDownPayment(e.target.value)
                                        }/>
                                    </Form.Group>
                                </Row>
                            </div>
                        </div>


                        {/* bank information*/}
                        <div className="form-container-child">
                            <div className="side-box">
                                <h6>Bank Account Information</h6>
                            </div>

                            <div className="form-input">
                                                               
                                <Form.Group className="mb-3">
                                    <Form.Label>Outstanding  Balance</Form.Label>
                                    <Form.Control placeholder="" type="text"
                                     onChange={
                                        (e) => setOutstandingBalance(e.target.value)
                                    }/>
                                </Form.Group>
        
                                <Form.Group className="mb-3">
                                    <Form.Label>Monthly repayments</Form.Label>
                                    <Form.Control placeholder="" type="text"
                                     onChange={
                                                (e) => setRepayments(e.target.value)
                                            }/>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Account Name</Form.Label>
                                    <Form.Control placeholder="" type="text"/>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Account Number</Form.Label>
                                    <Form.Control placeholder="" type="number"/>
                                </Form.Group>
                            </div>
                        </div>

                        <div className="form-footer clearfix">
                            <Button onClick={
                                    () => navigate("/loan/property")
                                }
                                className='button-back'
                                variant="link">
                                Back
                            </Button>
                            <Button 
                                className='button-submit'
                                variant="warning"
                                type="submit">
                                Submit
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default LoanForm;
