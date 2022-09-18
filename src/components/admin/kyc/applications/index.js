import React from "react";
import Sidebar from "../../loan_application/applications/sidebar"
import Navbar from "../../loan_application/applications/navbar"
import "bootstrap/dist/css/bootstrap.min.css";

import BTable from "react-bootstrap/Table";

import { useTable } from "react-table";

import makeData from "./userData";

import { createTheme,
    ThemeProvider,
    Typography,
    responsiveFontSizes } from '@mui/material';

import "../style.css";

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data
  });

  // Render the UI for your table
  return (
    <BTable striped bordered responsive {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </BTable>
  );
}

function Applications() {

    let responsive = createTheme();
    responsive = responsiveFontSizes(responsive);

    const divShadow = {
        boxShadow: "1px 2px 9px #808080",
        marginTop: "1em",
        padding: "1em"
    };

    const columns = React.useMemo(
        () => [
        {
            Header: "Customer Name",
            accessor: "custName",
            headerAlign: 'left'
        },
        {
            Header: "DSR",
            accessor: "dsr"
        },
        {
            Header: "Has Joint Applicant",
            accessor: "applicationType",
            Cell: ({ row }) => (
            <span>{row.original.applicationType === 0 ? "No" : "Yes"}</span>
            )
        },
        {
            Header: "User Type",
            accessor: "userType"
        },
        {
            Header: "KYC Status",
            accessor: "kycStatus",
            Cell: ({ row }) => (
            <span
                style={{
                color:
                    row.original.kycStatus === "Approved"
                    ? "green"
                    : row.original.kycStatus === "Rejected"
                    ? "red"
                    : "blue"
                }}
            >
                {row.original.kycStatus}
            </span>
            )
        },
        {
            Header: "Action",
            accessor: "action",
            Cell: ({ row }) => <a href="#">{row.original.action}</a>
        }
        ],
        []
    );

    const data = React.useMemo(() => makeData(20), []);

    return (


     <div>
      {/* <Navbar/> */}
      <Sidebar/>
       <div className="main">
          <div className="kyc--content">
              <ThemeProvider theme={responsive}>                
                  <div>
                      <Typography align="left">APPLICATIONS MANAGEMENT</Typography>
                      <Typography variant="h4" align="left">KYC Reviews Pending</Typography>
                  </div>
                  <div style={divShadow}>            
                      <Table columns={columns} data={data} />
                  </div>
              </ThemeProvider>
          </div>
       </div>
     </div>
    );
}

export default Applications;
