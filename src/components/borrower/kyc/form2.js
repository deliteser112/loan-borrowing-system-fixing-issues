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
import {useNavigate} from 'react-router-dom';
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import useAuth from "../../../hooks/useAuth";


const Form2 = () => {


    const {auth} = useAuth();
    let navigate = useNavigate();

    const [number, setNumber] = useState("");
    const [houseNumber, setHouseNumber] = useState("");
    const [maritalStatus, setMaritalStatus] = useState("Single");
    const [numOfDependants, setNumOfDependants] = useState(0);
    const [race, setRace] = useState("Single");
    const [lvlOfEdu, setLvlOfEdu] = useState("Diploma");
    const [professional, setProfessional] = useState("No");
    const [job, setJob] = useState("")
    const [showComponent, setShowComponent] =useState(false);
    const [id, setId] = useState(1);
    const init = {
        "City": "",
        "State": "Kuala Lumpur",
        "PostCode": ""
    }
    const [address, setAddress] = useState(init);

    useEffect(() => {
        fetch('http://localhost:5002/kyc/getid').then((response) => response.json()).then((data) => {
            setId(data[0].id);
        }).catch((err) => {
            console.log(err.message);
        });
    }, []);

    const updatekyc = async () => {
        await fetch('http://localhost:5002/kyc/form2/' + auth?.decodedToken?.userId, {
            method: 'PUT',
            body: JSON.stringify(
                {
                    "mobile_number": number,
                    "house_number": houseNumber,
                    "address": address["City"] + "-" + address["State"] + "-" + address["PostCode"],
                    "marital_status": maritalStatus,
                    "num_of_dependents":numOfDependants,
                    "race":race,
                    "lvl_of_edu":lvlOfEdu,
                    "pro_line":professional,
                    "job_title":job,
                }
            ),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }).then((response) => response.json()).then(data => console.log(data)).catch((err) => {
            console.log(err.message);
        });
    };

    const handleChange = (e) => {
        setAddress({
            ...address,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updatekyc();
        navigate('/kyc_form3');
    };
    
    return (
        <div>
                   <Navbar/>
            <Sidebar/>
            <div className="main">
                <div className="form2">

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
                    <Form className="form2"
                        onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col}
                                className="mb-3">
                                <Form.Label>
                                    Mobile Number</Form.Label>
                                <Form.Control type="tel" placeholder=""
                                    
                                    onChange={
                                        (e) => setNumber(e.target.value)
                                    }/>
                            </Form.Group>

                            <Form.Group as={Col}
                                className="mb-3">
                                <Form.Label>House Number</Form.Label>
                                <Form.Control type="tel" placeholder=""
                                    onChange={
                                        (e) => setHouseNumber(e.target.value)
                                    }/>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col}
                                className="mb-3">
                                <Form.Label>
                                    City</Form.Label>
                                <Form.Control name="City" placeholder=""
                                    onChange={handleChange}/>
                            </Form.Group>

                            <Form.Group as={Col}
                                className="mb-3">
                                <Form.Label>State</Form.Label>
                                <Form.Select name="State"
                                    onChange={handleChange}>
                                    <option>Kuala Lumpur</option>
                                    <option>Selangor</option>
                                    <option>Perak</option>
                                    <option>Johor</option>
                                    <option>Kedah</option>
                                    <option>Kelantan</option>
                                    <option>Melacca</option>
                                    <option>Negeri Sembilan</option>
                                    <option>Pahang</option>
                                    <option>Perlis</option>
                                    <option>Sabah</option>
                                    <option>Serawak</option>
                                    <option>Terengganu</option>
                                    <option>Labuan</option>
                                    <option>Putrajaya</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col}
                                className="mb-3">
                                <Form.Label>Postcode</Form.Label>
                                <Form.Control type="number" name="PostCode" placeholder=""
                                    onChange={handleChange}/>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col}
                                className="mb-3">
                                <Form.Label>Marital Status</Form.Label>
                                <Form.Select onChange={
                                    (e) => setMaritalStatus(e.target.value)
                                }>
                                    <option>Single</option>
                                    <option>Married</option>
                                    <option>Divorced</option>
                                    <option>Widow</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col}
                                className="mb-3">
                                <Form.Label>Number Of Dependants</Form.Label>
                                <Form.Control type="number" placeholder=""onChange={
                                        (e) => setNumOfDependants(e.target.value)
                                    }/>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col}
                                className="mb-3">
                                <Form.Label>Race</Form.Label>
                                <Form.Select onChange={
                                        (e) => setRace(e.target.value)
                                    }>
                                    <option>Malay</option>
                                    <option>Chinese</option>
                                    <option>Indian</option>
                                    <option>Other</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col}
                                className="mb-3">
                                <Form.Label>Highest Level Of Education</Form.Label>
                                <Form.Select onChange={
                                        (e) => setLvlOfEdu(e.target.value)
                                    }>
                                    <option>Diploma</option>
                                    <option>Bachelor</option>
                                    <option>Master</option>
                                    <option>PHD</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3">
                            <span>Are you working in a professional line?
                            </span>
                            <br></br>

                            <Form.Check inline label="Yes" onClick={
                                        (e) => 
                                            setShowComponent(!showComponent)
                                        
                                    }/>
                            <Form.Check inline label="No" onClick={
                                        (e) => setProfessional("No")
                                    }/>
                        </Form.Group>
                        {showComponent ?  <Form.Group as={Col}
                            className="mb-3">
                            <Form.Label>
                                Profession</Form.Label>
                            <Form.Control type="tel" placeholder=""
                                onChange={
                                    (e) => setJob(e.target.value)
                                }/>
                        </Form.Group>: null}
                        <div className="button">
                            <Button  variant="warning" type="submit">Submit</Button>
                        </div>
                    </Form>
                </div>

            </div>
        </div>
    );
}

export default Form2;
