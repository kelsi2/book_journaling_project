import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";
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
  const [login, { loading, error, data }] = useMutation(LOGIN, {
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
      {({ loggedIn, setLoggedIn }) => (
    <div>
      <h1>Login</h1>
      <div>
        <input
          value={formState.email}
          onChange={(e) =>
            setFormState({
              ...formState,
              email: e.target.value,
            })
          }
          type="text"
          placeholder="Enter your email address"
        />
        <input
          value={formState.password}
          onChange={(e) =>
            setFormState({
              ...formState,
              password: e.target.value,
            })
          }
          type="password"
          placeholder="Enter your password"
        />
      </div>
      <div>
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
          }}
          onClick={async (e) => {
            e.preventDefault();
            await login({
              variables: { ...formState },
            });
            setLoggedIn(true)
            setFormState({
              email: "",
              password: "",
            });
          }}
        >
          Login
        </button>
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
          Need to create an account?
        </Link>
      </div>
    </div>
    )}
    </AuthContext.Consumer>
  );
};

export default Login;
