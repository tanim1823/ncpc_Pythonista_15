import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { userLoggedOut } from "../rtk/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Profile = () => {
  const { user } = useSelector((state) => state.auth) || {};
  const { id, name, email, avatar, role, phone, address, approved } =
    user || {};
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(userLoggedOut());
    navigate("/login");
  };

  useEffect(() => {
    if (localStorage.getItem("auth") == null) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div className="container">
      <h1 className="text-primary display-4">Profile</h1>
      <hr />

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <td scope="col">{name}</td>
            <td>
              <button className="btn btn-dark btn-xs">Edit</button>
            </td>
          </tr>
          <tr>
            <th scope="col">avatar</th>
            <td scope="col"></td>
            <td>
              {" "}
              <img src={avatar} width={70} height={120} />
            </td>
          </tr>
          <tr>
            <th scope="col">Email</th>
            <td scope="col">{email}</td>
            <td>
              <button className="btn btn-dark btn-xs">Edit</button>
            </td>
          </tr>
          <tr>
            <th scope="col">Phone no</th>
            <td scope="col">{phone}</td>
            <td>
              <button className="btn btn-dark btn-xs">Edit</button>
            </td>
          </tr>
          <tr>
            <th scope="col">Role</th>
            <td scope="col">{role}</td>
            <td>
              <button className="btn btn-dark btn-xs">Edit</button>
            </td>
          </tr>
          <tr>
            <th scope="col">Address</th>
            <td scope="col">{address}</td>
            <td>
              <button className="btn btn-dark btn-xs">Edit</button>
            </td>
          </tr>
          <tr>
            <th scope="col">Approved</th>
            <td scope="col">{approved ? "Yes" : "No"}</td>
            <td>
              <button className="btn btn-dark btn-xs">Edit</button>
            </td>
          </tr>
        </thead>
      </table>

      <button
        onClick={handleLogout}
        className="btn btn-outline-success"
        type="submit"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
