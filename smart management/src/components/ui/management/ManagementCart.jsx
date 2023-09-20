import React from "react";
import { useNavigate } from "react-router-dom";
const ManagementCart = ({ data }) => {
  const { id, title, avatarUrl } = data;
  const navigate = useNavigate();
  return (
    <div>
      <div className="col">
        <div
          className="card"
          style={{
            height: "400px",
          }}
        >
          <img src={avatarUrl} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <button
              className="btn btn-block btn-info"
              onClick={() => navigate(`/managementLayout/${id}`)}
            >
              Click here{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementCart;
