import { health as data } from "./data";
const Health = () => {
  /** decide what to do  */
  let obj = {
    Pharmacy: "success",
    Hospital: "dark",
    Doctor: "warning",
  };

  return (
    <div>
      <table className="table border  table-striped m-3 p-3 table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Type</th>
            <th>Location</th>
            <th>Contact No</th>
          </tr>
        </thead>
        {data.map((item) => {
          let color = obj[item.type];
          return (
            <tbody className={`table-${color}`} key={item.id}>
              <tr>
                <td>{item.id}</td>
                <td>{item.type}</td>
                <td>{item.location}</td>
                <td>{item.contact}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Health;
