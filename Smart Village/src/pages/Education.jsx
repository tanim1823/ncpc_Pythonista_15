import { useParams } from "react-router-dom";
import Student from "../components/Education/Student";
import Teacher from "../components/Education/Teacher";
import Employee from "../components/Education/Employee";

const Education = () => {
  const { type } = useParams();
  return (
    <div className="container">
      {type === "student" && <Student />}
      {type === "teacher" && <Teacher />}
      {type === "employee" && <Employee />}
    </div>
  );
};

export default Education;
