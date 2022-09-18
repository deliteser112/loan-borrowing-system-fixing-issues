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
import Navbar from "../kyc/navbar";
import Sidebar from "../kyc/sidebar";

const Docs = () => {

let navigate = useNavigate();



    return ( 
  <div>
           <Navbar/>
            <Sidebar/>
          <div className= "main">
    
    <div className="image-container-header">
          <b>Mortgage</b>
          <p>Loan Application Status incomplete</p>
          <hr></hr>
          <div className="images-container">
            <img src={Ident} className="Identification" alt=""></img>
            <img src={Income} className=" Income" alt=""></img>
            <img src={Commitment} className="Commitment" alt=""></img>
            <img src={Mortgage} className="Mortgage" alt=""></img>
            <img src={Documents} className="Documents" alt=""></img>
          </div>
        </div>
    
        <Form className="borrower-form">  
                  {/* only shows if salary was chosen in income */}
                  <div className="form-container-child">
                      <div className="side-box">    
                          <h6>Salary Income Documents</h6>
                      </div>
                      <div className="form-input">             
                          <Form.Group controlId="formFile" className="mb-3">
                              <Form.Label className='label-required'>Last 3 months salary slip</Form.Label>
                              <Form.Control type="file" />
                          </Form.Group>
    
                          <Form.Group controlId="formFile" className="mb-3">
                              <Form.Label className='label-required'>EA Form (Tax for salary earner)</Form.Label>
                              <Form.Control type="file" />
                          </Form.Group>
    
                          <Form.Group controlId="formFile" className="mb-3">
                              <Form.Label className='label-required'>KWSP Statement</Form.Label>
                              <Form.Control type="file" />
                              <Form.Text className="text-muted">Current yearly balance of EPF</Form.Text>
                          </Form.Group>
                      </div>
                  </div>
    
                  {/* only shows if part-time was chosen in income */}
                  <div className="form-container-child">
                      <div className="side-box">    
                          <h6>Part Time Documents</h6>
                      </div>
                      <div className="form-input">             
                          <Form.Group controlId="formFile" className="mb-3">
                              <Form.Label className='label-required'>Personal Bank Statements</Form.Label>
                              <Form.Control type="file" />
                              <Form.Text className="text-muted">Last 6 months for all banks receiving income from gig roles</Form.Text>
                          </Form.Group>
    
                          <Form.Group controlId="formFile" className="mb-3">
                              <Form.Label>Other Income Proof</Form.Label>
                              <Form.Control type="file" />
                              <Form.Text className="text-muted">Note: this will be for each "gig" income, proof of registration with the company they are working for</Form.Text>
                          </Form.Group>
                      </div>
                  </div>
    
                  {/* only shows if self-employment was chosen in income */}
                  <div className="form-container-child">
                      <div className="side-box">    
                          <h6>Company Income Documents</h6>
                      </div>
                      <div className="form-input">             
                          <Form.Group controlId="formFile" className="mb-3">
                              <Form.Label className='label-required'>B/BE Form Payment Receipt</Form.Label>
                              <Form.Control type="file" />
                              <Form.Text className="text-muted">Proof of Payment For BE tax, send yearly</Form.Text>
                          </Form.Group>
    
                          <Form.Group controlId="formFile" className="mb-3">
                              <Form.Label className='label-required'>Company Bank Statement</Form.Label>
                              <Form.Control type="file" />
                              <Form.Text className="text-muted">Last 6 months, if self-employed</Form.Text>
                          </Form.Group>
                      </div>
                  </div>
    
                  {/* only shows if self-employment was chosen in income */}
                  <div className="form-container-child">
                      <div className="side-box">    
                          <h6>Investment Documents</h6>
                      </div>
                      <div className="form-input">             
                          <Form.Group controlId="formFile" className="mb-3">
                              <Form.Label className='label-required'>Investment Income Statements</Form.Label>
                              <Form.Control type="file" />
                              <Form.Text className="text-muted">(yearly, for all their investment incomes)</Form.Text>
                          </Form.Group>
                      </div>
                  </div>
    
                  {/* bills */}
                  <div className="form-container-child">
                      <div className="side-box">
                          <h6>Monthly Bills</h6>
                      </div>
                      <div className="form-input">                
                          <Form.Group controlId="formFile" className="mb-3">
                              <Form.Label className='label-required'>Last 3 months utility bill for any of the following (Electricity, Water, Telco, )</Form.Label>
                              <Form.Control type="file" />
                          </Form.Group>
                          <Form.Group controlId="formFile" className="mb-3">
                              <Form.Label>Credit card statement for the last 3 months</Form.Label>
                              <Form.Control type="file" />
                          </Form.Group>
                          <Form.Group controlId="formFile" className="mb-3">
                              <Form.Label className='label-required'>Proof of rental payment for the last 3 months</Form.Label>
                              <Form.Control type="file" />
                          </Form.Group>
                          <Form.Group controlId="formFile" className="mb-3">
                              <Form.Label>Other loan proofs</Form.Label>
                              <Form.Control type="file" />
                              <Form.Text className="text-muted">Whatever you can provide to help validate your loan</Form.Text>
                          </Form.Group>
                      </div>
                  </div>
    
                  {/* mortgage docs */}
                  <div className="form-container-child">
                      <div className="side-box">
                          <h6>Mortgage Documents</h6>
                      </div>
                      <div className="form-input">             
                          <Form.Group controlId="formFile" className="mb-3">
                              <Form.Label className='label-required'>Property Booking Receipt</Form.Label>
                              <Form.Control type="file" />
                          </Form.Group>
                          <Form.Group controlId="formFile" className="mb-3">
                              <Form.Label className='label-required'>Sales and Purchase Agreement</Form.Label>
                              <Form.Control type="file" />
                          </Form.Group>
                      </div>
                  </div>
    
                  {/* additional */}
                  <div className="form-container-child">
                      <div className="side-box">
                          <h6>Additional Documents</h6>
                      </div>
                      <div className="form-input">
                          <Form.Group controlId="formFile" className="mb-3">
                              <Form.Label>Highest Education Certificate</Form.Label>
                              <Form.Control type="file" />
                          </Form.Group>
                          <Form.Group controlId="formFile" className="mb-3">
                              <Form.Label>Professional Certificate</Form.Label>
                              <Form.Control type="file" />
                          </Form.Group>
                          <Form.Group controlId="formFile" className="mb-3">
                              <Form.Label>Wedding Certificate</Form.Label>
                              <Form.Control type="file" />
                          </Form.Group>
                          <Form.Group controlId="formFile" className="mb-3">
                              <Form.Label>Other Relevant Documents (if any)</Form.Label>
                              <Form.Control type="file" />
                          </Form.Group>
                      </div>
                  </div>
                  <div className="form-footer clearfix">
                      <Button onClick={()=>navigate("/borrower")} className='button-back' variant="link">
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
 
export default Docs;