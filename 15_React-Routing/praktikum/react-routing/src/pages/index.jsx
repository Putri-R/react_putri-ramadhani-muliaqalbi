import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import CreateProduct from "./createProduct";
import LandingPage from "./landingPage";
import ProductDetail from "./productDetail";
import LoginPage from "./loginPage";

export default function SetupRouters() {
  // Define productList and fetch it here
  const [productList, setProductList] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/productDetail/:productNum"
          element={<ProductDetail productList={productList} />}
        />
        <Route path="/login-page" element={<LoginPage />} />

        <Route
          path="/create-product"
          element={
            localStorage.getItem("isLoggedIn") === "true" ? (
              <CreateProduct />
            ) : (
              <Navigate to="/login-page" />
            )
          }
        />
      </Routes>
    </Router>
  );
}
