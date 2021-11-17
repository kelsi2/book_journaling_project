import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";
import TextField from "@mui/material/TextField";
import GlobalStyles from "../assets/GlobalStyles";
import AuthContext from "../context/AuthContext";

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const Login = () => {
  const [login] = useMutation(LOGIN, {
    onCompleted(data) {
      localStorage.setItem("AUTH_TOKEN", data.login.token);
      history.goBack();
    },
  });

  const history = useHistory();

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false)

  return (
    <AuthContext.Consumer>
      {({ setLoggedIn }) => (
        <div>
          <h1
            style={{
              margin: "10px",
            }}
          >
            Login
          </h1>
          <div>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                width: "15%"
              }}
              onSubmit={async (e) => {
                e.preventDefault();
                await login({
                  variables: { ...formState },
                }).catch((error) => {
                  if (error) {
                    console.log("Error message", error);
                    setError(error);
                  }
                });
                setLoggedIn(true);
                setFormState({
                  email: "",
                  password: "",
                });
              }}
            >
              <TextField
                value={formState.email}
                error={error ? true : false}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    email: e.target.value,
                  })
                }
                type="text"
                placeholder="Enter your email address"
                style={{
                  margin: "10px",
                }}
              />
              <TextField
                value={formState.password}
                error={error ? true : false}
                helperText={
                  error ? error.message : ""
                }
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    password: e.target.value,
                  })
                }
                type="password"
                placeholder="Enter your password"
                style={{
                  margin: "10px",
                }}
              />
              <button
                style={{
                  background: GlobalStyles.pewterBlue,
                  color: GlobalStyles.isabelline,
                  margin: "10px",
                  marginBottom: "20px",
                  padding: "10px 15px",
                  borderRadius: "10px",
                  textDecoration: "none",
                  border: "none",
                  fontSize: "inherit",
                  cursor: "pointer",
                }}
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
          <div>
            <Link
              to="/signup"
              style={{
                background: GlobalStyles.pewterBlue,
                color: GlobalStyles.isabelline,
                margin: "10px",
                padding: "10px",
                borderRadius: "10px",
                textDecoration: "none",
              }}
            >
              Need to create an account?
            </Link>
          </div>
        </div>
      )}
    </AuthContext.Consumer>
  );
};

export default Login;
