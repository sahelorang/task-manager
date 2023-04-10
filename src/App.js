import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Sidebar } from "./components/Sidebar/Sidebar";
import SignUp from "./pages/SignUp/SignUp";
import Projects from "./pages/Projects/Projects";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Login from "./pages/Login/Login";
import AuthGaurd from "./Contexts/AuthGaurd";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route
          path="/"
          element={
            <AuthGaurd>
              <NavBar />
              <div className="d-flex ">
                <Sidebar />
                <Outlet />
              </div>
            </AuthGaurd>
          }
        >
          <Route path="/SignUp" element={<Navigate to="/SignUp" replace />} />
          <Route path="/" element={<Projects />} index />
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
}

export default App;
