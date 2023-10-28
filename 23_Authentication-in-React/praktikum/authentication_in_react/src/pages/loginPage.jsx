import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navigasi from "./createproduct_components/navigasi";
import { useFormik } from 'formik';

const LoginPage = () => {
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
  
    const dummyUser = { email: "admin@example.com", password: "password123" };
    const registeredUser = JSON.parse(localStorage.getItem("user"));
  
    // Mengambil email dan password yang diinputkan user
    const { email, password } = formikLogin.values;
  
    // Mengecek apakah email dan password telah terdaftar
    if (
      registeredUser &&
      registeredUser.email === email &&
      registeredUser.password === password
    ) {
      localStorage.setItem("isLoggedIn", "true");
      console.log("Login successful, isLoggedIn set to true.");
      navigate("/create-product");
    } else if (email === dummyUser.email && password === dummyUser.password) {
      localStorage.setItem("user", JSON.stringify(dummyUser));
      localStorage.setItem("isLoggedIn", "true");
      console.log("Login successful, isLoggedIn set to true.");
      navigate("/create-product");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };
  

  const formikLogin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};

      // Validasi hanya huruf untuk email
      if (!values.email) {
        errors.email = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }
      // Validasi hanya huruf untuk password
      if (!values.password) {
        errors.password = 'Required';
      } else if (values.password.length < 8) {
        errors.password = 'Password must be at least 8 characters long';
      }

      return errors;
    },
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },

    validate: (values) => {
      const errors = {};

      // Validasi hanya huruf untuk firstName
      if (!values.firstName) {
        errors.firstName = 'Required';
      }else if (!/^[a-zA-Z ]+$/.test(values.firstName)) {
        errors.firstName = 'First Name must contain only letters';
      } else if (values.firstName.length < 3) {
        errors.firstName = 'First Name must be at least 3 characters long';
      }
      // Validasi hanya huruf untuk lastName
      if (!values.lastName) {
        errors.lastName = 'Required';
      }else if (!/^[a-zA-Z ]+$/.test(values.lastName)) {
        errors.lastName = 'Last Name must contain only letters';
      } else if (values.lastName.length < 3) {
        errors.lastName = 'Last name must be at least 3 characters long';
      }
      // Validasi hanya huruf untuk email
      if (!values.email) {
        errors.email = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }
      // Validasi hanya huruf untuk username
      if (!values.username) {
        errors.username = 'Required';
      }
      // Validasi hanya huruf untuk password
      if (!values.password) {
        errors.password = 'Required';
      } else if (values.password.length < 8) {
        errors.password = 'Password must be at least 8 characters long';
      }
      // Validasi hanya huruf untuk confirm password
      if (!values.confirmPassword) {
        errors.confirmPassword = 'Required';
      }
      // Validasi hanya huruf untuk password dan confirm password harus sama
      if (values.password !== values.confirmPassword) {
        errors.confirmPassword = 'Password and Confirm Password must match';
      }

      return errors;
    },
  });

  return (
    <>
      <Navigasi />
      {isRegistering ? (
        <div className="register-form" style={{ display: "flex", justifyContent: "center", height: "100vh" }}>
          <form onSubmit={formik.handleSubmit} className="col-8" style={{ width: "35%", display: "block" }}>
            <h2>Register Form</h2>
            <div className="form-group input-name" style={{marginTop:"10px"}}>
              <div>
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  required
                />
                {formik.errors.firstName && (
                  <div className="error">{formik.errors.firstName}</div>
                )}
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  required
                />
                {formik.errors.lastName && (
                  <div className="error">{formik.errors.lastName}</div>
                )}
              </div>
            </div>
            <div className="form-group" style={{marginTop:"10px"}}>
              <div>
                <label htmlFor="username">Username</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  required
                />
              </div>
            </div>
            <div className="form-group" style={{marginTop:"10px"}}>
              <div>
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  required
                />
                {formik.errors.email && formik.touched.email && (
                  <div className="error">{formik.errors.email}</div>
                )}
              </div>
            </div>
            <div className="form-group" style={{marginTop:"10px"}}>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  required
                />
              </div>
            </div>
            <div className="form-group" style={{marginTop:"10px"}}>
              <div>
                <label htmlFor="password-confirm">Confirm Password</label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.confirmPassword}
                  required
                />
                {formik.errors.confirmPassword && (
                  <div className="error">{formik.errors.confirmPassword}</div>
                )}
              </div>
            </div>
            <div style={{marginTop:"20px"}}>
              <p>Already registered? <Link to="#" onClick={() => setIsRegistering(false)}>Log In</Link></p>
            </div>
            <div className="form-group" style={{ marginTop: "30px" }}>
              <button
                  type="submit"
                  className="btn btn-success"
                  style={{ width: "250px" }}
                  disabled={!formik.isValid || !formik.dirty}>
                  Submit
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div
          style={{ display: "flex", justifyContent: "center", height: "100vh" }}
        >
          <form
            className="col-8"
            onSubmit={handleLogin}
            style={{ width: "35%", display: "block" }}
          >
            <h2>Log In</h2>
            <div className="form-group">
              <div className="email">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  required=""
                  placeholder="you@example.com"
                  value={formikLogin.values.email}
                  onChange={formikLogin.handleChange}
                />
                {formikLogin.errors.email && formikLogin.touched.email && (
                  <div className="error">{formikLogin.errors.email}</div>
                )}
              </div>
            </div>
            <div className="form-group" style={{ marginTop: "10px" }}>
              <div className="password">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  required=""
                  placeholder="your email password"
                  value={formikLogin.values.password}
                  onChange={formikLogin.handleChange}
                />
              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
              <p>
                Not registered yet?{" "}
                <Link to="#" onClick={() => setIsRegistering(true)}>
                  Sign Up
                </Link>
              </p>
            </div>
            <div className="form-group" style={{ marginTop: "30px" }}>
              <button
                type="submit"
                className="btn btn-success"
                style={{ width: "250px" }}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default LoginPage;