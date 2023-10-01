import React from "react";
import { useLocation } from "react-router-dom";
import Navigasi from './createproduct_components/navigasi';

export default function ProductDetail() {
    const location = useLocation();
  const productList = location.state.productList; 

    return (
        <>
        <Navigasi/>

        <div  style={{margin: "50px"}}>
            <h2>Product Detail</h2>
            <table>
                <thead>
                <tr>
                    <th>No</th>
                    <th>Product Name</th>
                    <th>Product Category</th>
                    <th>Product Freshness</th>
                    <th>Product Price</th>
                </tr>
                </thead>
                <tbody>
                {productList.map((item, index) => (
                    <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.productName}</td>
                    <td>{item.productCategory}</td>
                    <td>{item.productFreshness}</td>
                    <td>${item.productPrice}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </>
    );
}
