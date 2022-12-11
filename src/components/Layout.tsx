import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AppBar, Button, Container, CssBaseline, Toolbar } from "@mui/material";

function Layout() {
  const navigate = useNavigate();

  return (
    <>
      <AppBar position="static">
        <CssBaseline />
        <Toolbar>
          <Button color="inherit" onClick={() => navigate("/customers")}>
            Customers
          </Button>
          <Button color="inherit" onClick={() => navigate("/trainings")}>
            Trainings
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default Layout;
