import React from "react";
import {useEffect, useState} from "react";
import "./style.css";
import "../../../App.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import user from '../../images/user-profile.png';
import sideBarPic from '../../images/business-3d-325.png';
import logo from '../../images/newnewlogo.png';
import info from '../../images/identification.svg';
import commitment from '../../images/commitment.svg';
import docs from '../../images/documents.svg';
import {ContactPageOutlined} from "@mui/icons-material";
import {useNavigate} from 'react-router-dom';
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import useAuth from "../../../hooks/useAuth";
const Form3 = () => {

    const { auth} = useAuth();
    let navigate = useNavigate();

    const [monthlyNetIncome, setMonthlyNetIncome] = useState(0);
    const [variableIncome, setVariableIncome] = useState(0);
    const [investmentIncome, setInvestmentIncome] = useState(0);
    const [monthlyFinancialCommitment, setMonthlyFinancialCommitment] = useState(0);
    const [id, setId] = useState(1);
    
   
    useEffect(() => {
        fetch('http://localhost:5002/kyc/getid').then((response) => response.json()).then((data) => {
            setId(data[0].id);
        }).catch((err) => {
            console.log(err.message);
        });
    }, []);

    const updatekyc = async () => {
        await fetch('http://localhost:5002/kyc/form3/' + auth?.decodedToken?.userId, {
            method: 'PUT',
            body: JSON.stringify(
                {
                    "monthly_net_income": monthlyNetIncome,
                    "variable_income": variableIncome,
                    "investment_income": investmentIncome,
                    "monthly_financial_income": monthlyFinancialCommitment
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
        updatekyc();
        navigate('/kyc_form4');
    };
 
    return (
       
         <div>
                   <Navbar/>
            <Sidebar/>
               <div className="main">
                   <Form className="form3"
                       onSubmit={handleSubmit}>
            
            
                       <div className="form-container">
                           <b>Applicant 1</b>
                           <br></br>
                           <small>Complete youe Mortgage pre-approval details below</small>
                       </div>
                       <div className="container">
                           <img src={docs}
                               className="docs"></img>
                           <img src={info}
                               className="info"></img>
                           <img src={commitment}
                               className="commitment"></img>
                       </div>
                       <Form.Group>
            
                           <Form.Label>Monthly Net Income
                           </Form.Label>
                           <InputGroup>
                               <InputGroup.Text>SGD</InputGroup.Text>
                               <Form.Control className="input" type="number" name="netIncome"
                                onChange={(e) => setMonthlyNetIncome(e.target.value)}
                                   aria-label="Amount (to the nearest dollar)"/>
                           </InputGroup>
                           <small className="description">Your income after Tax/EPF/SOSCO</small>
                       </Form.Group>
            
                       <Form.Group>
                           <Form.Label className="label">Variable Income
                           </Form.Label>
                           <InputGroup>
                               <InputGroup.Text>SGD</InputGroup.Text>
                               <Form.Control className="input" type="number" name="varIncome"
                                    onChange={(e) => setVariableIncome(e.target.value)}
                                   aria-label="Amount (to the nearest dollar)"/>
                           </InputGroup>
                           <small>
                               Variable income is income that isn't consistent,(i.e part time jobs,
                                                 commision, estimated for last 6 months)
                           </small>
                       </Form.Group>
            
                       <Form.Label className="label">Investment Income</Form.Label>
                       <InputGroup>
                           <InputGroup.Text>SGD</InputGroup.Text>
                           <Form.Control className="input" type="number" name="invIncome"
                                onChange={(e) => setInvestmentIncome(e.target.value)}
                               aria-label="Amount (to the nearest dollar)"/>
                       </InputGroup>
                       <small>
                           Incomes source that are derived from investment: (i.e fixed
                                             deposit/stock/cryptocurrency/other liquid assets)
                       </small>
                       <br></br>
            
                       <Form.Label className="label">Monthly Financial Commitment
                       </Form.Label>
                       <InputGroup>
                           <InputGroup.Text>SGD</InputGroup.Text>
                           <Form.Control className="input" type="number" name="commitment"
                               onChange={(e) => setMonthlyFinancialCommitment(e.target.value)}
                               aria-label="Amount (to the nearest dollar)"/>
                       </InputGroup>
                       <small>Payments for loan, credit card & etc</small>
                       <br></br>
                       <div className="button">
            
                           <Button  variant="warning" type="submit">Submit</Button>
                       </div>
                   </Form>
               </div>
         </div>
     
    );
}

export default Form3;
