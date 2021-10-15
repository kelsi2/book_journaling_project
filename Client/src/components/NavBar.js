import React from "react";
import { Link, useHistory } from "react-router-dom";
import { AppBar } from "@mui/material";
import GlobalStyles from "../assets/GlobalStyles";
import AuthContext from '../context/AuthContext';

const NavBar = () => {
  const history = useHistory();

  const authToken = localStorage.getItem("AUTH_TOKEN");

  return (
    <AuthContext.Consumer>
      {({ loggedIn, setLoggedIn }) => (
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
            {authToken && loggedIn ? (
              <button
                style={{
                  background: GlobalStyles.pewterBlue,
                  color: GlobalStyles.isabelline,
                  marginRight: "10px",
                  padding: "10px 15px",
                  borderRadius: "10px",
                  textDecoration: "none",
                  border: "none",
                  fontSize: "inherit",
                  cursor: "pointer"
                }}
                onClick={() => {
                  localStorage.removeItem("AUTH_TOKEN");
                  setLoggedIn(false);
                  history.goBack();
                }}
              >
                Logout
              </button>
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
      )}
    </AuthContext.Consumer>
  );
};

export default NavBar;
