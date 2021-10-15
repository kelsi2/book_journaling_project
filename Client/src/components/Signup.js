import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import GlobalStyles from "../assets/GlobalStyles";
import AuthContext from "../context/AuthContext";

const ADD_USER = gql`
  mutation AddUser(
    $first_name: String!
    $last_name: String!
    $email: String!
    $username: String!
    $password: String!
  ) {
    addUser(
      first_name: $first_name
      last_name: $last_name
      email: $email
      username: $username
      password: $password
    ) {
      token
    }
  }
`;

const Signup = () => {
  const [addUser] = useMutation(ADD_USER, {
    onCompleted(data) {
      localStorage.setItem("AUTH_TOKEN", data.addUser.token);
      history.goBack();
    },
  });

  const history = useHistory();

  const [formState, setFormState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
  });

  return (
    <AuthContext.Consumer>
      {({ setLoggedIn }) => (
        <div>
          <h1 style={{
            margin: "10px"
          }}>Sign Up</h1>
          <div>
            <ValidatorForm
              onError={(errors) => console.log(errors)}
              onSubmit={async (e) => {
                e.preventDefault();
                await addUser({
                  variables: { ...formState },
                });
                setLoggedIn(true);
                setFormState({
                  first_name: "",
                  last_name: "",
                  email: "",
                  username: "",
                  password: "",
                });
              }}
            >
              <TextValidator
                value={formState.first_name}
                validators={["required"]}
                errorMessages={["This field is required"]}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    first_name: e.target.value,
                  })
                }
                type="text"
                placeholder="First name"
                style={{
                  margin: "10px",
                }}
              />
              <TextValidator
                value={formState.last_name}
                validators={["required"]}
                errorMessages={["This field is required"]}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    last_name: e.target.value,
                  })
                }
                type="text"
                placeholder="Last name"
                style={{
                  margin: "10px",
                }}
              />
              <TextValidator
                value={formState.username}
                validators={["required"]}
                errorMessages={["This field is required"]}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    username: e.target.value,
                  })
                }
                type="text"
                placeholder="Username"
                style={{
                  margin: "10px",
                }}
              />
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
              <div>
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
                  Create Account
                </button>
              </div>
            </ValidatorForm>
            <Link
              to="/login"
              style={{
                background: GlobalStyles.pewterBlue,
                color: GlobalStyles.isabelline,
                margin: "10px",
                padding: "10px 15px",
                borderRadius: "10px",
                textDecoration: "none",
              }}
            >
              Already have an account?
            </Link>
          </div>
        </div>
      )}
    </AuthContext.Consumer>
  );
};

export default Signup;
