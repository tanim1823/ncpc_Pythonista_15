import { sanitization as sanitizationData } from "./data";

const Sanitization = () => {
  return (
    <div className="container">
      {Object.keys(sanitizationData).map((info) => {
        let data = sanitizationData[info];
        return (
          <span key={data.id} className="my-3">
            <h4 className="text-center text-secondary">
              {" "}
              Location: {data[0].location}
            </h4>

            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Type</th>
                  <th>Clean</th>
                  <th>Action</th>
                </tr>
              </thead>
              {data.map((d) => (
                <tbody key={d.id}>
                  <tr>
                    <td>{d.id}</td>
                    <td>{d.type}</td>
                    <td>{d.clean ? "Yes" : "No"}</td>
                    <td>
                      <div className="d-flex g-3">
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm"
                        >
                          Update
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </span>
        );
      })}
    </div>
  );
};

export default Sanitization;
