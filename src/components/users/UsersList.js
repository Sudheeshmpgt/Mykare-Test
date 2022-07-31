import React, { useEffect, useState } from "react";
import './scroll.css'
import { DataGrid } from "@mui/x-data-grid";
import {
  Box,
  Grid,
  Paper,
  TableContainer,
} from "@mui/material";
import { useNavigate } from "react-router-dom";


function UsersList() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([])

  useEffect(()=>{
    const token = localStorage.getItem("usertoken")
    const userDatas = localStorage.getItem("userList")
    const parsedData = JSON.parse(userDatas)
    if(!token){
      navigate('/')
    }else{
      setUsers(parsedData)
    }
  },[navigate])
  
    const columns = [
      {
        field: "id",
        headerClassName: "super-app-theme--header",
        headerName: "ID",
        width: 90,
      },
      {
        field: "name",
        headerClassName: "super-app-theme--header",
        headerName: "Name",
        width: 290,
        editable: true,
      },
      {
        field: "email",
        headerClassName: "super-app-theme--header",
        headerName: "Email",
        width: 290,
        editable: true,
      },
      {
        field: "phone",
        headerClassName: "super-app-theme--header",
        headerName: "Phone",
        width: 290,
        editable: true,
      },
    ];
  
  
    const rows = users.map((data, index) => ({
      id: index + 1,
      name: data.name,
      email: data.email,
      phone: data.phone,
    }));
  
    return (
      <Grid container>
        <Box width='100%' sx={{mt:{sm:'5%', xs:'15%'}, ml:'auto', mr:'auto'}}> 
          <TableContainer
            className="scrollbar-hidden"
            component={Paper}
            style={{
              width:"75%",
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