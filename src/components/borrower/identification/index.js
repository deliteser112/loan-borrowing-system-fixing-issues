import React from "react";
import './style.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ident   from '../../images/identification.svg'
import Income           from '../../images/income.svg'
import Commitment       from '../../images/commitment.svg'
import Mortgage         from '../../images/mortgage.svg'
import Documents        from '../../images/documents.svg'
import { useNavigate } from "react-router-dom";
import Navbar from "../kyc/navbar";
import Sidebar from "../kyc/sidebar";

const Identification = () => {
let navigate = useNavigate();



    return ( 


   <div>
         <Navbar/>
         <Sidebar/>
         <div className="main">
                 <div className="image-container-header">
                 <b>Identification</b>
                 <p>Loan Application Status incomplete</p>
                 </div>
             <div className="images-container">
                 <img src={Ident} className="Identification" ></img>
                 <img src={Income} className=" Income"></img>
                 <img src={Commitment} className="Commitment" ></img>
                 <img src={Mortgage} className="Mortgage" ></img>
                 <img src={Documents} className="Documents" ></img>
             </div>
             <Form className="borrower-form">    
                 <div className="form-container-child">
                     <div className="side-box">
                         <h6>Your Information</h6>
                     </div>
                     <div className="form-input">
                         <Form.Group className="mb-3">
                             <Form.Label className='label-required'> Address line 1</Form.Label>
                             <Form.Control type="text" placeholder="" />
                         </Form.Group>
                     
                         <Form.Group className="mb-3">
                             <Form.Label> Address line 2</Form.Label>
                             <Form.Control type="text" placeholder="" />
                         </Form.Group>
                     
                         <Row className="mb-3">
                             <Form.Group as={Col}>
                                 <Form.Label className='label-required'> City</Form.Label>
                                 <Form.Control placeholder="" />
                             </Form.Group>   
    
                             <Form.Group as={Col}>
                                 <Form.Label className='label-required'>State</Form.Label>
                                 <Form.Control type="text" placeholder="" />
                             </Form.Group>
    
                             <Form.Group as={Col}>
                                 <Form.Label className='label-required'> Postcode</Form.Label>
                                 <Form.Control type="number" placeholder="" />
                             </Form.Group>
                         </Row>
                         <Form.Group className="mb-3">
                             <Form.Label>Facebook or LinkedIn link</Form.Label>
                             <Form.Control type="text" placeholder="" />
                         </Form.Group>
                     </div>   
                 </div>
                 <div className="form-footer clearfix">
                     <Button  onClick={()=>navigate("/borrower")} className='button-back' variant="link">
                         Back
                     </Button>
                     <Button onClick={()=>navigate("/borrower")} className='button-submit' variant="warning" type="submit">
                         Submit
                     </Button>
                 </div>       
             </Form>  
         
         </div>
   </div>
     );
}
 
export default Identification;