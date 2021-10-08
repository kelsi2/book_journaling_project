import DataTable from "./DataTable";
import {
  useQuery,
  gql
} from "@apollo/client";

const GET_USERS = gql`
  query {
    getUsers {
      id
      first_name
      email
    }
  }
`;

const Users = () => {
  const { loading, error, data } = useQuery(GET_USERS)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data.getUsers)

  const dataTable = () => {
    return data.getUsers.map((data, i) => {
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
