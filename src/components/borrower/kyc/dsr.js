import {Button} from "bootstrap";
import React from "react";
import {Col} from "react-bootstrap";
import SemiCircleProgressBar from "react-progressbar-semicircle";
import Table from 'react-bootstrap/Table';
import {useEffect, useState} from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { calculateDsr } from "./calculateDsr";

const DSR = () => {
    const [name, setName] = useState('');
    const [nric, setNric] = useState(0);
    const [dob, setDob] = useState("2000-01-01");
    const [gender, setGender] = useState('M');
    const [mobilenumber, setMobilenumber] = useState();
    const [monthlyNetIncome, setMonthlyNetIncome] = useState(0);
    const [variableIncome, setVariableIncome] = useState(0);
    const [investmentIncome, setInvestmentIncome] = useState(0);
    const [monthlyFinancialCommitment, setMonthlyFinancialCommitment] = useState(0);
    const [estimatedPrice, setEstimatedPrice] = useState(0);
    const [downPayment, setDownPayment] = useState(0);
    const [id, setId] = useState(1);

    useEffect(() => {
        fetch('http://localhost:5002/kyc/getid').then((response) => response.json()).then((data) => {
            setId(data[0].id);
        }).catch((err) => {
            console.log(err.message);
        });
    }, []);


    useEffect(() => {
        fetch('http://localhost:5002/kyc/getkyc/' + id).then((response) => response.json()).then((data) => {
            setName(data[0].name);
            setGender(data[0].gender == 'M' || data[0].gender == 'm' ? 'Male' : 'Female');
            setNric(data[0].nric);

            setDob((data[0].dob).slice(0, 10));

            setMobilenumber(data[0].mobileNumber);
            setMonthlyNetIncome(data[0].monthlyNetIncome);
            setVariableIncome(data[0].variableIncome);
            setInvestmentIncome(data[0].investmentIncome);
            setMonthlyFinancialCommitment(data[0].monthlyFinancialCommitment);
            setEstimatedPrice(data[0].estimatedPrice);
            setDownPayment(data[0].downPayment);
        }).catch((err) => {
            console.log(err.message);
        });
    }, [id]);

   
    
    
    return (
<div>
    
            <Navbar/>
            <Sidebar/>
            <div className="main">
    
                <div className="DSR-header">
                    <h3>Your DSR Report</h3>
                </div>
    
                <div className="container-body">
                    <div className="DSR">
    
                        <Table size="sm">
                            <thead>
                                <h5 className="title">
                                    User-details</h5>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Salutaion</td>
                                    <td>MR</td>
                                </tr>
    
                                <tr>
                                    <td>Full Name (according to NRIC)</td>
                                    <td>{name}</td>
                                </tr>
    
                                <tr>
                                    <td>NRIC number</td>
                                    <td>{nric}</td>
                                </tr>
    
                                <tr>
                                    <td>Date of birth</td>
                                    <td>{dob}</td>
                                </tr>
    
                                <tr>
                                    <td>Gender</td>
                                    <td>{gender}</td>
                                </tr>
                                <tr>
                                    <td>Mobile Phone</td>
                                    <td>{mobilenumber}</td>
                                </tr>
    
                                <tr>
                                    <td>Monthly Net income</td>
                                    <td>SGD {monthlyNetIncome}</td>
                                </tr>
    
                                <tr>
                                    <td>Variable Income</td>
                                    <td>SGD {variableIncome}</td>
                                </tr>
    
                                <tr>
                                    <td>Investment Income</td>
                                    <td>SGD {investmentIncome}</td>
                                </tr>
    
                                <tr>
                                    <td>Monthly Financial Commitment</td>
                                    <td>SGD {monthlyFinancialCommitment}</td>
                                </tr>
    
    
                            </tbody>
                        </Table>
                    </div>
    
                    {/* <div className="progessbar-container">
      
    <div role="progressbar" aria-valuenow="33"
     aria-valuemin={0} aria-valuemax={100} ></div>
    
     </div> */}
                    <div className="progessbar">
                        <SemiCircleProgressBar percentage={
                                calculateDsr(estimatedPrice, downPayment, monthlyFinancialCommitment, monthlyNetIncome + variableIncome + investmentIncome)
                            }
                            showPercentValue/>
                         <div className="dsr-legend">
                             <div>Good</div>
                             
                        </div>
                        <div className="dsr-legend-1">
                        <div >Bad</div>
                        </div>
                    </div>
    
                </div>
                <div className="what-is-DSR">
                    <h5 className="what-is-dsr-title">What is DSR?</h5>
                    <p>DSR, also know as the debt-to-service ratio, is to calculate how much of a person's
                                income is used to service the debt installment, and represented as percentage (%) of income.</p>
                    <p>It is also derived from 2 main components: DSR = commitment/income. Your DSR is calculated based
                            on HOmeCrowd's algorithm. However, between different financial institutions, there can be differences
                            in the loan eligibility amount that is calculated, despite it being based on the same information that you provide.
                    </p>
                    <p>Want to improve your DSR? visit our blog
                        <a>here</a>to get more tips!
                    </p>
                </div>
    
                <div className="print">
                    <button className="print-btn">Print</button>
                </div>
    
            </div>
    
</div>

    );
}

export  default DSR;
