import { useState, useEffect } from "react";
import axios from "axios";

const CreateUser = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });

  const onChangeUserName = (e) => {
    setUserData((prevState) => ({ ...prevState, name: e.target.value }));
  };

  const onChangeUserEmail = (e) => {
    setUserData((prevState) => ({ ...prevState, email: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userInfo = {
      name: userData.name,
      email: userData.email,
    };

    axios
      .post("http://localhost:8080/users/create", userInfo)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    setUserData({ name: "", email: "" });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={userData.name}
            onChange={onChangeUserName}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            value={userData.email}
            onChange={onChangeUserEmail}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Create user" />
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
