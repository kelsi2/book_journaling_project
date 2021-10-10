const DataTable = (props) => {
  return (
    <tr>
      <td>{props.obj.id}</td>
      <td>{props.obj.first_name}</td>
      <td>{props.obj.email}</td>
    </tr>
  );
};

export default DataTable;
