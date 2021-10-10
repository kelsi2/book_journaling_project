import React from "react";
import { AppBar, Button, Box } from "@mui/material";
import "../styles/navbarStyles.css";
import GlobalStyles from "../assets/GlobalStyles";

const NavBar = () => {
  return (
    <AppBar
      m={1}
      className="appbar"
      style={{
        background: GlobalStyles.rosyBrown,
        justifyContent: "center",
        alignItems: "flex-end",
        height: "50px",
      }}
    >
      <div style={{ display: "flex" }}>
        <Button
          className="btn"
          style={{
            background: GlobalStyles.pewterBlue,
            color: GlobalStyles.isabelline,
            marginRight: "10px",
          }}
          variant="contained"
        >
          Sign Up
        </Button>
        <Button
          className="btn"
          style={{
            background: GlobalStyles.pewterBlue,
            color: GlobalStyles.isabelline,
            marginRight: "10px",
          }}
          variant="contained"
        >
          Login
        </Button>
      </div>
    </AppBar>
  );
};

export default NavBar;
