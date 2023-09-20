import { useState, useEffect } from "react";
import { checkWastage, checkWater, checkElectricity } from "../utils/check";
import { Link } from "react-router-dom";
const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentDay, setCurrentDay] = useState("");

  useEffect(() => {
    // Update the current time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Get the current day and set it
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayIndex = currentTime.getDay();
    setCurrentDay(days[dayIndex]);
  }, [currentTime]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h4>Current Time and Day</h4>
        </div>
        <div className="col-md-3">
          <p>Time: {currentTime.toLocaleTimeString()}</p>
        </div>
        <div className="col-md-3">
          <p>Day: {currentDay}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <h5 className="display-5 text-success">Management</h5>
          <hr />
          <table className="table">
            <thead>
              <tr>
                <th scope="col">
                  <Link to={"managementLayout/1"}>Wastage Management</Link>
                </th>
                <td scope="col">{checkWastage() ? "Ok" : "Wrong"}</td>
              </tr>
              <tr>
                <th scope="col">
                  <Link to={"managementLayout/4"}>Water Supply</Link>
                </th>
                <td scope="col">{checkWater() ? "Ok" : "Wrong"}</td>
              </tr>
              <tr>
                <th scope="col">
                  <Link to={"managementLayout/3"}>Electricity Supply</Link>
                </th>
                <td scope="col">{checkElectricity() ? "Ok" : "Wrong"}</td>
              </tr>
            </thead>
          </table>
        </div>
        <div className="col-md-4">
          <h5 className="display-5 text-success">Stores</h5>
          <hr />

          <div className="card" style={{ width: "15rem" }}>
            <img
              src="https://media.istockphoto.com/id/1425484771/photo/blue-t-shirt.jpg?s=2048x2048&w=is&k=20&c=W931s28TT5IbPYA6-Ddldz1CEs0HuaHK_cCqT5PElv8="
              className="card-img-top"
              alt="image"
            />
            <div className="card-body">
              <h5 className="card-title">T-shirt</h5>
              <p className="card-text">100% cotton and 130gsm</p>
              <p className="lead">Avalaible Size: S , L , Xl</p>
              <Link to={"/store"}>
                <a className="btn btn-primary">Go To Store for details</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <h5 className="display-5 text-success">Current issues</h5>
          <hr />
          <h4 className="text-danger">No update news to show....</h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
