import * as React from "react";
import { useEffect, useState } from "react";
import "./styles.css";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import ListButton from "./listButton";
import { useNavigate } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';


export default function Checklist({status}) {

  let navigate = useNavigate();
  
  useEffect(() => {
    

  }, [])

  const divShadow = {
    // boxShadow: "1px 2px 9px #808080",
  
    padding: "2em",
    color : "gray",
  };

const badge = {
  
  textAlign:"left",
  marginLeft: "20px",

};



  return (
    <div>
    <div style={divShadow} className="list">
      <Box sx={{ width: "100%" }}></Box>
      <h4 style={{ float: "left", marginLeft: "10px", marginBottom: "40px" }}>
        Application Checklist
      </h4>
      {/* <div style={badge}>
            <Badge  className="badge" bg="secondary"></Badge>{'  KYC Pending verification'} <br></br>
            <Badge  className="badge" bg="success"></Badge>{'  KYC verified '}
           </div> */}

      <List>
        <ListItem>
          <ListItemText primary="1. KYC" />
          <ListButton
            onClick={() => navigate("/kyc_form1")}
            title="Fill In"
            
          />
        </ListItem>

        <ListItem>
          <ListItemText primary="2. Loan Application" />
          <ListButton
            onClick={() => navigate("/loan/property")}
            title="Fill In"
            disabled
          />
        </ListItem>

        <ListItem>
          <ListItemText primary="3.Loan Summary" />
          <ListButton
            onClick={() => navigate("/loan/summary")}
            title="Fill In"
          />
        </ListItem>
      </List>
    </div>
  </div>
  );
}
