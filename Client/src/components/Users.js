import { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "./DataTable";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const dataTable = () => {
    return users.map((data, i) => {
      return <DataTable obj={data} key={i} />;
    });
  };

  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Email</td>
            </tr>
          </thead>
          <tbody>{dataTable()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
