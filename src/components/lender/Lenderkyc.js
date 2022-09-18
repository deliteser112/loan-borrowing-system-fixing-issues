import React from "react";
import {useEffect, useState} from "react";
import "./style.css";
// import "../../../App.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {useNavigate} from 'react-router-dom';
import Navbar from "./Navbar";
import SidebarLender from "./sidebarlender";
import useAuth from "../../hooks/useAuth";

const Lenderkyc = () => {


    const { auth } = useAuth();
    let navigate = useNavigate();

    const [name, setName] = useState('');
    const [gender, setGender] = useState('M');
    const [nric, setNric] = useState();
    const [dob, setDob] = useState("2000-01-01");
    const [doe, setDoe] = useState("2000-01-01");


    // useEffect(() => {
    //     fetchKycId();
    //     fetchUserId();
    // }, []);

    // const fetchKycId = async () => {
    //     fetch('http://localhost:5002/kyc/getid').then((response) => response.json()).then((data) => {
    //         setId(!data[0].id ? 1 : parseInt(data[0].id) + 1)
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
                    "dob": dob,
                    "doe": doe,
                }
            ),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }).then((response) => response.json()).catch((err) => {
            console.log(err.message);
        });
    };

    const handleDate = () => {
        let dt = new Date().toISOString().slice(0, 10).replace('T', ' ');;
        setDoe(dt);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addkyc();
        navigate('/lender/summary');
    };

    return (
        <div>
            <Navbar/>
            <SidebarLender/>
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


                        {/* 
<Form.Group as={Row}>
        <Form.File
          type="file"
          className="custom-file-label"
          id="inputGroupFile01"
          label="Proof Of Residency"
        
       
        />
      </Form.Group> */}

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>NRIC Front
                            </Form.Label>
                            <Form.Control type="file"/>
                        </Form.Group>

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>NRIC Back</Form.Label>
                            <Form.Control type="file"/>
                        </Form.Group>

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Proof of Residency</Form.Label>
                            <Form.Control type="file"/>
                        </Form.Group>


                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox" label="Click to agree to the Consent From (Experian) to check your NRIC/MyKad"
                                onClick={handleDate}/>


                        </Form.Group>


                        <div className="button">
                            <Button variant="warning" type="submit">Submit</Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>

    );
}

export default Lenderkyc;
