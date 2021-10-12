import React from "react";
import { Link, useHistory } from "react-router-dom";
import { AppBar, Button } from "@mui/material";
import GlobalStyles from "../assets/GlobalStyles";

const NavBar = () => {
  const history = useHistory();

  const authToken = localStorage.getItem("AUTH_TOKEN");

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
        {authToken ? (
          <Button
            style={{
              background: GlobalStyles.pewterBlue,
              color: GlobalStyles.isabelline,
              marginRight: "10px",
              padding: "10px 15px",
              borderRadius: "10px",
              textDecoration: "none",
            }}
            onClick={() => {
              localStorage.removeItem("AUTH_TOKEN");
              history.push("/");
            }}
          >
            Logout
          </Button>
        ) : (
          <div>
            <Link
              to="/login"
              style={{
                background: GlobalStyles.pewterBlue,
                color: GlobalStyles.isabelline,
                marginRight: "10px",
                padding: "10px 15px",
                borderRadius: "10px",
                textDecoration: "none",
              }}
            >
              Login
            </Link>
            <Link
              to="/signup"
              style={{
                background: GlobalStyles.pewterBlue,
                color: GlobalStyles.isabelline,
                marginRight: "10px",
                padding: "10px 15px",
                borderRadius: "10px",
                textDecoration: "none",
              }}
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </AppBar>
  );
};

export default NavBar;
