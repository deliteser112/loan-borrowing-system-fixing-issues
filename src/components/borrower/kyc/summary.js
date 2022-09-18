import "./style.css";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import React from "react";
import {Col} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { FiEdit3 } from "react-icons/fi";

import { calculateDsr } from "./calculateDsr";
import useAuth from "../../../hooks/useAuth";



const Summary = () => {

    
    const { auth } = useAuth();
    let navigate = useNavigate();
    var showdate = new Date();
    var displaytodaydate = showdate.getDate() + '/' + showdate.getMonth() + '/' + showdate.getFullYear();

    const [name, setName] = useState('');
    const [nric, setNric] = useState(0);
    const [dob, setDob] = useState("2000-01-01");
    const [gender, setGender] = useState('M');
    const [doe, setDoe] = useState("2000-01-01")
    const [mobilenumber, setMobilenumber] = useState();
    const [houseNumber, setHouseNumber] = useState();
    const [maritalStatus, setMaritalStatus] = useState("Single");
    const [city, setCity] = useState("")
    const [state, setState] = useState("Kuala Lumpur")
    const [postcode, setPostcode] = useState("")
    const [numOfDependants, setNumOfDependants] = useState(0);
    const [race, setRace] = useState("Single");
    const [lvlOfEdu, setLvlOfEdu] = useState("Diploma");
    const [professional, setProfessional] = useState("No");
    const [monthlyNetIncome, setMonthlyNetIncome] = useState(0);
    const [variableIncome, setVariableIncome] = useState(0);
    const [investmentIncome, setInvestmentIncome] = useState(0);
    const [monthlyFinancialCommitment, setMonthlyFinancialCommitment] = useState(0);
    const [estimatedPrice, setEstimatedPrice] = useState(0);
    const [downPayment, setDownPayment] = useState(0);


    // useEffect(() => {
    //     fetch('http://localhost:5002/kyc/getid').then((response) => response.json()).then((data) => {
    //         setId(data[0].id);
    //     }).catch((err) => {
    //         console.log(err.message);
    //     });
    // }, []);

    useEffect(() => {
        fetch('http://localhost:5002/kyc/' + auth?.decodedToken?.userId).then((response) => response.json()).then((data) => {
            setName(data[0].full_name);
            setGender(data[0].gender == 'M' || data[0].gender == 'm' ? 'Male' : 'Female');
            setNric(data[0].nric);
            setDob((data[0].dob).slice(0, 10));
            setDoe(data[0].doe.slice(0, 10));
            setMobilenumber(data[0].mobile_number);
            setHouseNumber(data[0].house_number);
            setMaritalStatus(data[0].marital_status);
            setCity(data[0].address.split('-')[0]);
            setState(data[0].address.split('-')[1]);
            setPostcode(data[0].address.split('-')[2]);
            setNumOfDependants(data[0].num_of_dependents);
            setRace(data[0].race);
            setLvlOfEdu(data[0].lvl_of_edu);
            setProfessional(data[0].pro_line);
            setMonthlyNetIncome(data[0].monthly_net_income);
            setVariableIncome(data[0].variable_income);
            setInvestmentIncome(data[0].investment_income);
            setMonthlyFinancialCommitment(data[0].monthly_financial_commitment);
            setEstimatedPrice(data[0].estimated_price);
            setDownPayment(data[0].down_payment);
        }).catch((err) => {
            console.log(err.message);
        });
    }, []);

    return (


        <div>
            <Navbar/>
            <Sidebar/>
            <div className="main">
                <div className="summary-container">
                    <Table className="summary-table">
                        <thead className="summary-header">
                            <td> {" "}
                                <b>KYC - Step 1: Profile
                                </b>
                            </td>
                            <td> {" "}
                            <Link to="/kyc_form1" className="update-button">
              <FiEdit3 />
                    Update
                  </Link>
                            </td>
                        </thead>

                        <tr>
                            <td className="left-cell">salutation</td>
                            <td>{
                                gender == 'Male' ? 'Mr' : 'Ms'
                            }</td>
                        </tr>

                        <tr>
                            <td className="left-cell">Full Name (According to NRIC)</td>
                            <td>{name}</td>
                        </tr>

                        <tr>
                            <td className="left-cell">NRIC number</td>
                            <td>{nric}</td>
                        </tr>

                        <tr>
                            <td className="left-cell">Date Of Birth</td>
                            <td>{dob}</td>
                        </tr>

                        <tr>
                            <td className="left-cell">Gender</td>
                            <td>{gender}</td>
                        </tr>

                        <tr>
                            <td className="left-cell">Consent Of Experian</td>
                            <td>{doe}</td>
                        </tr>

                        <tr>
                            <td className="left-cell">NRIC Front</td>
                            <td>fileA.jpg</td>
                        </tr>
                        <tr>
                            <td className="left-cell">NRIC Back</td>
                            <td>fileB.jpg</td>
                        </tr>
                    </Table>
                </div>

                <div className="summary-container">
                    <Table className="summary-table">
                        <thead className="summary-header">
                            <td> {" "}
                                <b>KYC - Step 2: Identification</b>
                            </td>
                            <td> {" "}
                            <Link to="/kyc_form2" className="update-button">
              <FiEdit3 />
                    Update
                  </Link>
                            </td>
                        </thead>

                        <tr>
                            <td className="left-cell">Mobile Phone</td>
                            <td>{mobilenumber}</td>
                        </tr>

                        <tr>
                            <td className="left-cell">House Phone</td>
                            <td>{houseNumber}</td>
                        </tr>

                        <tr>
                            <td className="left-cell">City</td>
                            <td>{city}</td>
                        </tr>

                        <tr>
                            <td className="left-cell">State</td>
                            <td>{state}</td>
                        </tr>

                        <tr>
                            <td className="left-cell">
                                Postcode</td>
                            <td>{postcode}</td>
                        </tr>

                        <tr>
                            <td className="left-cell">Marital Status</td>
                            <td>{maritalStatus}</td>
                        </tr>

                        <tr>
                            <td className="left-cell">Number Of Dependents</td>
                            <td>{numOfDependants}</td>
                        </tr>

                        <tr>
                            <td className="left-cell">Race</td>
                            <td>{race}</td>
                        </tr>

                        <tr>
                            <td className="left-cell">Highest Level Of Education</td>
                            <td>{lvlOfEdu}</td>
                        </tr>

                        <tr>
                            <td className="left-cell">
                                ** Are you working in a professional line **
                            </td>
                            <td>{professional}</td>
                        </tr>

                        <tr>
                            <td className="left-cell">**Your current job title**</td>
                            <td>Doctor</td>
                        </tr>
                    </Table>
                </div>

                <div className="summary-container">
                    <Table className="summary-table">
                        <thead className="summary-header">
                            <td> {" "}
                                <b>KYC - Step 3: Commitment</b>
                            </td>
                            <td> {" "}
                            <Link to="/kyc_form3" className="update-button">
              <FiEdit3 />
                    Update
                  </Link>
                            </td>
                        </thead>

                        <tr>
                            <td className="left-cell">Monthly Net Income</td>
                            <td>{monthlyNetIncome}</td>
                        </tr>

                        <tr>
                            <td className="left-cell">Variable Income</td>
                            <td>{variableIncome}</td>
                        </tr>

                        <tr>
                            <td className="left-cell">Investment Income</td>
                            <td>{investmentIncome}</td>
                        </tr>

                        <tr>
                            <td className="left-cell">Monthly Financial Commitment</td>
                            <td>{monthlyFinancialCommitment}</td>
                        </tr>
                    </Table>
                </div>

                <div className="summary-container">
                    <Table className="summary-table">
                        <thead className="summary-header">
                            <td> {" "}
                                <b>KYC - Step 4: Your Mortgage Eligibility
                                </b>
                            </td>
                            <td> {" "}
                            <Link to="/kyc_form4" className="update-button">
              <FiEdit3 />
                    Update
                  </Link>
                            </td>
                        </thead>

                        <tr>
                            <td className="left-cell">
                                What is the value of the property you are thinking of buying
                            </td>
                            <td>{estimatedPrice}</td>
                        </tr>

                        <tr>
                            <td className="left-cell">What is you combined monthly income</td>
                            <td>{
                                monthlyNetIncome + investmentIncome + variableIncome
                            }</td>
                        </tr>

                        <tr>
                            <td className="left-cell">What is you estimated down payment</td>
                            <td>{downPayment}</td>
                        </tr>

                        <tr>
                            <td className="left-cell">Debt Service Ratio</td>
                            <td>{
                                calculateDsr(estimatedPrice, downPayment, monthlyFinancialCommitment, monthlyNetIncome + variableIncome + investmentIncome)
                            }</td>
                        </tr>

                        <tr>
                            <td className="left-cell">will you have a joint applicant
                            </td>
                            <td>Yes</td>
                        </tr>
                    </Table>
                </div>

                <div className="button">
                <Button onClick={() => {
                        navigate('/borrower');
                      //  setStep(1);
                        
                       
                    }}
                        variant="warning"
                        type="submit">
                        Submit KYC
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Summary;
