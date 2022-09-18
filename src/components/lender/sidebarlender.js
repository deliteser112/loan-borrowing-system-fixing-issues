import React from "react";
// import "./style.css";
// import "../../../App.css";
// import Form from "react-bootstrap/Form";
// import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
// import Row from "react-bootstrap/Row";
// import InputGroup from "react-bootstrap/InputGroup";
// import user from '../../images/user-profile.png';
import sideBarPic from '../images/business-3d-325.png';
import logo from '../images/newnewlogo.png';
// import info from '../../images/identification.svg';
// import commitment from '../../images/commitment.svg';
// import docs from '../../images/documents.svg';
import {useNavigate} from "react-router-dom";

const SidebarLender = () => {

    let navigate = useNavigate();
    return (
        <div>
            <aside className="Sidebar">
                <div className="side-container">
                    <img src={logo}
                        className="logo"></img>


                    <button onClick={
                            () => navigate("../lender/summary")
                        }
                        className="links">
                        <i class="fa fa-home" aria-hidden="true"></i>Details Summary</button>
                    <br></br>
                    <button onClick={
                            () => navigate('../lender/home')
                        }
                        className="links">
                        <i class="fa fa-user" aria-hidden="true"></i>Loans</button>
                    
                    <img src={sideBarPic}
                        className="SideBarPic"></img>
                    <div className="ContactUs">
                        <h5>Having issues?</h5>
                        <small>We'd love to hear from you</small>
                        <br></br>
                        <button className="contact-us">Contact us</button>
                    </div>
                </div>
            </aside>
        </div>
    );
}

export default SidebarLender;
