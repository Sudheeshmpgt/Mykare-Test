import {
    Avatar,
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Paper,
    Toolbar,
    Tooltip,
    Typography,
  } from "@mui/material";
  import React from "react";

  function Header() {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleJoinNow = () => {
   
    handleCloseNavMenu();
  };

  const handleSignIn = () => {
   
    handleCloseNavMenu();
  };

  const handleProfile = () => {
    
    handleCloseUserMenu();
  };

  const handleWallet= () => {
    
  };

  const logout = () => {
    // handleCloseUserMenu();
    // dispatch(login(""));
    // dispatch(createPost([]));
    // localStorage.removeItem("usertoken");
    // navigate("/");
  };

  
    let token;
    let user; 

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
                  mr: 2,
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
                  mr: 2,
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
                Spur
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
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Paper
                        sx={{ borderRadius: 7, width: 50, height: 50, zIndex: 1 }}
                      >
                        <Avatar
                          alt="Remy Sharp"
                          src={user?.profileImg}
                          sx={{ width: 50, height: 50 }}
                        />
                      </Paper>
                      <Paper sx={{ width: 50, borderRadius: 3 }}>
                        <Box
                          sx={{
                            ml: -2,
                            mr: 2,
                            width: 55,
                            height: "auto",
                            p: 0.7,
                            backgroundColor: "#cce8ff",
                            borderRadius: 3,
                          }}
                        >
                          <Typography
                            fontWeight={700}
                            fontSize={{ sm: "0.9rem" }}
                            cololr="text.primary"
                          >
                            Me
                          </Typography>
                        </Box>
                      </Paper>
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {user?.interviewer && (
                      <MenuItem >
                        <Typography onClick={handleWallet} textAlign="center">Wallet</Typography>
                      </MenuItem>
                    )}
                    <MenuItem onClick={handleProfile}>
                      <Typography textAlign="center">Profile</Typography>
                    </MenuItem>
                    <MenuItem onClick={logout}>
                      <Typography textAlign="center">logout</Typography>
                    </MenuItem>
                  </Menu>
                </Box>
              )}
            </Toolbar>
          </Container>
        </Box>
      </Box>
    );
  }
  
  export default Header;