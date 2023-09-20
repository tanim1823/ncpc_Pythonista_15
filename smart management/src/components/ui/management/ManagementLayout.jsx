import { useParams } from "react-router-dom";
import { demoData } from "./data";
import Water from "./Water";
import Sanitization from "./Sanitization";
import Electricity from "./Electricity";
import Wastes from "./Wastes";

const ManagementLayout = () => {
  const { id } = useParams();
  const content = demoData.filter((d) => d.id == id)[0];

  return (
    <div className="container">
      <h3 className="text-danger ">Information about {content.title}</h3>
      <hr />
      {content.id == 1 && <Wastes />}
      {content.id === 2 && <Sanitization />}
      {content.id === 3 && <Electricity />}
      {content.id === 4 && <Water />}
    </div>
  );
};

export default ManagementLayout;
