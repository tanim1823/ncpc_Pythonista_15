import { useState, useEffect } from "react";
import { useLoginMutation } from "../rtk/features/auth/authApi";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");

  const [login, { data, isLoading, isSuccess, error: responseError }] =
    useLoginMutation();

  const navigate = useNavigate();
  useEffect(() => {
    if (responseError?.data) {
      setError(responseError.data);
    }
    if (data?.accessToken && data?.user) {
      navigate("/profile");
    }
  }, [data, responseError, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    login({
      email,
      password,
    });
    setemail("");
    setpassword("");
  };
  return (
    <div>
      <h1 className="text-center">Login page</h1>
      <form onSubmit={handleSubmit}>
        <div className="container m-4">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput2" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="exampleFormControlInput2"
              placeholder="******"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <button
            disabled={isLoading}
            type="submit"
            className="btn btn-secondary"
          >
            Login
          </button>
          {error && <div className="valid-tooltip">{error}</div>}
          {/* <Link to={"/registration"}>
            <button className=" d-block m btn btn-dark">Sign up</button>
          </Link> */}
        </div>
      </form>
    </div>
  );
};

export default Login;
