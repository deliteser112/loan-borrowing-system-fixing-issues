// import "./styles.css";
import Progress from "./progress";
import Checklist from "./list";
// import Live from "./liveCampaign";
import Navbar from "../kyc/navbar";
import Sidebar from "../kyc/sidebar";
import useAuth from "../../../hooks/useAuth";
import { useState, useEffect } from "react";


export default function App() {

  const { auth } = useAuth();
  const [status, setStatus] = useState('')
  const [bool, setBool] = useState(true)

  

  useEffect( () => {
    async function fetchData() {
      await fetch('http://localhost:5002/kyc/' + auth?.decodedToken?.userId).then((response) => response.json()).then((data) => {
        setStatus(data[0].status);
        console.log('status:' + status)
    }).catch((err) => {
        console.log(err.message);
    });

    }
    fetchData();
    
}, []);


  return (

    


    <div>
      <Navbar/>
      <Sidebar/>
        <div className="main">
             <Progress />
             <Checklist status={status} />
             {/* <Live /> */}
        </div>
     </div>
  );
}
