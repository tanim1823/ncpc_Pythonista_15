import { government as data } from "./data";
import { Link } from "react-router-dom";
const Government = () => {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-6 g-4 ">
        {data.map((item) => (
          <div key={item.id} className="col">
            <div
              className="card"
              style={{
                height: "250px",
              }}
            >
              <img
                src={item.avatar}
                className="card-img-top"
                alt={item.title}
                width={30}
                height={100}
              />
              <Link to={item.link}>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <button className="btn btn-block btn-xs btn-primary">
                    Go
                  </button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Government;
