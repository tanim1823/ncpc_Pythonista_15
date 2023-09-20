import { useState } from "react";
import { education as data } from "./data";
const Student = () => {
  const [type, setType] = useState("");
  return (
    <div>
      <div
        style={{
          marginTop: "100px",
          textAlign: "center",
        }}
      >
        <div
          className="btn-group "
          role="group"
          aria-label="Basic outlined example"
        >
          <button
            type="button"
            className={
              type === "Secondary"
                ? "btn btn-warning"
                : "btn btn-outline-primary"
            }
            value={"Secondary"}
            onClick={() => setType("Secondary")}
          >
            Secondary
          </button>
          <button
            type="button"
            className={
              type === "Higher_secondary"
                ? "btn btn-warning"
                : "btn btn-outline-primary"
            }
            value={"Higher_secondary"}
            onClick={() => setType("Higher_secondary")}
          >
            Higher Secondary
          </button>
          <button
            type="button"
            className={
              type === "Graduate"
                ? "btn btn-warning"
                : "btn btn-outline-primary"
            }
            value={"Graduate"}
            onClick={() => setType("Graduate")}
          >
            Graduate
          </button>
          <button
            type="button"
            className={
              type === "Under_Graduate"
                ? "btn btn-warning"
                : "btn btn-outline-primary"
            }
            value={"Under_Graduate"}
            onClick={() => setType("Under_Graduate")}
          >
            Undergraduate
          </button>
        </div>
        {type.length === 0 && <p>Please select any one</p>}
      </div>

      <div
        style={{
          marginTop: "30px",
        }}
        className="row row-cols-1 row-cols-md-3 g-4"
      >
        {data.map((item) => (
          <div key={item.id} className="col">
            <div
              className="card"
              style={{
                height: "400px",
              }}
            >
              <img
                src={item.avatarUrl}
                className="card-img-top"
                alt={item.title}
                height={230}
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <button className="btn btn-block btn-info">Links</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Student;
