import React from "react";
import Form1 from "./kyc/kycStep1";
import Form2 from "./kyc/form2";
import Form3 from "./kyc/form3";
import Form4 from "./kyc/form3";

function borrower() {
    return (
      <div className="App">
        <Form1 />
        <Form2 />
        <Form3 />
        <Form4 />

      </div>
    );
  }
  
export default borrower;