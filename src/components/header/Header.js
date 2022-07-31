import { Box, Button, Container, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/userData";

const getDataFromLS = () => {
  const data = localStorage.getItem("userList");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

function Header() {
  const navigate = useNavigate();
  const [users, setUsers] = useState(getDataFromLS());
  const [token, setToken] = useState("")
  const dispatch = useDispatch()

  useEffect(() => {
    const data = localStorage.getItem("userList");
    const adminData = JSON.parse(data);
    const admin = adminData?.filter((data) => data.email === "admin");

    if (admin?.length === 0) {
      let adminUser = {
        id:"admin101",
        email: "admin",
        role: "admin",
        password: "admin",
      };
      setUsers([...users, adminUser]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userList", JSON.stringify(users));
  }, [users]);

  useEffect(()=>{
    const userToken = localStorage.getItem("usertoken") 
    setToken(userToken)
  },[])

  const handleJoinNow = () => {
    navigate("/register");
  };

  const handleSignIn = () => {
    navigate("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("usertoken")
    dispatch(login(""))
    navigate('/')
  }

  return (
    <Box sx={{ width: "100%", position: "fixed", zIndex: "1" }}>
      <Box sx={{ backgroundColor: "#80c7ff" }}>
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography
              noWrap
              component="a"
              href="/"
              sx={{
                //   mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "Abril Fatface, cursive",
                fontSize: "2.3rem",
                fontWeight: 700,
                letterSpacing: "0.15rem",
                color: "inherit",
                textDecoration: "none",
                textShadow:
                  "2px 7px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)",
              }}
            >
              CLIENT
            </Typography>
            <Typography
              variant="p"
              noWrap
              component="a"
              href=""
              sx={{
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "Abril Fatface, cursive",
                fontSize: "1.4rem",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              CLIENT
            </Typography>
            {!token ? (
              <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "flex" } }}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  onClick={handleJoinNow}
                  sx={{
                    ml: 2,
                    color: "text.primary",
                    display: "block",
                    fontSize: {
                      xs: "1rem",
                      md: "1rem",
                    },
                  }}
                >
                  Sign Up
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  onClick={handleSignIn}
                  sx={{
                    ml: 2,
                    color: "text.primary",
                    display: "block",
                    fontSize: {
                      xs: "1rem",
                      md: "1rem",
                    },
                  }}
                >
                  Sign In
                </Button>
              </Box>
            ) : (
              <Button
                variant="contained"
                color="secondary"
                size="small"
                onClick={handleLogout}
                sx={{
                  ml: 2,
                  color: "text.primary",
                  display: "block",
                  fontSize: {
                    xs: "1rem",
                    md: "1rem",
                  },
                }}
              >
                Logout
              </Button>
            )}
          </Toolbar>
        </Container>
      </Box>
    </Box>
  );
}

export default Header;
