import * as React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import StepConnector, {
  stepConnectorClasses
} from "@mui/material/StepConnector";



const Connector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)"
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4"
    }
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4"
    }
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1
  }
}));

const StepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "#784af4"
  }),
  "& .StepIcon-completedIcon": {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18
  },
  "& .StepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor"
  }
}));



function StepIcon(props) {
  const { active, completed, className } = props;

  return (
 
      <StepIconRoot ownerState={{ active }} className={className}>
        {completed ? (
          <Check className="StepIcon-completedIcon" />
        ) : (
          <div className="StepIcon-circle" />
        )}
      </StepIconRoot>
 
  );
}

const steps = [
  "Start Here",
  "KYC Verified",
  "Processing Loan Application",
  "Crowdfunding Campaign",
  
];

export default function Progress() {

  

  const divShadow = {
    backgroundColor: "white",
    // boxShadow: "1px 2px 9px #808080",
    padding: "2em",
    marginLeft: "40px",
    marginRight: "40px",
    border: "1px rgb(225,225,225) solid"
  };

  return (
    <div style={divShadow}>
      <Stack sx={{ width: "100%" }} spacing={4}>
        <Stepper alternativeLabel activeStep={0} connector={<Connector />}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={StepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Stack>
    </div>
  );
}
