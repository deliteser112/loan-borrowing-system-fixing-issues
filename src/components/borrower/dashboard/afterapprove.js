import Live from "./liveCampaign";
import Progress from "./progress";
import Navbar from "../kyc/navbar";
import Sidebar from "../kyc/sidebar";



const AfterApprove = () => {
    return ( 

   <div>
         <Navbar/>
         <Sidebar/>
         <div className="main">
         <Progress/>
         <Live />
     </div>
   </div>
     );
}
 
export default AfterApprove;