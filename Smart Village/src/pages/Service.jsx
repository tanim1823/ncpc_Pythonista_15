import { useState } from "react";
import Government from "../components/services/Government";
import Health from "../components/services/Health";
import Transport from "../components/services/Transport";

const Service = () => {
  const [type, setType] = useState("Government");
  return (
    <div className="container">
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
              type === "Government" ? "btn btn-dark" : "btn btn-outline-primary"
            }
            value={"Government"}
            onClick={() => setType("Government")}
          >
            Government
          </button>
          <button
            type="button"
            className={
              type === "Transport" ? "btn btn-dark" : "btn btn-outline-primary"
            }
            value={"Transport"}
            onClick={() => setType("Transport")}
          >
            Transport
          </button>
          <button
            type="button"
            className={
              type === "Health" ? "btn btn-dark" : "btn btn-outline-primary"
            }
            value={"Health"}
            onClick={() => setType("Health")}
          >
            Health
          </button>
        </div>
        {type.length === 0 && <p>Please select any one</p>}
      </div>

      <div
        style={{
          marginTop: "30px",
        }}
      >
        {type === "Government" && <Government />}
        {type === "Health" && <Health />}
        {type === "Transport" && <Transport />}
      </div>
    </div>
  );
};

export default Service;
