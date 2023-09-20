import { electricitySupply as data } from "./data";
const Electricity = () => {
  return (
    <div className="container">
      <table className="table table-warning table-striped m-3 p-3 table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>House Owner</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Electricity Supply</th>
          </tr>
        </thead>
        {data.map((item) => (
          <tbody key={item.id}>
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.location}</td>
              <td>{item.electricitySupply ? "Yes" : "No"}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Electricity;
