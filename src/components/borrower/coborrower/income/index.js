import * as React from "react";
import '../style.css';

import {Form, Button, Row, Col, Image} from 'react-bootstrap';

import Progress from '../progress';

import Salary from "../../../images/salary.svg";
import PartTime from "../../../images/part-time.svg";
import SelfEmployed from "../../../images/self-employed.svg";
import Investment from "../../../images/investment.svg";
import ActiveSalary from "../../../images/salary-white.svg";
import ActivePartTime from "../../../images/part-time-white.svg";
import ActiveSelfEmployed from "../../../images/self-employed-white.svg";
import ActiveInvestment from "../../../images/investment-white.svg";
import { useNavigate } from 'react-router-dom';
import Navbar from '../../kyc/navbar';
import Sidebar from '../../kyc/sidebar';


const Income = () => {
    let navigate = useNavigate();
    const [role, setRole] = React.useState(null);
    const [salaryActive, setSalaryActive] = React.useState(false);
    const [partTimeActive, setPartTimeActive] = React.useState(false);
    const [selfEmployedActive, setSelfEmployedActive] = React.useState(false);
    const [investmentActive, setInvestmentActive] = React.useState(false);

    const handleChange = (e) => {
        e.persist();
        console.log(e.target.value);
    
        setRole(e.target.value);
    };

    // code to change button states and show their section divs respectively. could probably be better
    const changeState = (e) => {
        if (e.target.id == "salary-button"){
            setSalaryActive(!salaryActive);
        }
        else if (e.target.id == "parttime-button"){
            setPartTimeActive(!partTimeActive);
        }
        else if (e.target.id == "selfemployed-button"){
            setSelfEmployedActive(!selfEmployedActive);
        }
        else if (e.target.id == "investment-button"){
            setInvestmentActive(!investmentActive);
        }
    }

    return (

       <div>
         <Navbar/>
         <Sidebar/>
         <div className="main">
             <Progress/>
             <Form className="coborrower-form">
                 <Row className="m-3">
                     <Form.Group as={Col} className="mb-3">
                         <button 
                             id="salary-button" 
                             type="button"
                             className={salaryActive ? "income-button-active":"income-button"}
                             onClick={changeState}>
                             <Image src={salaryActive ? ActiveSalary : Salary}/>
                             <h6>Salary</h6>
                         </button>                        
                     </Form.Group>
                     <Form.Group as={Col} className="mb-3">
                         <button 
                             id="parttime-button" 
                             type="button"
                             className={partTimeActive ? "income-button-active":"income-button"}
                             onClick={changeState}>
                             <Image src={partTimeActive ? ActivePartTime : PartTime}/>
                             <h6>Part Time</h6>
                         </button>                        
                     </Form.Group>
                     <Form.Group as={Col} className="mb-3">
                         <button 
                             id="selfemployed-button" 
                             type="button"
                             className={selfEmployedActive ? "income-button-active":"income-button"}
                             onClick={changeState}>
                             <Image src={selfEmployedActive ? ActiveSelfEmployed : SelfEmployed}/>
                             <h6>Self Employment</h6>
                         </button>                        
                     </Form.Group>
                     <Form.Group as={Col} className="mb-3">
                         <button 
                             id="investment-button" 
                             type="button"
                             className={investmentActive ? "income-button-active":"income-button"}
                             onClick={changeState}>
                             <Image src={investmentActive ? ActiveInvestment : Investment}/>
                             <h6>Investment</h6>
                         </button>                        
                     </Form.Group>
                 </Row>
                 {/* salary */}  
                 {salaryActive ? 
                 <div className="form-container-child" >
                     <div className="side-box">
                         <h6>Your Co-Applicant Income</h6>
                         <Form.Text className="text-muted">
                             Fixed income is salaried income. Income that is consistent throughout the year
                         </Form.Text>                        
                     </div>  
        
                     <div className="form-input">        
                         <Form.Group className="mb-3">
                             <Form.Label>Company Name</Form.Label>
                             <Form.Control type="text" placeholder="" />
                         </Form.Group>
                         <Form.Group className="mb-3">
                             <Form.Label>Length of Employment (Years)</Form.Label>
                             <Form.Control type="number" placeholder="" />
                         </Form.Group>
                         <Form.Group className="mb-3">
                             <Form.Label>Monthly Gross Salary (RM)</Form.Label>
                             <Form.Control type="number" placeholder="" />
                         </Form.Group>
                         <Form.Group className="mb-3">
                             <Form.Label>Allowance/Bonus (RM)</Form.Label>
                             <Form.Control type="number" placeholder="" />
                         </Form.Group>
                     </div>
                 </div> : <></>}
        
                 {/* part time */}
                 {partTimeActive ? 
                 <div className="form-container-child" >                
                     <div className="side-box">
                         <h6>Gig/Variable income</h6>
                         <Form.Text className="text-muted">
                         Variable income is the income that isn't consistent (i.e part time
                         jobs, commission, estimated for the last 6 months)
                         </Form.Text>
                         <Button variant="warning" size="sm" className="mt-3">Add more variable income</Button>
                     </div>                
                     <div className="form-input">                        
                         <Row>
                             <Form.Group as={Col} className="mb-3">
                                 <Form.Label>Role</Form.Label>
                                 <Form.Control type="text" placeholder="" />
                             </Form.Group>
                             <Form.Group as={Col}>
                                 <Form.Label>
                                     Estimated earning for the last 6 months (RM)
                                 </Form.Label>
                                 <Form.Control type="number" placeholder="" />
                             </Form.Group>
                         </Row>
                     </div>
                 </div> : <></>}
        
                 {/* self employed */}
                 {selfEmployedActive ? 
                 <div className="form-container-child" >
                     <div className="side-box">
                         <h6>Business Income</h6>
                         <Form.Text className="text-muted">Type of Business (Self-Employed)</Form.Text>
                         <Button variant="warning" size="sm" className="mt-3">Add more variable income</Button>
                     </div>
                 
                     <div className="form-input">
                         <Form.Group controlId="role" className="mb-3">
                             <Form.Check
                                 type="radio"
                                 value="Sole Proprietor"
                                 label="Sole Proprietor"
                                 aria-label="radio 1"
                                 onChange={handleChange}
                                 checked={role === "Sole Proprietor"}>
                             </Form.Check>
                             <Form.Check
                                 type="radio"
                                 value="Contractor / Partner"
                                 label="Contractor / Partner"
                                 aria-label="radio 2"
                                 onChange={handleChange}
                                 checked={role === "Contractor / Partner"}>
                             </Form.Check>
                             <Form.Check
                                 type="radio"
                                 value="Company Director"
                                 label="Company Director"
                                 aria-label="radio 3"
                                 onChange={handleChange}
                                 checked={role === "Company Director"}>
                             </Form.Check>
                             <Form.Check
                                 type="radio"
                                 value="Other"
                                 label="Other"
                                 aria-label="radio 4"
                                 onChange={handleChange}
                                 checked={role === "Other"}>
                             </Form.Check>
                         </Form.Group>
        
                         {role === "Other" ? <Form.Control type="text" placeholder="" /> : <></>}
                 
                         <Form.Group className="mb-3">
                             <Form.Label>Date Commenced Trading</Form.Label>
                             <Form.Control type="date" placeholder="" />
                         </Form.Group>
                 
                         <Form.Group className="mb-3">
                             <Form.Label>No. of Employees</Form.Label>
                             <Form.Control type="number" placeholder="" />
                         </Form.Group>
                 
                         <Form.Group className="mb-3">
                             <Form.Label>Business Registration Number</Form.Label>
                             <Form.Control type="number" placeholder="" />
                         </Form.Group>
                 
                         <Form.Group className="mb-3">
                             <Form.Label>Office Phone Number</Form.Label>
                             <Form.Control type="tel" placeholder="" />
                         </Form.Group>
                 
                         <Form.Group className="mb-3">
                             <Form.Label>Share of Business (%)</Form.Label>
                             <Form.Control type="number" placeholder="" />
                         </Form.Group>
                 
                         <Form.Group className="mb-3">
                             <Form.Label>Last 2 Years Net Profit (RM)</Form.Label>
                             <Form.Control type="number" placeholder="" />
                         </Form.Group>                    
                     </div>
                 </div> : <></> }
        
                 {/* investment */}
                 {investmentActive ?
                 <div className="form-container-child">            
                     <div className="side-box">
                         <h6>Investment Income</h6>
                         <Form.Text className="text-muted">
                         incomes sources that are derived from investment (i.e fixed
                         deposit / stock / cryptocurrency / other liquid assets)
                         </Form.Text>
                         <Button variant="warning" size="sm" className="mt-3">Add more variable income</Button>
                     </div>            
                     <div className="form-input">
                         <Row>
                             <Form.Group as={Col} className="mb-3">
                                 <Form.Label>Source</Form.Label>
                                 <Form.Select>
                                     <option disabled selected>--Select Source--</option>
                                     <option>Interest from FD</option>
                                     <option>Stock Dividend</option>
                                     <option>Rental</option>
                                     <option>Trading from Stock</option>
                                     <option>Trading from Cryptocurrency</option>
                                     <option>Others</option>
                                 </Form.Select>
                             </Form.Group>
                             <Form.Group as={Col} className="mb-3">
                                 <Form.Label>Monthly Estimated Earning (RM)</Form.Label>
                                 <Form.Control type="number" placeholder="" />
                             </Form.Group>
                         </Row>                
                     </div>
                 </div> : <></> }
        
                 <div className="form-footer clearfix">
                     <Button onClick={()=>navigate("/co-identification")} className='button-back' variant="link">
                         Back
                     </Button>
                     <Button  onClick={()=>navigate("/co-commitment")} className='button-submit' variant="warning" type="submit">
                         Submit
                     </Button>
                 </div>
             </Form>
         </div>
       </div>
    )
}

export default Income;