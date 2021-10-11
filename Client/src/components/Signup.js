import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";
import GlobalStyles from "../assets/GlobalStyles";

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
    )
  }
`;

const Signup = () => {
  const [addUser, { loading, error, data }] = useMutation(ADD_USER);

  const [formState, setFormState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    await addUser({ variables: { ...formState } });
    setFormState({
      first_name: "",
      last_name: "",
      email: "",
      username: "",
      password: "",
    });
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <div>
        <input
          value={formState.first_name}
          onChange={(e) =>
            setFormState({
              ...formState,
              first_name: e.target.value,
            })
          }
          type="text"
          placeholder="First name"
        />
        <input
          value={formState.last_name}
          onChange={(e) =>
            setFormState({
              ...formState,
              last_name: e.target.value,
            })
          }
          type="text"
          placeholder="Last name"
        />
        <input
          value={formState.username}
          onChange={(e) =>
            setFormState({
              ...formState,
              username: e.target.value,
            })
          }
          type="text"
          placeholder="Username"
        />
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
            fontSize: "inherit"
          }}
          onClick={onSubmit}
        >
          Create Account
        </button>
        <Link
          to="/login"
          style={{
            background: GlobalStyles.pewterBlue,
            color: GlobalStyles.isabelline,
            padding: "10px 15px",
            borderRadius: "10px",
            textDecoration: "none",
          }}
        >
          Already have an account?
        </Link>
      </div>
    </div>
  );
};

export default Signup;
