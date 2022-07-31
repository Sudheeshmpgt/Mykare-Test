import React, { useEffect, useState } from "react";
import './scroll.css'
import { DataGrid } from "@mui/x-data-grid";
import {
  Box,
  Grid,
  IconButton,
  Paper,
  TableContainer,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import Toast from "../sweetalert/SweetAlert";


function UsersList() {
   
    const handleCloseClick = () => {
    //   navigate("/home");
    };
  
    const columns = [
      {
        field: "id",
        headerClassName: "super-app-theme--header",
        headerName: "ID",
        width: 85,
      },
      {
        field: "name",
        headerClassName: "super-app-theme--header",
        headerName: "Name",
        width: 250,
        editable: true,
      },
      {
        field: "email",
        headerClassName: "super-app-theme--header",
        headerName: "Email",
        width: 250,
        editable: true,
      },
      {
        field: "phone",
        headerClassName: "super-app-theme--header",
        headerName: "Phone",
        width: 250,
        editable: true,
      },
    ];
  
  
    // const rows = request.map((data, index) => ({
    //   id: 1,
    //   name: "sudheesh",
    //   email: "ss@gmail.com",
    //   phone: 1234567890,
    // }));

    const rows = {
        id: 1,
        name: "sudheesh",
        email: "ss@gmail.com",
        phone: 1234567890,
      };
  
    return (
      <Grid container>
        <Box width='100%' sx={{mt:'5%', ml:'auto', mr:'auto'}}> 
          <TableContainer
            className="scrollbar-hidden"
            component={Paper}
            style={{
              width: "65%",
              margin: "20px auto",
              height: 490,
              overflow: "scroll",
            }}
          >
            <Box
              sx={{
                height: 490,
                width: 1,
                "& .super-app-theme--header": {
                  backgroundColor: "primary.dark",
                },
              }}
            >
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
              ></DataGrid>
            </Box>
          </TableContainer>
        </Box>
      </Grid>
    );
  }

export default UsersList