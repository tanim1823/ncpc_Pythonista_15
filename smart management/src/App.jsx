import { Route, Routes } from "react-router-dom";
import Headers from "./components/Header";
import Management from "./pages/Management";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Admin from "./pages/Admin";
import PrivateRoute from "./components/PrivateRoute";
import { useAuthCheck } from "./hooks/useAuthCheck";
import ManagementLayout from "./components/ui/management/ManagementLayout";
import Education from "./pages/Education";
import Service from "./pages/Service";
import About from "./components/about/About";
import Mission from "./components/about/Mission";
import Protfolio from "./components/about/Protfolio";
import Vote from "./components/services/issue/Vote";
import Opinion from "./components/services/issue/Opinion";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Store from "./pages/Store";

const App = () => {
  const authChecked = useAuthCheck();

  return !authChecked ? (
    <div>Checking authentication....</div>
  ) : (
    <>
      <Headers />

      <span
        style={{
          display: "block",
          marginTop: "60px",
        }}
      >
        <Routes>
          <Route
            path="/management"
            element={
              <PrivateRoute>
                <Management />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/store" element={<Store />} />
          <Route path="/managementLayout/:id" element={<ManagementLayout />} />
          <Route path="/education/:type" element={<Education />} />
          <Route path="/services" element={<Service />} />

          <Route path="/about" element={<About />} />
          <Route path="/mission_vision" element={<Mission />} />
          <Route path="/protfolio" element={<Protfolio />} />
          <Route path="/store" element={<Store />} />

          <Route path="/poll" element={<Vote />} />
          <Route path="/opinion" element={<Opinion />} />
          <Route path="/profile" element={<Profile />} />

          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <Admin />
              </PrivateRoute>
            }
          />
        </Routes>
      </span>
    </>
  );
};

export default App;
