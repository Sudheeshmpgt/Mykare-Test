import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Dashboard() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.userData.value);

  useEffect(()=>{
    const token = localStorage.getItem("usertoken")
    if(!token){
      navigate('/')
    }
  },[])

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
          Welcome to dashboard {user[0].name}
        </Typography>
      </Box>
    </Grid>
  );
}

export default Dashboard;
