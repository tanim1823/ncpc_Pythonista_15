import { teachers as data } from "./data";
const Teacher = () => {
  return (
    <div>
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
                width={150}
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

export default Teacher;
