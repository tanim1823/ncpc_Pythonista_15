import React from "react";
import ManagementCart from "./ManagementCart";

import { demoData } from "./data";

const ManagementContent = () => {
  return (
    <div
      className="container"
      style={{
        marginTop: "100px",
      }}
    >
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {demoData.map((demo) => (
          <ManagementCart key={demo.id} data={demo} />
        ))}
      </div>
    </div>
  );
};

export default ManagementContent;
