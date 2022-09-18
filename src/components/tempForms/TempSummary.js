import "../borrower/style.css";
import "./style.css";
import Button from "react-bootstrap/Button";
import React, {useState, useEffect} from "react";
import {Col} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import {useNavigate} from "react-router-dom";
import Navbar from "../borrower/kyc/navbar";
import Sidebar from "../borrower/kyc/sidebar";




const TempSummaryForms = () => {


    
    let navigate = useNavigate();
    // Get property
    const [name, setName] = useState("");
    const [type, setType] = useState('A');
    const [address, setAddress] = useState("");
    const [marketValue, setMarketValue] = useState(0);
    const [price, setPrice] = useState(0);
    const [propertyId, setPropertyId] = useState(1);

    const fetchPropertyId = async () => {
        fetch('http://localhost:5002/property/getid').then((response) => response.json()).then((data) => {
            setPropertyId(!data[0].id ? 1 : parseInt(data[0].id))
        }).catch((err) => {
            console.log(err.message);
        });
    }
    // Get Loan
    const [loanId, setLoanId] = useState(1);
    const [amount, setAmount] = useState(0);
    const [outstandingBalance, setOutstandingBalance] = useState(0);
    const [repayments, setRepayments] = useState(0);
    const [purchasePrice, setPurchasePrice] = useState(0);
    const [downPayment, setDownPayment] = useState(0);

    const fetchLoanId = async () => {
        fetch('http://localhost:5002/loan/getid').then((response) => response.json()).then((data) => {
            setLoanId(!data[0].id ? 1 : parseInt(data[0].id))
        }).catch((err) => {
            console.log(err.message);
        });
    }

    const fetchProperty = async () => {
        fetch('http://localhost:5002/property/getproperty/' + propertyId).then((response) => response.json()).then((data) => {
            setName(data[0].name);
            setType(data[0].type);
            setAddress(data[0].address);
            setMarketValue(data[0].marketValue);
            setPrice(data[0].price);
        });
    }
    const fetchLoan = async () => {
        fetch('http://localhost:5002/loan/getloan/' + loanId).then((response) => response.json()).then((data) => {
            setAmount(data[0].amount);
            setOutstandingBalance(data[0].outstandingBalance);
            setRepayments(data[0].repayments);
            setPurchasePrice(data[0].purchasePrice);
            setDownPayment(data[0].downPayment);
        });
    }
    useEffect(() => {
        fetchPropertyId();
        fetchLoanId();
    }, []);
    useEffect(() => {
        fetchProperty();
        fetchLoan();
    }, [loanId, propertyId]);

    return (
        <div>
            <Navbar/>
            <Sidebar/>
            <div className="main">
                <div className="summary-container">
                    <Table className="summary-table">
                        <thead className="summary-header">
                            <td> {" "}
                                <b>Property</b>
                            </td>
                            <td> {" "}
                                <i class="fa fa-pencil-square" aria-hidden="true">
                                    {" "}
                                    <a href="#" className="update-button">
                                        Update
                                    </a>
                                </i>
                            </td>
                        </thead>
                        <tr>
                            <td className="left-cell">Type</td>
                            <td>{type}</td>
                        </tr>

                        <tr>
                            <td className="left-cell">Property Name</td>
                            <td>{name}</td>
                        </tr>

                        <tr>
                            <td className="left-cell">Address</td>
                            <td>{address}</td>
                        </tr>

                        <tr>
                            <td className="left-cell">Market value</td>
                            <td>{marketValue}</td>
                        </tr>
                        <tr>
                            <td className="left-cell">Purchase price</td>
                            <td>{purchasePrice}</td>
                        </tr>
                    </Table>
                </div>

                <div className="summary-container">
                    <Table className="summary-table">
                        <thead className="summary-header">
                            <td> {" "}
                                <b>Loan Application</b>
                            </td>
                            <td> {" "}
                                <i class="fa fa-pencil-square" aria-hidden="true">
                                    {" "}
                                    <a href="#" className="update-button">
                                        Update
                                    </a>
                                </i>
                            </td>
                        </thead>
                        <tr className="left-cell">Loan Information</tr>

                        <tr>
                            <td className="left-cell">
                                Loan Amount (SGD):
                            </td>
                            <td>SGD {amount}</td>
                        </tr>

                        <tr>
                            <td className="left-cell">
                                Outstanding Balance
                            </td>
                            <td>{outstandingBalance}</td>
                        </tr>

                        <tr>
                            <td className="left-cell">
                                Repayments
                            </td>
                            <td>{repayments}</td>
                        </tr>

                        <tr>
                            <td className="left-cell">
                                Purchase Price
                            </td>
                            <td>{purchasePrice}</td>
                        </tr>

                        <tr>
                            <td className="left-cell">
                                Down Payment
                            </td>
                            <td>{downPayment}</td>
                        </tr>


                    </Table>
                </div>


                <div className="form-footer clearfix">
                    <Button onClick={
                            () => navigate("/borrower")
                        }
                        className='button-back'
                        variant="link">
                        Back
                    </Button>
                    <Button onClick={() => {
                        navigate("/borrower");
                     //   setStep(2);
                      }
                    }
                        className='button-submit'
                        variant="warning"
                        type="submit">
                        Submit
                    </Button>
                </div>


            </div>
        </div>
    );
};

export default TempSummaryForms;
