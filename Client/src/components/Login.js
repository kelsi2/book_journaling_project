import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
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

  return (
    <AuthContext.Consumer>
      {({ setLoggedIn }) => (
        <div>
          <h1 style={{
            margin: "10px"
          }}>Login</h1>
          <div>
            <ValidatorForm
              onError={(errors) => console.log(errors)}
              onSubmit={async (e) => {
                e.preventDefault();
                await login({
                  variables: { ...formState },
                });
                setLoggedIn(true);
                setFormState({
                  email: "",
                  password: "",
                });
              }}
            >
              <TextValidator
                value={formState.email}
                validators={["required", "isEmail"]}
                errorMessages={["This field is required", "Email is not valid"]}
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
              <TextValidator
                value={formState.password}
                validators={["required"]}
                errorMessages={["This field is required"]}
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
            </ValidatorForm>
          </div>
          <div>
            <Link
              to="/signup"
              style={{
                background: GlobalStyles.pewterBlue,
                color: GlobalStyles.isabelline,
                margin: "10px",
                padding: "10px 15px",
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
