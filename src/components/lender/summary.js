import "./style.css";
import Button from "react-bootstrap/Button";
import React from "react";
import Table from "react-bootstrap/Table";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import Navbar from "./Navbar";
import SidebarLender from "./sidebarlender";
import useAuth from "../../hooks/useAuth";

const LenderSummary = () => {

    const {auth} = useAuth();
    let navigate = useNavigate();
    var showdate = new Date();
    var displaytodaydate = showdate.getDate() + '/' + showdate.getMonth() + '/' + showdate.getFullYear();

    const [name, setName] = useState('');
    const [gender, setGender] = useState('M');
    const [nric, setNric] = useState(0);
    const [dob, setDob] = useState("2000-01-01");
    const [doe, setDoe] = useState("2000-01-01");
  


    // useEffect(() => {
    //     fetch('http://localhost:5002/kyc/getid').then((response) => response.json()).then((data) => {
    //         setId(data[0].id);
    //     }).catch((err) => {
    //         console.log(err.message);
    //     });
    // }, []);

    useEffect(() => {
        fetch('http://localhost:5002/kyc/' + auth?.decodedToken?.userId).then((response) => response.json()).then((data) => {
            setName(data[0].full_name);
            setGender(data[0].gender == 'M' || data[0].gender == 'm' ? 'Male' : 'Female');
            setNric(data[0].nric);
            setDob((data[0].dob).slice(0, 10));
            setDoe(data[0].doe.slice(0, 10));
        }).catch((err) => {
            console.log(err.message);
        });
    }, []);

    return (


        <div>
            <Navbar/>
            <SidebarLender/>
            <div className="main">
                <div className="summary-container">
                    <Table className="summary-table">
                        <thead className="summary-header">
                            <td> {" "}
                                <b>KYC - Step 1: Profile
                                </b>
                            </td>
                            <td> {" "}
                                <i class="fa fa-pencil-square" aria-hidden="true">
                                    {" "}
                                    <Link to="/kyc_form1" className="update-button">Update</Link>
                                </i>
                            </td>
                        </thead>

                        <tr>
                            <td className="left-cell">salutation</td>
                            <td>{
                                gender == 'Male' ? 'Mr' : 'Ms'
                            }</td>
                        </tr>

                        <tr>
                            <td className="left-cell">Full Name (According to NRIC)</td>
                            <td>{name}</td>
                        </tr>

                        <tr>
                            <td className="left-cell">NRIC number</td>
                            <td>{nric}</td>
                        </tr>

                        <tr>
                            <td className="left-cell">Date Of Birth</td>
                            <td>{dob}</td>
                        </tr>

                        <tr>
                            <td className="left-cell">Gender</td>
                            <td>{gender}</td>
                        </tr>

                        <tr>
                            <td className="left-cell">Consent Of Experian</td>
                            <td>{doe}</td>
                        </tr>

                        <tr>
                            <td className="left-cell">NRIC Front</td>
                            <td>fileA.jpg</td>
                        </tr>
                        <tr>
                            <td className="left-cell">NRIC Back</td>
                            <td>fileB.jpg</td>
                        </tr>
                        <tr>
                            <td className="left-cell">Proof Of Residency</td>
                            <td>fileC.jpg</td>
                        </tr>
                    </Table>
                </div>

            
                <div className="button">
                    <Button onClick={
                            () => navigate('../lender/home')
                        }
                        variant="warning"
                        type="submit">
                        Submit KYC
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default LenderSummary;
