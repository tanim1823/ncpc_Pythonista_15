import { Link } from "react-router-dom";
// import logo from "../assets/images/logo.png";
const Header = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <nav className="navbar fixed-top navbar-dark navbar-expand-md bg-dark fixed-top">
      <div className="container-fluid">
        <span>
          <Link onClick={scrollTop} className="navbar-brand" to="/">
            {/* <img
              src={logo}
              alt=""
              width={30}
              height={24}
              className="d-inline-block align-text-top"
            /> */}
            <span className="navbar-brand mb-0  h1">Smart Village</span>
          </Link>
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Smart Village
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body bg-dark">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li
                onClick={scrollTop}
                className="nav-item"
                data-bs-dismiss="offcanvas"
              >
                <Link to={`/`} className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <Link to={`/profile`} className="nav-link">
                Profile
              </Link>
              <Link to={`/services`} className="nav-link">
                Services
              </Link>
              <li onClick={scrollTop} className="nav-item dropdown">
                <Link
                  to={`/about`}
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Us
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li onClick={scrollTop} data-bs-dismiss="offcanvas">
                    <Link to={`/about`} className="dropdown-item">
                      About us
                    </Link>
                  </li>
                  <hr className="dropdown-divider" />
                  <li onClick={scrollTop} data-bs-dismiss="offcanvas">
                    <Link to={`/mission_vision`} className="dropdown-item">
                      Mission And Vision
                    </Link>
                  </li>
                  <li></li>
                  <li onClick={scrollTop} data-bs-dismiss="offcanvas">
                    <Link to={`/protfolio`} className="dropdown-item">
                      Protfolio
                    </Link>
                  </li>
                </ul>
              </li>
              <li onClick={scrollTop} className="nav-item dropdown">
                <Link
                  to={`/about`}
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Education
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li onClick={scrollTop} data-bs-dismiss="offcanvas">
                    <Link to={`/education/student`} className="dropdown-item">
                      Student
                    </Link>
                  </li>

                  <li onClick={scrollTop} data-bs-dismiss="offcanvas">
                    <Link to={`/education/employee`} className="dropdown-item">
                      Employee
                    </Link>
                  </li>
                  <li onClick={scrollTop} data-bs-dismiss="offcanvas">
                    <Link to={`/education/teacher`} className="dropdown-item">
                      For Teacher
                    </Link>
                  </li>
                </ul>
              </li>
              <li onClick={scrollTop} className="nav-item dropdown">
                <Link
                  to={`/about`}
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Current Issue
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li onClick={scrollTop} data-bs-dismiss="offcanvas">
                    <Link to={`/poll`} className="dropdown-item">
                      Vote & Poll
                    </Link>
                  </li>

                  <li onClick={scrollTop} data-bs-dismiss="offcanvas">
                    <Link to={`/opinion`} className="dropdown-item">
                      Opinion Related Service or Situation
                    </Link>
                  </li>

                  <Link to={`/protfolio`} className="nav-link">
                    Settings
                  </Link>
                </ul>
              </li>
              <Link to={`/store`} className="nav-link">
                Store
              </Link>{" "}
              <Link to={`/management`} className="nav-link">
                Management
              </Link>
            </ul>
            <div className="d-flex ml-2">
              <Link to={"/login"}>
                <button className="btn btn-outline-success" type="submit">
                  Login
                </button>
              </Link>
              <Link to={"/registration"}>
                <button className="btn btn-outline-success" type="submit">
                  Register
                </button>
              </Link>
              <Link to={"/admin"}>
                <button className="btn btn-outline-success" type="submit">
                  Admin
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
