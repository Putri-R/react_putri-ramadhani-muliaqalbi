import React from "react";
import { useNavigate } from "react-router-dom";
import Navigasi from "./createproduct_components/navigasi";
import Footer from "./landingpage_components/footer";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    
    navigate("/create-product");
  };

  return (
    <>
      <Navigasi />

      <div
        style={{ display: "flex", justifyContent: "center", height: "100vh" }}
      >
        <form className="col-8" style={{ width: "35%", display: "block" }}>
          <h2>Log In</h2>
          {/* product name */}
          <div className="form-group">
            <div className="name-input">
              <div className="mb-3">
                <label htmlFor="first-name" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="first-name"
                  id="first-name"
                  required=""
                />
              </div>
              <div className="mb-3">
                <label htmlFor="last-name" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="last-name"
                  id="last-name"
                  required=""
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="username basic-addon1">Username</label>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required=""
              />
            </div>
          </div>
          <div className="form-group">
            <div className="email">
              <label htmlFor="inputEmail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                name="inputEmail"
                id="inputEmail"
                required=""
                placeholder="you@example.com"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
          <div className="form-group" style={{ marginTop: "30px" }}>
            <button
              type="button"
              className="btn btn-success"
              style={{ width: "250px" }}
              onClick={handleLogin}>
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
