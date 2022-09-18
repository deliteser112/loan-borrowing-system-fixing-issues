import { Link } from "react-router-dom";
import logo from "../../../images/Logo/HC_dave2.png"
import "./tabler.min.css"
import {AiOutlineHome} from "react-icons/ai"
export default function Sidebar() {
    return (
      
        <div className="navbar-admin">
        <aside>

            <img src={logo} alt="logo" className="logo-pic"/>
            <ul className="side-menu-admin">
        <li><Link className="list-side" to="/admin_kyc"><AiOutlineHome/>    Admin KYC</Link></li>
        <li><Link className="list-side" to="/admin/application"><AiOutlineHome/>    Applications</Link></li>
        <li><Link className="list-side" to="/admin/verified_application"><AiOutlineHome/>    Verified Applcications</Link></li>
        <li><Link className="list-side" to="/admin/application_details"><AiOutlineHome/>    Application Details</Link></li>
        <li><Link className="list-side" to="/admin/loan"><AiOutlineHome/>    Loans</Link></li>
        

            </ul>
        </aside>
    </div>

    );
}