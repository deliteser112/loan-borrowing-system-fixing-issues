import "./style.css";
import Button from "react-bootstrap/Button";
import React from "react";
import { Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import Navbar from "./kyc/navbar";
import Sidebar from "./kyc/sidebar";
import { FiEdit3 } from "react-icons/fi";
import {Link} from "react-router-dom";

const SummaryForms = () => {
  let navigate = useNavigate();
  return (

<div>
  
      <Navbar/>
      <Sidebar/>
      <div className="main">
          
        <div className="summary-container">
          <Table className="summary-table">
            <thead className="summary-header">
              <td>
                {" "}
                <b>Identification</b>
              </td>
              <td>
                {" "}
                  <Link to="/identification" className="update-button">
              <FiEdit3 />
                    Update
                  </Link>
               
              </td>
            </thead>
  
            <tr>
              <td className="left-cell">** Are you working in a professional line **</td>
              <td>No</td>
            </tr>
  
            <tr>
              <td className="left-cell">** Your current job is **</td>
              <td>Doctor</td>
            </tr>
  
            <tr>
              <td className="left-cell">Facebook or LinkedIn profile</td>
              <td>www.facebook.com</td>
            </tr>
  
         
          </Table>
        </div>
  
        <div className="summary-container">
          <Table className="summary-table">
            <thead className="summary-header">
              <td>
                {" "}
                <b>Income</b>
              </td>
              <td>
                {" "}
              
                  {" "}
                  <Link to="/income_details" className="update-button">
                  <FiEdit3 />
                    Update
                  </Link>
               
              </td>
            </thead>
  
            <tr>
              <td className="left-cell">Monthly Gross Salary</td>
              <td>SGD59000</td>
            </tr>
  
            <tr>
              <td className="left-cell">Company Name</td>
              <td>HomeCrowd</td>
            </tr>
  
            <tr>
              <td className="left-cell">Allowance/Bonus (if applicable)</td>
              <td>Cheras</td>
            </tr>
  
            <tr>
              <td className="left-cell">Length Of Employment (years)</td>
              <td>5</td>
            </tr>
  
            <tr>
              <td className="left-cell"> Last 3 Months Salary Slip </td>
              <td>filename.pdf</td>
            </tr>
  
            <tr>
              <td className="left-cell">EA Form</td>
              <td>filename.pdf</td>
            </tr>
  
            <tr>
              <td className="left-cell">KWSP</td>
              <td>filename.pdf</td>
            </tr>
  
           
          </Table>
        </div>
  
        <div className="summary-container">
          <Table className="summary-table">
            <thead className="summary-header">
              <td>
                {" "}
                <b>Commitment</b>
              </td>
              <td>
                {" "}
              
                  {" "}
                  <Link to="/other_financing_details" className="update-button">
                  <FiEdit3 />
                    Update

                  </Link>
               
              </td>
            </thead>
  <tr className="left-cell">Credit Cards</tr>
            <tr>
              <td className="left-cell">Type</td>
              <td>Credit Card</td>
            </tr>
  
            <tr>
              <td className="left-cell">Outstanding Balance</td>
              <td>SGD55000</td>
            </tr>
  
            <tr>
              <td className="left-cell">Bank Name</td>
              <td>RHB</td>
            </tr>
  
            <tr>
              <td className="left-cell">Monthly Repayment</td>
              <td>SGD10000</td>
            </tr>
  <tr className="left-cell">Loans</tr>
            <tr>
              <td className="left-cell">Type</td>
              <td>Car Loan</td>
            </tr>
  
            <tr>
              <td className="left-cell">Monthly Repayment</td>
              <td>SGD12000</td>
            </tr>
  
            <tr>
              <td className="left-cell">Source Of Loan (bank name, loan provider, etc)</td>
              <td>Maybank</td>
            </tr>
  <tr className="left-cell">Utilities</tr>
            <tr>
              <td className="left-cell">Electricity Bill</td>
              <td>SGD100</td>
            </tr>
  
            <tr>
              <td className="left-cell">Water Bill</td>
              <td>SGD15</td>
            </tr>
  
            <tr>
              <td className="left-cell">Internet Bill</td>
              <td>SGD159</td>
            </tr>
  <tr className="left-cell">Utilities Uploads</tr>
  
            <tr>
              <td className="left-cell">Utility Bill</td>
              <td>filename.pdf</td>
            </tr>
            <tr>
              <td className="left-cell">Credit Card Statement</td>
              <td>filename.pdf</td>
            </tr>
  
            <tr>
              <td className="left-cell">Rental Fee</td>
              <td>filename.pdf</td>
            </tr>
          </Table>
        </div>
  
        <div className="summary-container">
          <Table className="summary-table">
            <thead className="summary-header">
              <td>
                {" "}
                <b>Mortgage Info</b>
              </td>
              <td>
                {" "}
              
                  {" "}
                  <Link to="/mortgage_info" className="update-button">
                  <FiEdit3 />
                    Update
                  </Link>
               
              </td>
            </thead>
  <tr className="left-cell">Loan Information</tr>
  
            <tr>
              <td className="left-cell">
               Loan Amount (SGD):
              </td>
              <td>SGD76,000.00</td>
            </tr>
  
            <tr>
              <td className="left-cell">
               Tenure
              </td>
              <td>30 years</td>
            </tr>
  
            <tr>
              <td className="left-cell">
               Source of D/Payment/Deposit:
              </td>
              <td>Savings</td>
            </tr>
  
  <tr className="left-cell">Property Information</tr>
  
            <tr>
              <td className="left-cell">
               Type
              </td>
              <td>Single Storey terrace</td>
            </tr>
  
            <tr>
              <td className="left-cell">
               Project Name
              </td>
              <td>Lani Summers</td>
            </tr>
  
            <tr>
              <td className="left-cell">
               Property Developer Name
              </td>
              <td>Mah sing</td>
            </tr>
  
            <tr>
              <td className="left-cell">
               Number of Bedrooms
              </td>
              <td>3</td>
            </tr>
  
            <tr>
              <td className="left-cell">
               Property Listing Link
              </td>
              <td>www.propertyleisting.com</td>
            </tr>
  
            <tr>
              <td className="left-cell">
               Estimated Market Value
              </td>
              <td>SGD650,000.00</td>
            </tr>
  
            <tr>
              <td className="left-cell">
               Purchase Price 
              </td>
              <td>SGD650,000.00</td>
            </tr>
  
            <tr>
              <td className="left-cell">
               Address
              </td>
              <td>No2 jalan kia peng</td>
            </tr>
  
            <tr>
              <td className="left-cell">
               City
              </td>
              <td>Kuala Lumpur</td>
            </tr>
  
            <tr>
              <td className="left-cell">State</td>
              <td>Wilayah persekutuan Kuala Lumpur</td>
            </tr>
  
            <tr>
              <td className="left-cell">Postcode</td>
              <td>55000</td>
            </tr>
  
            <tr>
              <td className="left-cell">Freehold/Leasehold</td>
              <td>Freehold</td>
            </tr>
  
  <tr className="left-cell">Uploads</tr>
  
            <tr>
              <td className="left-cell">Property Booking Receipt</td>
              <td>filename.pdf</td>
            </tr>
  
            <tr>
              <td className="left-cell">S&p Agreement</td>
              <td>filename.pdf</td>
            </tr>
  
  
  
          </Table>
  </div>
          <div className="summary-container">
          <Table className="summary-table">
            <thead className="summary-header">
              <td>
                {" "}
                <b>Supplementary Uploads</b>
              </td>
              <td>
                {" "}
              
                  {" "}
                  <Link to="/documents" className="update-button">
                  <FiEdit3 />
                    Update
                  </Link>
               
              </td>
            </thead>
  
            <tr>
              <td className="left-cell">
               Highest Educational Certificate
              </td>
              <td>filename.pdf</td>
            </tr>
  
            <tr>
              <td className="left-cell">
               Wedding Certificate
              </td>
              <td>filename.pdf</td>
            </tr>
        </Table>
        </div>
  
      
        <div className="button">
          <Button  onClick={()=>navigate("/after-submit")}  variant="warning" type="submit">
            Submit Application
          </Button>
      </div>
  
      </div>
</div>
  );
};

export default SummaryForms;
