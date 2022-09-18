import React from 'react'
import ReactDOM from "react-dom";
import Card from "@material-ui/core/Card";

import "./style.css";

const data = [
  {
    name: "Anom",
    dsr: 8.36,
    hasJointApplicant: "No",
    userType: "Borrower",
    kycStatus: "Pending Approval"
  },
  {
    name: "Megha",
    dsr: 20,
    hasJointApplicant: "Yes",
    userType: "Lender",
    kycStatus: "Approved"
  },
  {
    name: "Subham",
    dsr: 24.83,
    hasJointApplicant: "Yes",
    userType: "Coborrower",
    kycStatus: "Pending"
  }
];

export default function Application() {
  return (
    <div className="main">
        <div className="header1">
        <h2>Loan Application</h2>
        <button>Insert New</button>
        </div>
        <div className="row">
        <div className="col-md-9">
            <Card>
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
                        <td>{val.dsr}%</td>
                        <td>{val.hasJointApplicant}</td>
                        <td>{val.userType}</td>
                        <td>
                        <span className="text-success">Approved</span>
                        </td>
                        <td className="text-center">
                        <a href="#">
                            <span>VIEW</span>
                        </a>
                        </td>
                    </tr>
                    );
                })}
                </tbody>
            </table>
            </Card>
        </div>
        <div className="col-md-3">
        <Card>
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
  );
}
