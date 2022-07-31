import { Box, Grid, Typography } from "@mui/material";
import React from "react";

function Dashboard() {
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
          Welcome to dashboard Sudheesh
        </Typography>
      </Box>
    </Grid>
  );
}

export default Dashboard;
