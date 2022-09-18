import React from "react";
import {useEffect, useState} from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
// import Col from 'react-bootstrap/Col';
import Ident from "../images/identification.svg";
import Income from "../images/income.svg";
import Commitment from "../images/commitment.svg";
import Mortgage from "../images/mortgage.svg";
import Documents from "../images/documents.svg";
import { PriceChange } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Navbar from "../borrower/kyc/navbar";
import Sidebar from "../borrower/kyc/sidebar";


const PropertyForm = () => {
    let navigate = useNavigate();

    const [name, setName] = useState("");
    const [type, setType] = useState('A');
    const [address, setAddress] = useState("");
    const [marketValue, setMarketValue] = useState(0);
    const [price, setPrice] = useState(0);
    const [id, setId] = useState(1);

    const init = {
        "propAdd": "",
        "City": "",
        "State": "Kuala Lumpur",
        "PostCode": ""
    }

    useEffect(() => {
        fetch('http://localhost:5002/property/getid').then((response) => response.json()).then((data) => {
            setId(!data[0].id ? 1 : parseInt(data[0].id) + 1)
        }).catch((err) => {
            console.log(err.message);
        });
    }, [id]);

    const createProperty = async () => {
        await fetch('http://localhost:5002/property/createproperty/', {
            method: 'POST',
            body: JSON.stringify(
                {
                    "id": id,
                    "name": name,
                    "type": type,
                    "address": address["propAdd"] + "-" + address["City"] + "-" + address["State"] + "-" + address["PostCode"],

                    "marketValue": marketValue,
                    "price": price
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
        createProperty();
        navigate("/loan/loanForm");
    };

    return (


        <div>
            <Navbar/>
            <Sidebar/>
            <div className="main">
                <div className="image-container-header">
                    <b>Property Form</b>
                    <p>Status: incomplete</p>
                    <div className="images-container">
                        <img src={Ident}
                            className="Identification"
                            alt=""></img>
                        <img src={Income}
                            className=" Income"
                            alt=""></img>
                        <img src={Commitment}
                            className="Commitment"
                            alt=""></img>
                        <img src={Mortgage}
                            className="Mortgage"
                            alt=""></img>
                        <img src={Documents}
                            className="Documents"
                            alt=""></img>
                    </div>
                </div>

                <div className="form-container">
                    <Form className="borrower-form"
                        onSubmit={handleSubmit}>
                        {/* loan information */}
                        <div className="form-container-child">
                                <div className="side-box">
                                    <h6>Property Information</h6>
                                </div>

                                <div className="form-input">
                                    <Form.Group className="mb-3">
                                        <Form.Label>Type</Form.Label>
                                        <Form.Select onchange={
                                            (e) => setType(e.target.value.charAt(0))
                                        }>
                                            <option value="" selected>
                                                --Select Type--
                                            </option>
                                            <option value="">Studio Apartment</option>
                                            <option value="">Terrace House</option>
                                            <option value="">Condominium</option>
                                            <option value="">Other</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Property Name</Form.Label>
                                        <Form.Control placeholder="" type="text"
                                            onChange={
                                                (e) => setName(e.target.value)
                                            }/>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Property Listing Link (if any)</Form.Label>
                                        <Form.Control placeholder="" type="text"/>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Estimated Market Value</Form.Label>
                                        <Form.Control placeholder="" type="number"
                                            onChange={
                                                (e) => setMarketValue(e.target.value)
                                            }/>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Purchase Price</Form.Label>
                                        <Form.Control placeholder="" type="number"
                                            onChange={
                                                (e) => setPrice(e.target.value)
                                            }/>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Property Address</Form.Label>
                                        <Form.Control placeholder="" type="text" name="propAdd"
                                            onChange={handleChange}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control placeholder="" type="text" name="City"
                                            onChange={handleChange}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>State</Form.Label>
                                        <Form.Control placeholder="" type="text" name="State"
                                            onChange={handleChange}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Postcode</Form.Label>
                                        <Form.Control placeholder="" type="number" name="PostCode"
                                            onChange={handleChange}/>
                                    </Form.Group>

                                </div>
                            </div>


                            <div className="form-footer clearfix">
                                <Button onClick={
                                        () => navigate("/borrower")
                                    }
                                    className='button-back'
                                    variant="link">
                                    Back
                                </Button>
                                <Button 
                                    className='button-submit'
                                    variant="warning"
                                    type="submit">
                                    Submit
                                </Button>
                        </div>
                    </Form>

                </div>
            </div>
        </div>
    );
};

export default PropertyForm;
