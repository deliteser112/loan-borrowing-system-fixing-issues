import React from 'react'
import Card from "@material-ui/core/Card";
import Button from 'react-bootstrap/Button';
import Sidebar from './sidebar';
import Navbar from './navbar';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Switch,
    Link,
    useParams
} from "react-router-dom";
import "./tabler.min.css"
import "./style.css";

const data = [
  {
    name: "Anom",
    appType: "Individual Application",
    totalApplicants: 2,
    userType: "",
    loanStatus: "Pending Approval"
  },
  {
    name: "Megha",
    appType: "Joint Application",
    totalApplicants: 1,
    userType: "",
    loanStatus: "Approved"
  },
  {
    name: "Subham",
    appType: "Individual Application",
    totalApplicants: 2,
    userType: "",
    loanStatus: "Pending"
  }
];

export default function Application() {
  return (
    <div className="wrapper">
        <Sidebar/>
        <Navbar/>
        <div className="main">         
            <div className="d-print-none">
                <div className="row">
                    <div className="col">
                        <h2 className="pretitle"> Applications Management </h2>
                        <h2 className="page-title"> Loan Application </h2>
                    </div>
                    <div className="col-auto ms-auto d-print-none pb-2">
                    <Button variant="primary">Insert New</Button>{' '}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-9 loantable">
                    <Card style={{ textAlign:'left', position: 'relative', display: 'flex',
                                        flexDirection: 'column' }}>
                    <div class="table-responsive-sm">
                        <table
                            className="table table-striped table-bordered table-vcenter"
                            cellpadding="0"
                            cellspacing="0"
                        >
                            <thead>
                            <tr>
                                <th>CUSTOMER NAME</th>
                                <th>APPLICATION TYPE</th>
                                <th>TOTAL APPLICANTS</th>
                                <th>DATE APPLIED</th>
                                <th>STATUS</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {data.map((val, key) => {
                                return (
                                <tr key={key}>
                                    <td>{val.name}</td>
                                    <td>{val.appType}</td>
                                    <td>{val.totalApplicants}</td>
                                    <td>{val.userType}</td>
                                    <td>
                                    <span className="text-success">Approved</span>
                                    </td>
                                    <td className="text-center">
                                    <Link to="/loan/application_details">
                                        <span>VIEW</span>
                                    </Link>
                                    </td>
                                </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </div>
                   
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card style={{ textAlign:'left', position: 'relative', display: 'flex',
                                        flexDirection: 'column' }}>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <tbody>
                                                        <tr>
                                        <th>Pending</th>
                                        <td>0</td>
                                    </tr>
                                                        <tr>
                                        <th>Verified (sent for approval)</th>
                                        <td>2</td>
                                    </tr>
                                                        <tr>
                                        <th>Approved (campaign not started)</th>
                                        <td>3</td>
                                    </tr>
                                                        <tr>
                                        <th>Pending (prepare pre-acceptance document + deposit)</th>
                                        <td>0</td>
                                    </tr>
                                                        <tr>
                                        <th>Sent for (signing to applicant)</th>
                                        <td>0</td>
                                    </tr>
                                                        <tr>
                                        <th>Signed (pre-acceptance)</th>
                                        <td>0</td>
                                    </tr>
                                                        <tr>
                                        <th>Live</th>
                                        <td>1</td>
                                    </tr>
                                                        <tr>
                                        <th>Completed</th>
                                        <td>0</td>
                                    </tr>
                                                        <tr>
                                        <th>Signed [loan agreement and SNP]</th>
                                        <td>0</td>
                                    </tr>
                                                        <tr>
                                        <th>Rejected</th>
                                        <td>5</td>
                                    </tr>
                                                    </tbody>
                            </table>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    </div>
  );
}
