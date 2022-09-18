import React from 'react';
import Card from "@material-ui/core/Card";
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from './sidebar';
import Navbar from './navbar';
import {useEffect, useState} from "react";

import "./tabler.min.css"
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function ApplicationDetails() {
    let navigate = useNavigate();

    //user details
    const [id, setId] = useState(1);
    const [income, setIncome] = useState(0);
    //property details
    const [propertyName, setPropertyName] = useState("");
    const [propertyType, setPropertyType] = useState("");
    const [propertyAddress, setPropertyAddress] = useState("");
    const [propertyValue, setPropertyValue] = useState(0);
    const [propertyPrice, setPropertyPrice] = useState(0);
    //application status
    const [status, setStatus] = useState();
    const [amount, setAmount] = useState(1);

    // Get user data from Db
    const getKyc = async () => {
        await fetch('http://localhost:5002/kyc/getkyc/' + id).then((response) => response.json()).then((data) => {
            setIncome(data[0]["income"])
        }).catch((err) => {
            console.log(err.message);
        });
    };

     // Get property data from Db
     const getProperty = async () => {
        await fetch('http://localhost:5002/property/getproperty/' + id).then((response) => response.json()).then((data) => {
            setPropertyName(data[0]["name"]);
            setPropertyType(data[0]["type"]);
            setPropertyAddress(data[0]["address"]);
            setPropertyValue(data[0]["marketValue"]);
            setPropertyPrice(data[0]["price"]);
        }).catch((err) => {
            console.log(err.message);
        });
    };




    
    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus(e.target.value);
        navigate("/loan/verified_application");
    };

    //Get user details initially
    useEffect(() => {
        getKyc();
        getProperty();
    }, []);

    return (
        <div>
            
                  <Sidebar/>
                  <Navbar/>
            <div className='main'>
            
            
                 
                      <div className="d-print-none">
                          <div className="row">
                              <div className="col">
                                  <h2 className="pretitle">Management</h2>
                                  <h2 className="page-title">Loan Application</h2>
                              </div>
                          </div>
                      </div>
            
                      <div className="row">
                          <div className="col-md-9 tabs">
                              <Card>
                                  <Tabs defaultActiveKey="application-details" id="justify-tab-example" className="mb-2 bg-white" style={{ width:"80%" }}>
                                      <Tab eventKey="application-details" title="Application Details">
                                          <dl className="row ps-3">
                                              <dt className="col-5">Application Amount:</dt>
                                              <dd className="col-7">{amount}</dd>
                                              <dt className="col-5">Application Years:</dt>
                                              <dd className="col-7">No Data</dd>
                                              <dt className="col-5">Application Home Name:</dt>
                                              <dd className="col-7">{propertyName}</dd>
                                              <dt className="col-5">Application Home Type:</dt>
                                              <dd className="col-7">{propertyType}</dd>
                                              <dt className="col-5">Application Home Address:</dt>
                                              <dd className="col-7">{propertyAddress}</dd>
                                              <dt className="col-5">Property Developer:</dt>
                                              <dd className="col-7">No Data</dd>
                                              <dt className="col-5">Home Market Value:</dt>
                                              <dd className="col-7">{propertyValue}</dd>
                                              <dt className="col-5">Down Payment:</dt>
                                              <dd className="col-7">No Data</dd>
                                              <dt className="col-5">Source of Down Payment:</dt>
                                              <dd className="col-7">No Data</dd>
                                              <dt className="col-5">No of bedrooms:</dt>
                                              <dd className="col-7">No Data</dd>
                                              <dt className="col-5">Purchase Price:</dt>
                                              <dd className="col-7">No Data</dd>
                                          </dl>
                                      </Tab>
                                      <Tab eventKey="applicants" title="Applicants">
                                          <div class="card mt-3">
                                              <div className="card-header">
                                                  <div className="card-title">Income
                                                                                                  Salary</div>
                                              </div>
                                              <div className="card-body">
                                                  <dl className="row">
                                                      <dt className="col-5">Monthly Gross Salary:</dt>
                                                      <dd className="col-7">{income}</dd>
                                                      <dt className="col-5">Company Name:</dt>
                                                      <dd className="col-7">No Data</dd>
                                                      <dt className="col-5">Allowance/Bonus: (if applicable)</dt>
                                                      <dd className="col-7">No Data</dd>
                                                      <dt className="col-5">Length of Employment: (years)</dt>
                                                      <dd className="col-7">No Data</dd>
                                                  </dl>
                                              </div>
                                          </div>
                                          <div className="card mt-3">
                                              <div className="card-header">
                                                  <div className="card-title">Income
                                                                                                  Part Time</div>
                                              </div>
                                              <div className="card-body">
                                                  <dl className="row">
                                                      <dt className="col-5">
                                                          Role:
                                                      </dt>
                                                      <dd className="col-7">No Data</dd>
                                                      <dt className="col-5">
                                                          Estimated Earnings For Last 6 Month:
                                                      </dt>
                                                      <dd className="col-7">No Data</dd>
                                                  </dl>
                                              </div>
                                          </div>
                                          <div className="card mt-3">
                                              <div className="card-header">
                                                  <div className="card-title">Income
                                                                                                  Investments</div>
                                              </div>
                                              <div className="card-body">
                                                  <dl className="row">
                                                      <dt className="col-5">Source:</dt>
                                                      <dd className="col-7">No Data</dd>
                                                      <dt className="col-5">Please Specify:</dt>
                                                      <dd className="col-7">No Data</dd>
                                                      <dt className="col-5">Yearly Estimated Earning:</dt>
                                                      <dd className="col-7">No Data</dd>
                                                  </dl>
                                              </div>
                                          </div>
                                          <div class="card mt-3">
                                              <div class="card-header">
                                                  <div class="card-title">Income Self Employed</div>
                                              </div>
                                              <div class="card-body">
                                                  <dl class="row">
                                                      <dt class="col-5">Type of Business:</dt>
                                                      <dd class="col-7">No Data</dd>
                                                      <dt class="col-5">No. of Employees:</dt>
                                                      <dd class="col-7">No Data</dd>
                                                      <dt class="col-5">Business Registration Number:</dt>
                                                      <dd class="col-7">No Data</dd>
                                                      <dt class="col-5">Office Phone Number:</dt>
                                                      <dd class="col-7">No Data</dd>
                                                      <dt class="col-5">Share of Business(%):</dt>
                                                      <dd class="col-7">No Data</dd>
                                                      <dt class="col-5">Last 2 Years Net Profit:</dt>
                                                      <dd class="col-7">No Data</dd>
                                                  </dl>
                                              </div>
                                          </div>
                                      </Tab>
                                      <Tab eventKey="debt-commitments" title="Debt Commitments">
                                          <div class="card mb-3">
                                              <div class="card-header">
                                                  <div class="card-title">
                                                      Credit Cards
                                                  </div>
                                              </div>
                                              <div class="card-body">
                                                  <dl class="row">
                                                      <dt class="col-5">Type:</dt>
                                                      <dd class="col-7">No Data
                                                      </dd>
                                                      <dt class="col-5">Outstanding Balance:</dt>
                                                      <dd class="col-7">No Data
                                                      </dd>
                                                      <dt class="col-5">Bank Name</dt>
                                                      <dd class="col-7">No Data
                                                      </dd>
                                                      <dt class="col-5">Monthly Repayment</dt>
                                                      <dd class="col-7">No Data
                                                      </dd>
                                                  </dl>
                                              </div>
                                          </div>
                                          <div class="card mb-3">
                                              <div class="card-header">
                                                  <div class="card-title">
                                                      Loans
                                                  </div>
                                              </div>
                                              <div class="card-body">
                                                  <dl class="row">
                                                      <dt class="col-5">Type:</dt>
                                                      <dd class="col-7">No Data
                                                      </dd>
                                                      <dt class="col-5">Monthly Repayment:</dt>
                                                      <dd class="col-7">No Data
                                                      </dd>
                                                      <dt class="col-5">Source of Loan: (bank name, loan provider..)
                                                      </dt>
                                                      <dd class="col-7">No Data
                                                      </dd>
                                                  </dl>
                                              </div>
                                          </div>
                                          <div class="card mb-3">
                                              <div class="card-header">
                                                  <div class="card-title">
                                                      Utilities
                                                  </div>
                                              </div>
                                              <div class="card-body">
                                                  <dl class="row">
                                                      <dt class="col-5">Electricity Bill:</dt>
                                                      <dd class="col-7">No Data
                                                      </dd>
                                                      <dt class="col-5">Water Bill:</dt>
                                                      <dd class="col-7">No Data
                                                      </dd>
                                                      <dt class="col-5">Internet Bill:</dt>
                                                      <dd class="col-7">No Data
                                                      </dd>
                                                  </dl>
                                              </div>
                                          </div>
                                      </Tab>
                                      <Tab eventKey="submitted-documents" title="Submitted Documents">
                                          <dl class="row ps-3">
                                              <dt class="col-5">Last 3 month Salary Slip:
                                              </dt>
                                              <dd class="col-7">
                                                  <a href="#" target="_blank">No Data.pdf</a>
                                              </dd>
                                          </dl>
                                      </Tab>
                                  </Tabs>
                              </Card>
                          </div>
                          <div class="col-md-3">
                              <Card style={
                                  {
                                      textAlign: 'left',
                                      position: 'relative',
                                      display: 'flex',
                                      flexDirection: 'column',
                                      wordWrap: 'break-word'
                                  }
                              }>
                                  <div class="card-body">
                                      <div class="form-group mb-3">
                                          <label class="form-label">Approval Status
                                              <span class="badge bg-info">
                                                  {status}
                                              </span>
                                          </label>
                                          <select class="form-select" onChange={
                                          (e) => setStatus(e.target.value.slice(0,8))}>
                                              <option value="Pending" selected>
                                                  Pending
                                              </option>
                                              <option value="Verified (Sent for Approval)">
                                                  Verified (Sent for Approval)
                                              </option>
                                              <option value="Approved (Campaign Not Started)">
                                                  Approved (Campaign Not Started)
                                              </option>
                                              <option value="Live">
                                                  Live
                                              </option>
                                              <option value="Rejected">
                                                  Rejected
                                              </option>
                                          </select>
                                      </div>
            
                                      <Button variant="primary col-12" onClick={handleSubmit}>Update</Button>
                                      {' '} </div>
                              </Card>
                          </div>
                      </div>
                  </div>
              
        </div>
     
    );
}
