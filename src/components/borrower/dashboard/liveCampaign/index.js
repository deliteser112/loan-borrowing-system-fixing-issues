import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Progress } from "react-sweet-progress";

import Typography from "@mui/material/Typography";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider
} from "@mui/material/styles";

import imgFloat from "../../../images/house.svg";
import loanAmt from "../../../images/loan-amount.png";
import period from "../../../images/period.png";
import loanType from "../../../images/loan-type.png";

import "react-sweet-progress/lib/style.css";

import "./styles.css";


let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Live() {
  const divShadow = {
    backgroundColor: "white",
    boxShadow: "1px 2px 9px #808080",
    marginTop: "1em",
    padding: "1em"
  };
  const liveContents = {
    boxShadow: "1px 2px 9px #808080",
    backgroundColor: "#fce882",
    marginTop: "1em",
    padding: "1em"
  };
  return (
    <Grid fluid className="live--content">
      <Row style={divShadow}>
        <Col xs={12} md={8} className="content">
          <ThemeProvider theme={theme}>
            <Typography variant="h5">
              <strong>Loan Amount</strong>
            </Typography>
          </ThemeProvider>
          <div style={{ margin: "1em" }}>
            <div
              style={{
                backgroundColor: "green",
                display: "inline",
                borderRadius: "5px",
                padding: "5px"
              }}
            >
              <ThemeProvider theme={theme}>
                <Typography variant="p" color="white">
                  <strong>RM0</strong>
                </Typography>
              </ThemeProvider>
            </div>
            <div style={{ display: "inline", padding: "5px" }}>
              <ThemeProvider theme={theme}>
                <Typography variant="p">out of RM(Loan Amount)</Typography>
              </ThemeProvider>
            </div>
          </div>
          <div style={{ margin: "1em" }}>
            <ThemeProvider theme={theme}>
              <Typography variant="p">
                <strong>Total Funds Raised</strong>
              </Typography>
            </ThemeProvider>
          </div>
          <div style={{ margin: "1em" }}>
            <Progress percent={0} />
          </div>
          <div style={{ margin: "1em" }}>
            <ThemeProvider theme={theme}>
              <Typography variant="p">Days to go: 30</Typography>
            </ThemeProvider>
          </div>
        </Col>
        <Col xs={12} md={4} className="content">
          <img
            className="animated-image"
            src={imgFloat}
            alt="Live Campaign"
            width="100%"
          />
        </Col>
      </Row>

      <Row around="xs">
        <Col xs={12} md={7} lg={3} style={liveContents}>
          <Row>
            <Col xs={7} lg={8} className="small--content">
              <div className="section">
                <ThemeProvider theme={theme}>
                  <Typography variant="h6">Loan Amount</Typography>
                </ThemeProvider>
                <div>
                  <ThemeProvider theme={theme}>
                    <Typography variant="h6">
                      <strong>Loan Amount</strong>
                    </Typography>
                  </ThemeProvider>
                </div>
              </div>
            </Col>
            <Col xs={5} lg={4}>
              <img src={loanAmt} alt="Live Campaign" width="100%" />
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={7} lg={3}  style={liveContents}>
          <Row>
            <Col xs={7} lg={8} className="small--content">
              <div className="section">
                <ThemeProvider theme={theme}>
                  <Typography variant="h6">Tenure Period</Typography>
                </ThemeProvider>

                <div>
                  <ThemeProvider theme={theme}>
                    <Typography variant="h6">
                      <strong>Tenure Period</strong>
                    </Typography>
                  </ThemeProvider>
                </div>
              </div>
            </Col>
            <Col xs={5} lg={4}>
              <img src={period} alt="Live Campaign" width="100%" />
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={7} lg={3} style={liveContents}>
          <Row>
            <Col xs={7} lg={8} className="small--content">
              <div className="section">
                <ThemeProvider theme={theme}>
                  <Typography variant="h6">Loan Type</Typography>
                </ThemeProvider>
                <div>
                  <ThemeProvider theme={theme}>
                    <Typography variant="h6">
                      <strong>Loan Type</strong>
                    </Typography>
                  </ThemeProvider>
                </div>
              </div>
            </Col>
            <Col xs={5} lg={4}>
              <img src={loanType} alt="Live Campaign" width="100%" />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row around="xs">
        <Col xs={12} lg={3} style={liveContents} className="small--content">
          <div className="section">
            <ThemeProvider theme={theme}>
              <Typography variant="h6">Property Name</Typography>
            </ThemeProvider>
            <div>
              <ThemeProvider theme={theme}>
                <Typography variant="h6">
                  <strong>Loan Amount</strong>
                </Typography>
              </ThemeProvider>
            </div>
          </div>
        </Col>

        <Col xs={12} lg={3} style={liveContents} className="small--content">
          <div className="section">
            <ThemeProvider theme={theme}>
              <Typography variant="h6">Property Type</Typography>
            </ThemeProvider>
            <div>
              <ThemeProvider theme={theme}>
                <Typography variant="h6">
                  <strong>Property Type</strong>
                </Typography>
              </ThemeProvider>
            </div>
          </div>
        </Col>

        <Col xs={12} lg={3} style={liveContents} className="small--content">
          <div className="section">
            <ThemeProvider theme={theme}>
              <Typography variant="h6">Property Address</Typography>
            </ThemeProvider>
            <div>
              <ThemeProvider theme={theme}>
                <Typography variant="h6">
                  <strong>Property Address</strong>
                </Typography>
              </ThemeProvider>
            </div>
          </div>
        </Col>
      </Row>
    </Grid>
  );
}
