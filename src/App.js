import ReactDOM from "react-dom/client";
import { useState, createContext } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Switch,
    Link,
    useParams
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/lender/Navbar";
import Cards from "./components/lender/Cards";
import Application from "./components/admin/loan_application/applications/applications";
import ApplicationDetails from "./components/admin/loan_application/applications/details";
import VerifiedApplication from "./components/admin/loan_application/verified_applications/verified_applications";
import Home from "./components/Home";
import Borrower from "./components/borrower/dashboard";
import Nav from "./components/borrower/kyc/navbar";
import Sidebar from "./components/borrower/kyc/sidebar";
import DSR from "./components/borrower/kyc/dsr";
import Form1 from "./components/borrower/kyc/form1";
import Form2 from "./components/borrower/kyc/form2";
import Form3 from "./components/borrower/kyc/form3";
import Form4 from "./components/borrower/kyc/form4";
// import Progress from "./components/borrower/kyc/progress";
import Identification from "./components/borrower/identification";
import IncomeDetails from "./components/borrower/income";
import OtherFinancingDetails from "./components/borrower/commitments";
import MortgageInfo from "./components/borrower/propertyDetails";
import Docs from "./components/borrower/documents";
import Auth from "./components/auth";
import AdminKYC from "./components/admin/kyc";
import Coborrower from "./components/borrower/coborrower/introduction";
import CoIdentification from "./components/borrower/coborrower/identification";
import CoIncome from "./components/borrower/coborrower/income";
import CoCommitment from "./components/borrower/coborrower/commitment";
import CoDocuments from "./components/borrower/coborrower/documents";
import Summary from "./components/borrower/kyc/summary";
import SummaryForms from "./components/borrower/summaryForms";
import Loan from "./components/admin/loan_application";
import Lenderkyc from "./components/lender/Lenderkyc";
import AfterSubmit from "./components/borrower/dashboard/aftersubmit";
import AfterApprove from "./components/borrower/dashboard/afterapprove";
import BorrowerProfile from "./components/borrower/borrowerprofile";
import LandingPage from "./components/landingpage/landingpage";
import StartBorrowing from "./components/landingpage/startborrowing";
import StartLending from "./components/landingpage/startlending";
import ContactUs from "./components/landingpage/contactus";
import LenderProfile from "./components/lender/lenderprofile";

import LoanForm from "./components/tempForms/LoanForm";
import PropertyForm from "./components/tempForms/propertyForm";
import TempSummaryForms from "./components/tempForms/TempSummary";
import LenderSummary from "./components/lender/summary";
import RequireAuth from "./hooks/RequireAuth";




const ROLES = {
    'borrower': 'borrower',
    'lender': 'lender',
    'admin': 'admin'
  }



function App() {

   


    return (
       
                <Routes>

                    <Route path="/" element={<LandingPage />} /> 
                    <Route path="/start-borrowing" element={<StartBorrowing/>}/>
                    <Route path="/start-lending" element={<StartLending/>}/>
                    <Route path="/contact-us" element={<ContactUs/>}/>
                    <Route path="/auth" element={<Auth/>}/>


                    <Route path="/admin_kyc" element={<AdminKYC/>}/>
                    <Route path="/admin/application" element={<Application/>}/>
                    <Route path="/admin/application_details" element={<ApplicationDetails/>}/>
                    <Route path="/admin/verified_application" element={<VerifiedApplication/>}/> 
                    <Route path="/admin/loan" element={<Loan/>}/>  
                    <Route exact path="/lender/home" element={<Home/>}/> 

                    <Route element={<RequireAuth allowedRoles={[ROLES.borrower]} />}>
                          <Route path="/borrower" element={<Borrower/>}/>
                          <Route path="/kyc_form1" element={<Form1/>}/>
                          <Route path="/kyc_form2" element={<Form2/>}/>
                          <Route path="/kyc_form3" element={<Form3/>}/>
                          <Route path="/kyc_form4" element={<Form4/>}/>
                          <Route path="/summary_forms" element={<SummaryForms/>}/>
                          <Route path="/summary_kyc" element={<Summary/>}/>
                          <Route path="/dsr" element={<DSR/>}/>
                          <Route path="/co-borrower" element={<Coborrower/>}/>
                          <Route path="/co-identification" element={<CoIdentification/>}/>
                          <Route path="/co-income" element={<CoIncome/>}/>
                          <Route path="/co-commitment" element={<CoCommitment/>}/>
                          <Route path="/co-documents" element={<CoDocuments/>}/>
                          <Route path="/borrower-profile" element ={<BorrowerProfile/>}/>
                          <Route path="/identification" element={<Identification/>}/>
                          <Route path="/income_details" element={<IncomeDetails/>}/>
                          <Route path="/other_financing_details" element={<OtherFinancingDetails/>}/>
                          <Route path="/mortgage_info" element={<MortgageInfo/>}/>
                          <Route path="/documents" element={<Docs/>}/>
                          <Route path="/loan/property" element={<PropertyForm/>}/> 
                          <Route path="/loan/loanForm"  element={<LoanForm/>}/>    
                          <Route path="/loan/summary" element={<TempSummaryForms/>}/>  
                          <Route path="/after-submit" element={<AfterSubmit/>}/>
                          <Route path="/after-approve" element={<AfterApprove/>}/>
                    </Route>

                    <Route element={<RequireAuth allowedRoles={[ROLES.lender]} />}>
                         
                          <Route path="/lender-profile" element={<LenderProfile/>} />
                          <Route path="/lender/lender_kyc" element={<Lenderkyc/>}/>
                          <Route path="/lender/summary" element={<LenderSummary/>}/>       
                    </Route>

                    <Route element={<RequireAuth allowedRoles={[ROLES.admin]} />}>
                        
                        
                    </Route>
                   
                    
                    
                                    
                </Routes>
       
       
    );
}

export default App;
