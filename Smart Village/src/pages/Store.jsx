import React from "react";

let storeData = [
  {
    id: 1,
    title: "T-shirt",
    avatarUrl:
      "https://img.freepik.com/free-psd/isolated-white-t-shirt-front-view_125540-1194.jpg",
    description: "100% cotton and 130 gsm",
    size: "Available S , L , M , XL",
    price: 330,
  },
  {
    id: 2,
    title: "Hand Note",
    avatarUrl:
      "https://anupamstationery.com/wp-content/uploads/2021/08/Ledger-Khata-Account-Book-2.jpg",
    description: "Page Thickness 0.02ml",
    size: "150 page ",
    price: 70,
  },
  {
    id: 3,
    title: "Pencil Box",
    avatarUrl:
      "https://media.istockphoto.com/id/117221710/photo/metal-pencil-case.jpg?s=612x612&w=0&k=20&c=9OlYskuW30zPea9QysfFjJnkhMoJk0YU2wHsgn7KOOE=",
    description: "Dimention 7x3x1.5 inch",
    size: undefined,
    price: 55,
  },
  {
    id: 4,
    title: "Mango",
    avatarUrl:
      "https://sources.roboflow.com/GpktqypcR0b5U9tgwXm9WJtI9JA3/Jb2Akj7qiQHJh7uiQ1xM/original.jpg",
    description: "Hari vanga",
    size: undefined,
    price: 120,
  },
  {
    id: 5,
    title: "Paddy",
    avatarUrl:
      "https://media.istockphoto.com/id/153737841/photo/rice.jpg?s=612x612&w=0&k=20&c=lfO7iLT0UsDDzra0uBOsN1rvr2d5OEtrG2uwbts33_c=",
    description: "Miniket preminium",
    size: undefined,
    price: 68,
  },
];

const Store = () => {
  return (
    <div className="container">
      <div
        style={{
          marginTop: "30px",
        }}
        className="row row-cols-1 row-cols-md-3 g-4"
      >
        {storeData.map((item) => (
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
                {item.size && <p className="lead">{item.size}</p>}

                <a
                  style={{
                    marginRight: "20px",
                  }}
                  className="btn btn-dark"
                >
                  Go To Buy
                </a>
                <a className="btn btn-warning">Go To Add to Cart</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
