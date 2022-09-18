import React from "react";
import {useEffect, useState} from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
// import Col from 'react-bootstrap/Col';
import Ident from "../../images/identification.svg";
import Income from "../../images/income.svg";
import Commitment from "../../images/commitment.svg";
import Mortgage from "../../images/mortgage.svg";
import Documents from "../../images/documents.svg";
import { PriceChange } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Navbar from "../kyc/navbar";
import Sidebar from "../kyc/sidebar";




const MortgageInfo = () => {
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
        setId(data[0].id ? data[0].id : 1);
    }).catch((err) => {
        console.log(err.message);
    });
}, [id]);

const createProperty = async () => {
  await fetch('http://localhost:5002/property/createproperty/' , {
      method: 'POST',
      body: JSON.stringify(
          {
            "id":id,
            "name":name,
            "type":type,
            "address": address["propAdd"] + "-" + address["City"] + "-" + address["State"] + "-" + address["PostCode"],

            "marketValue":marketValue,
            "price":price
          }
      ),
      headers: {
          'Content-type': 'application/json; charset=UTF-8'
      }
  }).then((response) => response.json())
  .then(data => console.log(data))
  .catch((err) => {
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
};

useEffect(() => {
  console.log(address)
}, [address]);



  return (


  <div>
      <Navbar /> 
      <Sidebar />
      <div className="main">
        <div className="image-container-header">
          <b>Mortgage</b>
          <p>Loan Application Status: incomplete</p>
          <div className="images-container">
            <img src={Ident} className="Identification" alt=""></img>
            <img src={Income} className=" Income" alt=""></img>
            <img src={Commitment} className="Commitment" alt=""></img>
            <img src={Mortgage} className="Mortgage" alt=""></img>
            <img src={Documents} className="Documents" alt=""></img>
          </div>
        </div>
    
        <div className="form-container">
          <Form className="borrower-form" onSubmit={handleSubmit}>
            {/* loan information */}
            <div className="form-container-child">
              <div className="side-box">
                <h6>Loan Information</h6>
              </div>
    
              <div className="form-input">
                <Row>
                  <Form.Group className="mb-3">
                    <Form.Label>Loan Amount (RM)</Form.Label>
                    <Form.Control placeholder="" type="number" />
                  </Form.Group>
    
                  <Form.Group className="mb-3">
                    <Form.Label>Tenure Years</Form.Label>
                    <Form.Control placeholder="" type="number" />
                  </Form.Group>
    
                  <Form.Group className="mb-3">
                    <Form.Label>Source of Payment</Form.Label>
                    <Form.Control placeholder="" type="text" />
                  </Form.Group>
    
                  <Form.Group className="mb-3">
                    <Form.Label>Please Specify</Form.Label>
                    <Form.Control placeholder="" type="text" />
                  </Form.Group>
                </Row>
              </div>
            </div>
    
            {/* property information*/}
            <div className="form-container-child">
              <div className="side-box">
                <h6>Property Information</h6>
              </div>
    
              <div className="form-input">
                <Form.Group className="mb-3">
                  <Form.Label>Type</Form.Label>
                  <Form.Select onchange={(e) => setType(e.target.value.charAt(0))}>
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
                  <Form.Control placeholder="" type="text" onChange={(e) => setName(e.target.value)}/>
                </Form.Group>
    
                <Form.Group className="mb-3">
                  <Form.Label>Property Developer Name</Form.Label>
                  <Form.Control placeholder="" type="text" />
                </Form.Group>
    
                <Form.Group className="mb-3">
                  <Form.Label>Number of Bedrooms</Form.Label>
                  <Form.Control placeholder="" type="number" />
                </Form.Group>
    
                <Form.Group className="mb-3">
                  <Form.Label>Property Listing Link (if any)</Form.Label>
                  <Form.Control placeholder="" type="text" />
                </Form.Group>
    
                <Form.Group className="mb-3">
                  <Form.Label>Estimated Market Value</Form.Label>
                  <Form.Control placeholder="" type="number" onChange={(e) => setMarketValue(e.target.value)}/>
                </Form.Group>
    
                <Form.Group className="mb-3">
                  <Form.Label>Purchase Price</Form.Label>
                  <Form.Control placeholder="" type="number" onChange={(e) => setPrice(e.target.value)}/>
                </Form.Group>
    
                <Form.Group className="mb-3">
                  <Form.Label>Property Address</Form.Label>
                  <Form.Control placeholder="" type="text" name="propAdd" onChange={handleChange} />
                </Form.Group>
    
                <Form.Group className="mb-3">
                  <Form.Label>City</Form.Label>
                  <Form.Control placeholder="" type="text" name="City" onChange={handleChange}/>
                </Form.Group>
    
                <Form.Group className="mb-3">
                  <Form.Label>State</Form.Label>
                  <Form.Control placeholder="" type="text" name="State" onChange={handleChange}/>
                </Form.Group>
    
                <Form.Group className="mb-3">
                  <Form.Label>Postcode</Form.Label>
                  <Form.Control placeholder="" type="number" name="PostCode" onChange={handleChange}/>
                </Form.Group>
    
                <Form.Group className="mb-3">
                  <Form.Label>Freehold/Leasehold</Form.Label>
                  <Form.Control placeholder="" type="text" />
                </Form.Group>
             
              </div>
            </div>
    
            {/* property usage*/}
            <div className="form-container-child">
              <div className="side-box">
                <h6>Property Usage</h6>
              </div>
    
              <div className="form-input">
                <p>Will you/immediate family member live in the property?</p>
                <input type="radio" id="yes" name="yes" value="Yes"></input> {" "}
                <label for="yes">Yes</label> {" "}
                <input type="radio" id="no" name="no" value="no"></input> {" "}
                <label for="no">No</label>
                <br></br>
                <hr></hr>
                <p>Are you related to the property seller?</p>
                <input type="radio" id="yes" name="yes" value="Yes"></input> {" "}
                <label for="yes">Yes</label> {" "}
                <input type="radio" id="no" name="no" value="no"></input> {" "}
                <label for="no">No</label>
                <br></br>
                <hr></hr>
                <p>
                  For subsale house, was the house previously unoccupied for the
                  last 18 months? if yes, why?
                </p>
                <input type="radio" id="yes" name="yes" value="Yes"></input> {" "}
                <label for="yes">Yes</label> {" "}
                <input type="radio" id="no" name="no" value="no"></input> {" "}
                <label for="no">No</label>
                <br></br>
                <hr></hr>
              </div>
            </div>
    
            {/* bank information*/}
            <div className="form-container-child">
              <div className="side-box">
                <h6>Bank Information</h6>
              </div>
    
              <div className="form-input">
                <label for="banks">Select Bank Name:</label>
                
                <Form.Group className="mb-3">
                  <Form.Select name="banks" id="banks">
                    <option value="Select Banks" disabled selected>
                      --Select Banks--
                    </option>
                    <option value="RHB Bank">RHB Bank</option>
                    <option value="Alliance Bank">Alliance Bank</option>
                    <option value="AmBank">AmBank</option>
    
                    <option value="CIMB Bank">CIMB Bank</option>
                    <option value="Hong Leong Bank">Hong Leong Bank</option>
                    <option value="Public Bank">Public Bank</option>
                    <option value="Affin Bank">Affin Bank</option>
                    <option value="Maybank">Maybank</option>
                  </Form.Select>
                </Form.Group>
    
                <Form.Group className="mb-3">
                  <Form.Label for="banks">Select Account Type:</Form.Label>
                  <Form.Select name="banks" id="banks">
                    <option value="Select Banks" selected>
                      --Select Option--
                    </option>
                    <option value="RHB Bank">RHB Bank</option>
                    <option value="Alliance Bank">Alliance Bank</option>
                    <option value="AmBank">AmBank</option>
                  </Form.Select>
                </Form.Group>            
    
                <Form.Group className="mb-3">
                  <Form.Label>Account Name</Form.Label>
                  <Form.Control placeholder="" type="text" />
                </Form.Group>
    
                <Form.Group className="mb-3">
                  <Form.Label>Account Number</Form.Label>
                  <Form.Control placeholder="" type="number" />
                </Form.Group>
              </div>
            </div>
    
            {/* second contact information */}
            <div className="form-container-child">
               <div className="side-box">
                <h6>Second Contact Information</h6>
                <br />
                <Form.Text className="text-muted">Contact details for someone we can contact incase we can't reach you.
                This should not be a member of your family</Form.Text>
              </div>
    
              <div className="form-input">
                <Form.Group className="mb-3">
                  <Form.Label> Salutation</Form.Label>
                  <Form.Select>
                    <option>Mr</option>
                    <option>Mrs</option>
                    <option>Ms</option>
                  </Form.Select>
                </Form.Group>
    
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control placeholder="" type="text" />
                </Form.Group>
    
                <Form.Group className="mb-3">
                  <Form.Label>Relationship</Form.Label>
                  <Form.Control placeholder="" type="number" />
                </Form.Group>
    
                <Form.Group className="mb-3">
                  <Form.Label>Gender</Form.Label>
                  <Form.Select>
                    <option>Male</option>
                    <option>Female</option>
                  </Form.Select>
                </Form.Group>
    
                <Form.Group className="mb-3">
                  <Form.Label>Date Of Birth</Form.Label>
                  <Form.Control placeholder="" type="date" />
                </Form.Group>
    
                <Form.Group className="mb-3">
                  <Form.Label>NRIC</Form.Label>
                  <Form.Control placeholder="" type="number" />
                </Form.Group>
    
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>NRIC front photo</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>NRIC back photo</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
    
                <small>Contact</small>
                <br></br>
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control placeholder="" type="tel" />
                </Form.Group>
    
                <Form.Group className="mb-3">
                  <Form.Label>Property Address</Form.Label>
                  <Form.Control placeholder="" type="text" />
                </Form.Group>
    
                <Form.Group className="mb-3">
                  <Form.Label>City</Form.Label>
                  <Form.Control placeholder="" type="text" />
                </Form.Group>
    
                <Form.Group className="mb-3">
                  <Form.Label>State</Form.Label>
                  <Form.Select>
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
    
                <Form.Group className="mb-3">
                  <Form.Label>Postcode</Form.Label>
                  <Form.Control placeholder="" type="number" />
                </Form.Group>
    
                <Form.Group className="mb-3">
                  <Form.Label>Current Resident Status</Form.Label>
                  <Form.Control placeholder="" type="text" />
                </Form.Group>
    
                <Form.Group className="mb-3">
                  <Form.Label>Year at Current Resident</Form.Label>
                  <Form.Control placeholder="" type="number" />
                </Form.Group>
    
                <small>Bank Information</small>
                <br></br>
                <label for="banks"> Select Bank Name: </label>
                <br></br>
                <Form.Group className="mb-3">
                  <Form.Select name="banks" id="banks" className="mb-3">
                    <option value="Select Banks" selected>
                      --Select Banks--
                    </option>
                    <option value="RHB Bank">RHB Bank</option>
                    <option value="Alliance Bank">Alliance Bank</option>
                    <option value="AmBank">AmBank</option>
    
                    <option value="CIMB Bank">CIMB Bank</option>
                    <option value="Hong Leong Bank">Hong Leong Bank</option>
                    <option value="Public Bank">Public Bank</option>
                    <option value="Affin Bank">Affin Bank</option>
                    <option value="Maybank">Maybank</option>
                  </Form.Select>
                </Form.Group>
    
                <Form.Group className="mb-3">
                  <Form.Label>Account Name</Form.Label>
                  <Form.Control placeholder="" type="text" />
                </Form.Group>
    
                <Form.Group className="mb-3">
                  <Form.Label>Select Account Type</Form.Label>
                  <Form.Select>
                    <option value="" selected></option>
                    <option value=""></option>
                    <option value=""></option>
                  </Form.Select>
                </Form.Group>
              </div>
            </div>
    
            <div className="form-footer clearfix">
              <Button  onClick={()=>navigate("/borrower")} className='button-back' variant="link">
                  Back
              </Button>
              <Button  onClick={()=>navigate("/borrower")} className='button-submit' variant="warning" type="submit">
                  Submit
              </Button>
            </div>
          </Form>
        </div>
        {/* form container */}
      </div>
  </div>
  );
};

export default MortgageInfo;
