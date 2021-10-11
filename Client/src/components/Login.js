import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";
import GlobalStyles from "../assets/GlobalStyles";

const Login = () => {
  const [login, { loading, error, data }] = useMutation(LOGIN);

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    await login({ variables: { ...formState } });
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
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
          onClick={() => console.log("onClick")}
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
  );
};

export default Login;