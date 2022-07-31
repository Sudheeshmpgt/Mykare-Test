import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState({})

  useEffect(()=>{
    const token = localStorage.getItem("usertoken")
    const userData = localStorage.getItem("userData")
    const parsedData = JSON.parse(userData)
    if(!token){
      navigate('/')
    }else{
      setUser(parsedData)
    }
  },[navigate])

  return (
    <Grid container sx={{zIndex:1}}>
      <Box width="100%">
        <Typography
          fontFamily="Oswald, sans-serif"
          color="#FFFF"
          textAlign='center'
          fontSize={{
            xs: "1.3rem",
            md: "1.9rem",
          }}
          sx={{ textShadow: "2px 2px 4px #000000", mt:{sm:'15%', xs:'45%'}}}
        >
          Welcome to dashboard {user.name}
        </Typography>
      </Box>
    </Grid>
  );
}

export default Dashboard;
