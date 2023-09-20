import { useEffect, useState } from "react";
import { useRegisterMutation } from "../rtk/features/auth/authApi";
import { useNavigate } from "react-router-dom";
import Error from "../components/ui/Error";

const initialState = {
  id: "",
  name: "",
  email: "",
  password: "",
  avatar: "",
  role: "",
  phone: "",
  address: "",
  approved: false,
};
const Registration = () => {
  const [userData, setsUserData] = useState({ ...initialState });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setsUserData({
      ...userData,
      [name]: value,
    });
  };

  const [register, { data, isLoading, error: responseError }] =
    useRegisterMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (responseError?.data) {
      setError(responseError.data);
    }
    if (data?.accessToken && data?.user) {
      navigate("/");
    }
  }, [data, responseError, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    register(userData);
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h3 className="text-warning">Registration</h3>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              name
            </span>
            <input
              type="name"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              name="name"
              value={userData.name}
              onChange={handleChange}
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Email
            </span>
            <input
              type="email"
              className="form-control"
              placeholder="example@gmail.com"
              aria-label="Username"
              aria-describedby="basic-addon1"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
            <span className="input-group-text" id="basic-addon1">
              Phone
            </span>
            <input
              type="phone"
              className="form-control"
              aria-label="Username"
              aria-describedby="basic-addon1"
              name="phone"
              value={userData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Password
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="*******"
              aria-label="Username"
              aria-describedby="basic-addon1"
              name="password"
              value={userData.password}
              onChange={handleChange}
            />
            <span className="input-group-text" id="basic-addon1">
              Role
            </span>
            <select
              className="form-select"
              aria-label="Default select example"
              name="role"
              value={userData.role}
              onChange={handleChange}
            >
              <option selected>Open this select menu</option>

              <option value="Public">Public</option>
              <option value="Village Admin">Village Admin</option>
              <option value="Worker">Worker</option>
            </select>
          </div>

          <div className="input-group">
            <span className="input-group-text">Address</span>
            <textarea
              className="form-control"
              aria-label="With textarea"
              defaultValue={""}
              name="address"
              value={userData.address}
              onChange={handleChange}
            />
          </div>
          <button
            disabled={isLoading}
            type="submit"
            className="btn btn-primary mt-2"
          >
            Registration
          </button>
          {error !== "" && <Error message={error} />}
        </form>
      </div>
    </>
  );
};

export default Registration;
