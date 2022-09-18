import React from "react";
import "./style.css";
import "../../../App.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {useEffect, useState} from "react";
import InputGroup from "react-bootstrap/InputGroup";
import user from '../../images/user-profile.png';
import sideBarPic from '../../images/business-3d-325.png';
import logo from '../../images/newnewlogo.png';
import info from '../../images/identification.svg';
import commitment from '../../images/commitment.svg';
import docs from '../../images/documents.svg';
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

import useAuth from "../../../hooks/useAuth";

const Form1 = () => {

    const { auth } = useAuth();

    

    let navigate = useNavigate();

    const [name, setName] = useState('');
    const [gender, setGender] = useState('M');
    const [nric, setNric] = useState(0);
    const [dob, setDob] = useState("2000-01-01");
    const [doe, setDoe] = useState("2000-01-01");
    const [userId, setUserId] = useState(1);
    const [id, setId] = useState(1);

    useEffect(() => {
        // fetchKycId();
        // fetchUserId();
        console.log(auth);
    }, []);

    // const fetchKycId = async () => {
    //     fetch('http://localhost:5002/kyc/getid').then((response) => response.json()).then((data) => {
    //         setId(!data[0].id ? 1 : parseInt(data[0].id)+1)
    //     }).catch((err) => {
    //         console.log(err.message);
    //     });
    // }

    // const fetchUserId = async () => {
    //     fetch('http://localhost:5002/user/getid').then((response) => response.json()).then((data) => {
    //         setUserId(!data[0].id ? 1 : parseInt(data[0].id))
    //     }).catch((err) => {
    //         console.log(err.message);
    //     });
    // }


    const addkyc = async () => {
        await fetch('http://localhost:5002/kyc/form1', {
            method: 'POST',
            body: JSON.stringify(
                {
                    "user_id": auth?.decodedToken?.userId,
                    "full_name": name,
                    "nric": nric,
                    "gender": gender,
                    "dob":dob,
                    "doe":doe
                    // "mobileNumber": "X",
                    // "houseNumber":"X",
                    // "address": "X",
                    // "maritalStatus": "X",
                    // "numOfDependants":0,
                    // "race":"",
                    // "lvlOfEdu":"",
                    // "proLine":"",
                    // "jobTitle":"",
                    // "monthlyNetIncome": 0,
                    // "variableIncome": 0,
                    // "investmentIncome": 0,
                    // "monthlyFinancialCommitment": 0,
                    // "estimatedPrice": 0,
                    // "downPayment": 0,
                    // "email":"",
                    // "password":"",
                    // "status":0
                  }
            ),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }).then((response) => response.json()).catch((err) => {
            console.log(err.message);
        });
    };
    
    //axios post kyc function
    // const submitKyc = async () => {
    //     try {
    //         const response = await axios.post('http://localhost:5002/kyc/form1', {
    //             "user_id" : auth?.decodedToken?.userId,
    //             "full_name" : name,
    //             "nric": nric,
    //             "gender": gender,
    //             "dob": dob,
    //             "doe": doe
    //         })
    //         console.log(response.data)
    //     } catch(error) {

    //     }
    // }


    const handleDate = () =>{
        let dt = new Date().toISOString().slice(0, 10).replace('T', ' ');;
        setDoe(dt);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addkyc();
        navigate('/kyc_form2');
    };


    return (
        <div>
            <Navbar/>
            <Sidebar/>
            <div className="main">
                <div className="form">

                    <div className="form-container">
                        <b>Please complete this KYC below</b>
                        <br></br>
                        <small>This will help us know who you are and validate your profile</small>
                    </div>
                    <Form className="form1"
                        onSubmit={handleSubmit}>


                        <h5>Details</h5>
                        <Row className="mb-3">
                            <Form.Group as={Col}
                                className="mb-3">
                                <Form.Label>
                                    Salutation</Form.Label>
                                <Form.Select>
                                    <option>Mr</option>
                                    <option>Mrs</option>
                                    <option>Ms</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col}
                                className="mb-3">
                                <Form.Label>
                                    Full Name (according to NRIC)</Form.Label>
                                <Form.Control placeholder=""
                                    onChange={
                                        (e) => setName(e.target.value)
                                    }/>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col}
                                className="mb-3">
                                <Form.Label>Gender</Form.Label>
                                <Form.Select onChange={
                                    (e) => setGender(e.target.value.charAt(0))
                                }>
                                    <option>Male</option>
                                    <option>Female</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col}
                                className="mb-3">
                                <Form.Label>
                                    NRIC number</Form.Label>
                                <Form.Control type="number" placeholder=""
                                    onChange={
                                        (e) => setNric(e.target.value)
                                    }/>
                            </Form.Group>

                            <Form.Group as={Col}
                                className="mb-3">
                                <Form.Label>
                                    Date Of Birth</Form.Label>
                                <Form.Control type="Date" placeholder=""
                                    onChange={
                                        (e) => setDob(e.target.value)
                                    }/>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>NRIC front</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>NRIC back</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>

                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox" label="Click to agree to the Consent From (Experian) to check your NRIC/MyKad" 
                            onClick={handleDate}/>
                        </Form.Group>
                        <div className="button">

                            <Button  variant="warning" type="submit">Submit</Button>

                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Form1;
