import "./style.css";
import Button from "react-bootstrap/Button";
import React from "react";
import { Col, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "./kyc/navbar";
import Sidebar from "./kyc/sidebar";
// import { FiEdit3 } from "react-icons/fi";
import { Row } from "react-bootstrap";
import user from "../../components/images/user-profile.png";
import { Form } from "react-bootstrap";

const BorrowerProfile = () => {
  let navigate =useNavigate()
  return (
    <div>
      <Navbar />
      <Sidebar />

      <div className="main">
       <div className="profile">
         <Container>
           <Row>
             <Col className="profile-col">
               
                 <img src={user} alt="profile" className="prof-pic" ></img>
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                   <Form.Control type="file" placeholder="" />
                 </Form.Group>
               
             </Col>
             <Col className="form-col">
               <Form>
                 <Row>
                   <Col>
                     {" "}
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                       <Form.Label>Name</Form.Label>
                       <Form.Control type="text" placeholder="" />
                     </Form.Group>
                   </Col>
        
                   <Col>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                       <Form.Label>Contact</Form.Label>
                       <Form.Control type="tel" placeholder="" />
                     </Form.Group>
                   </Col>
                 </Row>
        
                 <Row>
                   <Col>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                       <Form.Label>Email</Form.Label>
                       <Form.Control type="email" placeholder="" />
                     </Form.Group>
                   </Col>
                   <Col>
                     <Button className="change-pass" variant="secondary">Change Password</Button>
                   </Col>
                 </Row>
        
                 <Row>
                   <Col>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                       <Form.Label>City</Form.Label>
                       <Form.Control type="text" placeholder="" />
                     </Form.Group>
                   </Col>
                   <Col>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                       <Form.Label>Country</Form.Label>
                       <Form.Control type="text" placeholder="" />
                     </Form.Group>
                   </Col>
                 </Row>
        
                 <Row>
                   <Col>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                       <Form.Label>job position</Form.Label>
                       <Form.Control type="text" placeholder="" />
                     </Form.Group>
                   </Col>
                   <Col>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                       <Form.Label>Company</Form.Label>
                       <Form.Control type="text" placeholder="" />
                     </Form.Group>
                   </Col>
                 </Row>
               </Form>
             </Col>
           </Row>
         </Container>
         
<Row className="profile-footer">
        
                 <Col >
                          <Button className="update-button" variant="primary">Update</Button>
                 </Col>
                  <Col className="back-col">
                         <Button className="back-button" variant="danger" onClick={()=>navigate('/borrower')} >back</Button>
                  </Col>
                 
</Row>
   
        </div>
       </div>





    </div>
  );
};

export default BorrowerProfile;
