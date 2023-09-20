import { transport as data } from "./data";
const Tranport = () => {
  /** decide what to do  */
  let obj = {
    Bus: "primary",
    Ambulance: "danger",
    Car: "success",
    Truck: "dark",
  };

  return (
    <div>
      <table className="table border  table-striped m-3 p-3 table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Type</th>
            <th>Name</th>
            <th>Phone no</th>
          </tr>
        </thead>
        {data.map((item) => {
          let color = obj[item.type];
          return (
            <tbody className={`table-${color}`} key={item.id}>
              <tr>
                <td>{item.id}</td>
                <td>{item.type}</td>
                <td>{item.name}</td>
                <td>{item.contact_number}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Tranport;
