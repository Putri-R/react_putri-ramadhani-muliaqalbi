import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid'; // Import UUID
import { Link } from 'react-router-dom';

export default function ProductForm() {
    const [productName, setProductName] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [priceForm, setPriceForm] = useState("");
    const [productNameError, setProductNameError] = useState("");
    const [productCategoryError, setProductCategoryError] = useState("");
    const [productDescriptionError, setProductDescriptionError] = useState("");
    const [priceFormError, setPriceFormError] = useState("");
  
    function validationProductName(e) {
        setProductNameError("");
        setProductName(e.currentTarget.value);
        handleInputChange(e);
    }
  
    useEffect(() => {
      setProductNameError("");
      setProductCategoryError("");
      setProductDescriptionError("");
      setPriceFormError("");
  
      if (productName.length > 10) {
        setProductNameError("Product name must not exceed 10 characters!");
      }
  
      if (productCategory === "") {
        setProductCategoryError("Please select a product category");
      }
  
      if (productDescription.length <= 0) {
        setProductDescriptionError("The Additional Description field must be filled in");
      }
  
      if (priceForm.length <= 0) {
        setPriceFormError("The Product Price field must be filled in");
      }
    }, [productName, productCategory, productDescription, priceForm]);

    // Input data ke tabel
    const [data, setData] = useState({
        productName: "", 
        productCategory: "", 
        productFreshness: "",
        productPrice: null,
    });

    const [productList, setProductList] = useState([]);
    const [showModal, setShowModal] = useState(false);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });

        if (name === 'productCategory') {
            setData({ ...data, productCategory: value });
        } else {
            setData({ ...data, [name]: value });
        }
    };
      
    const [indexNum, setIndex] = useState(1001);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (productName.length <= 0) {
            alert("Please enter a valid product name!");
            return;
        }

        const Number = randomNumber(1, 1000);
        console.log(`Random number is: ${Number}`);
        setNum(Number);

        const newDataWithUUID = { ...data, id: uuidv4(), productNum: indexNum, productCategory: data.productCategory, productFreshness: data.productFreshness, productPrice: data.productPrice,}; // Generate UUID
        setData({
            productName: "", 
            productCategory: "", 
            productFreshness: "",
            productPrice: null,
        });
        setProductList([...productList, newDataWithUUID]);
        setIndex(indexNum + 1);
    };    

    //button random number pada console
    const [num, setNum] = useState(0);

    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    //button edit dan delete
    const [deleteData, setDeleteData] = useState(null);
    const [editingItem, setEditingItem] = useState(null);

    // button edit
    const handleEdit = (id) => {
        const itemToEdit = productList.find((item) => item.id === id);
        setEditingItem({ ...itemToEdit });
      };
    
      // Fungsi untuk menyimpan perubahan
      const handleSave = () => {
        const updatedProductList = productList.map((item) => {
          if (item.id === editingItem.id) {
            return editingItem;
          }
          return item;
        });
    
        setProductList(updatedProductList);
        setEditingItem(null);
      };

    // button delete
    const handleDelete = (id) => {
        setDeleteData(id);
    };
    const confirmDelete = (id) => {
        const confirm = window.confirm("Are you sure you want to delete this product?");
        
        if (confirm) {
            const updatedProductList = productList.filter((item) => item.id !== id);
            setProductList(updatedProductList);
            //menghapus data
            setDeleteData(null);
        } else {
            setDeleteData(null);
        }
    };

    return (
        <form className="product-form col-8" onSubmit={handleSubmit} name="form-product">
            {!editingItem && (
            <>
                <h2>Detail Product</h2>
                {/* product name */}
                <div className="form-group">
                    <div className="mb-3">
                        <label htmlFor="productName" className="form-label">
                            Product Name
                        </label>
                        <input
                            type="text"
                            onChange={(e) => validationProductName(e)}
                            className={`form-control ${productNameError ? "is-invalid" : ""}`}
                            name="productName"
                            value={data.productName}
                            id="productName"
                            required
                        />
                        {productNameError && (
                            <div className="invalid-feedback">
                                <p className="text-red-500 font-medium">
                                    {productNameError}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
                {/* product category */}
                <div className="form-group">
                    <div className="category-form">
                        <label htmlFor="productCategory">Product Category</label>
                        <select
                            onChange={(e) => {
                                handleInputChange(e);
                                setProductCategory(e.currentTarget.value);
                            }}
                            className={`form-select ${productCategoryError ? "is-invalid" : ""}`}
                            name="productCategory"
                            value={data.productCategory}
                            id="productCategory"
                            required
                        >
                            <option value="" disabled>Choose a category</option>
                            <option value={"Baju"}>Baju</option>
                            <option value={"Celana"}>Celana</option>
                            <option value={"Rok"}>Rok</option>
                        </select>
                        {productCategoryError && (
                            <div className="invalid-feedback">
                                <p className="text-red-500 font-medium">
                                    {productCategoryError}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
                {/* image of product */}
                <div className="form-group">
                    <div className="mb-3 image-form">
                        <label htmlFor="productImage" className="form-label">
                            Image of Product
                        </label>
                        <input
                            type="file"
                            className="form-control"
                            name="productImage"
                            id="productImage"
                            required
                        />
                    </div>
                </div>
                {/* product freshness */}
                <div className="form-group">
                    <label className="product-freshness">Product Freshness</label>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            onChange={handleInputChange}
                            type="radio"
                            name="productFreshness"
                            value="Brand New"
                            id="productFreshness1"
                            required
                        />
                        <label className="form-check-label" htmlFor="productFreshness1">
                            Brand New
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            onChange={handleInputChange}
                            type="radio"
                            name="productFreshness"
                            value="Second Hand"
                            id="productFreshness2"
                            required
                        />
                        <label className="form-check-label" htmlFor="productFreshness2">
                            Second Hand
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            onChange={handleInputChange}
                            type="radio"
                            name="productFreshness"
                            value="Refurbished"
                            id="productFreshness3"
                            required
                        />
                        <label className="form-check-label" htmlFor="productFreshness3">
                            Refurbished
                        </label>
                    </div>
                </div>
                {/* additional description */}
                <div className="form-group">
                    <div className="productDescription">
                        <label htmlFor="form-floating">Additional Description</label>
                        <div className="productDescription form-floating">
                            <textarea
                                onChange={(e) => setProductDescription(e.currentTarget.value)}
                                className={`productDescription form-control ${productDescriptionError ? "is-invalid" : ""}`}
                                placeholder="Leave a comment here"
                                name="floatingTextarea2"
                                id="floatingTextarea2"
                                style={{ height: 100 }}
                                required
                                defaultValue={""}
                            />
                            <label htmlFor="floatingTextarea2" />
                            {productDescriptionError && (
                                <div className="invalid-feedback">
                                    <p className="text-red-500 font-medium">
                                        {productDescriptionError}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {/* productPrice */}
                <div className="form-group">
                    <div className="priceForm">
                        <label htmlFor="productPrice">Product Price</label>
                        <div className="priceForm input-group mb-3">
                            <span className="priceForm input-group-text">$</span>
                            <input
                                type="number"
                                onChange={(e) => {
                                    handleInputChange(e);
                                    setPriceForm(e.currentTarget.value);
                                }}
                                className={`priceForm form-control ${priceFormError ? "is-invalid" : ""}`}
                                name="productPrice"
                                value={data.productPrice}
                                id="productPrice"
                                aria-label="Amount (to the nearest dollar)"
                                required
                            />
                            {priceFormError && (
                                <div className="invalid-feedback">
                                    <p className="text-red-500 font-medium">
                                        {priceFormError}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {/* submit button */}
                <div className="submit-button">
                <div className="wrapper">
                    <button onClick={handleSubmit} 
                        type="submit"
                        className="btn btn-primary"
                        id="submitbtn"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal">Submit</button>
                    </div>
                </div>
            </>
            )}
            <div className="modal fade" id="exampleModal" tabid={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" show={showModal}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Confirm your data
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={() => setShowModal(false)} // Menutup modal saat tombol close diklik
                            />
                        </div>
                        <div className="modal-body" id="submittedData">
                            Are you sure the data you submitted is correct?
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                                onClick={() => setShowModal(false)} // Menutup modal saat tombol "No" diklik
                            >
                                No
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                id="modalYesButton"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    setShowModal(false);
                                }}
                            >
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Edit mode: menampilkan data di dalam form */}
            {editingItem && (
                <>
                <h2>Edit Product</h2>
                <div className="form-group">
                        <div className="mb-3">
                            <label htmlFor="productName" className="form-label">
                                Product Name
                            </label>
                            <input
                                type="text"
                                value={editingItem.productName}
                                    onChange={(e) =>
                                        setEditingItem({
                                        ...editingItem,
                                        productName: e.target.value,
                                        })
                                    }
                                className={`form-control ${productNameError ? "is-invalid" : ""}`}
                                name="productName"
                                id="productName"
                                required
                            />
                            {productNameError && (
                                <div className="invalid-feedback">
                                    <p className="text-red-500 font-medium">
                                        {productNameError}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                    {/* product category */}
                    <div className="form-group">
                        <div className="category-form">
                            <label htmlFor="productCategory">Product Category</label>
                            <select
                                value={editingItem.productCategory}
                                onChange={(e) =>
                                setEditingItem({
                                    ...editingItem,
                                    productCategory: e.target.value,
                                })
                                }
                                className={`form-select ${productCategoryError ? "is-invalid" : ""}`}
                                name="productCategory"
                                id="productCategory"
                                required
                            >
                                <option value="" disabled>Choose a category</option>
                                <option value={"Baju"}>Baju</option>
                                <option value={"Celana"}>Celana</option>
                                <option value={"Rok"}>Rok</option>
                            </select>
                            {productCategoryError && (
                                <div className="invalid-feedback">
                                    <p className="text-red-500 font-medium">
                                        {productCategoryError}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                    {/* image of product */}
                    <div className="form-group">
                        <div className="mb-3 image-form">
                            <label htmlFor="productImage" className="form-label">
                                Image of Product
                            </label>
                            <input
                                type="file"
                                className="form-control"
                                name="productImage"
                                id="productImage"
                                required
                            />
                        </div>
                    </div>
                    {/* product freshness */}
                    <div className="form-group">
                        <label className="product-freshness">Product Freshness</label>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                onChange={handleInputChange}
                                type="radio"
                                name="productFreshness"
                                value="Brand New"
                                id="productFreshness1"
                                required
                                checked={data.productFreshness === "Brand New"}
                            />
                            <label className="form-check-label" htmlFor="productFreshness1">
                                Brand New
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                onChange={handleInputChange}
                                type="radio"
                                name="productFreshness"
                                value="Second Hand"
                                id="productFreshness2"
                                required
                                checked={data.productFreshness === "Second Hand"}
                            />
                            <label className="form-check-label" htmlFor="productFreshness2">
                                Second Hand
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                onChange={handleInputChange}
                                type="radio"
                                name="productFreshness"
                                value="Refurbished"
                                id="productFreshness3"
                                required
                                checked={data.productFreshness === "Refurbished"}
                            />
                            <label className="form-check-label" htmlFor="productFreshness3">
                                Refurbished
                            </label>
                        </div>
                    </div>
                    {/* additional description */}
                    <div className="form-group">
                        <div className="productDescription">
                            <label htmlFor="form-floating">Additional Description</label>
                            <div className="productDescription form-floating">
                                <textarea
                                    value={editingItem.productDescription}
                                    onChange={(e) =>
                                    setEditingItem({
                                        ...editingItem,
                                        productDescription: e.target.value,
                                    })
                                    }
                                    className={`productDescription form-control ${productDescriptionError ? "is-invalid" : ""}`}
                                    placeholder="Leave a comment here"
                                    name="floatingTextarea2"
                                    id="floatingTextarea2"
                                    style={{ height: 100 }}
                                    required
                                    defaultValue={""}
                                />
                                <label htmlFor="floatingTextarea2" />
                                {productDescriptionError && (
                                    <div className="invalid-feedback">
                                        <p className="text-red-500 font-medium">
                                            {productDescriptionError}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    {/* productPrice */}
                    <div className="form-group">
                        <div className="priceForm">
                            <label htmlFor="productPrice">Product Price</label>
                            <div className="priceForm input-group mb-3">
                                <span className="priceForm input-group-text">$</span>
                                <input
                                    type="number"
                                    value={editingItem.productPrice}
                                    onChange={(e) =>
                                        setEditingItem({
                                        ...editingItem,
                                        productPrice: e.target.value,
                                        })
                                    }
                                    className={`priceForm form-control ${priceFormError ? "is-invalid" : ""}`}
                                    name="productPrice"
                                    id="productPrice"
                                    aria-label="Amount (to the nearest dollar)"
                                    required
                                />
                                {priceFormError && (
                                    <div className="invalid-feedback">
                                        <p className="text-red-500 font-medium">
                                            {priceFormError}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                <div className="edit-button">
                    <button
                        onClick={handleSave}
                        type="button"
                        className="saveButton btn btn-success"
                        >
                        Save
                    </button>
                    <button
                        onClick={() => setEditingItem(null)}
                        type="button"
                        className="cancelButton btn btn-warning"
                        >
                        Cancel
                    </button>
                </div>
                </>
            )}

            <div className="product-list">
                <h2 className="text-center">List Product</h2>
                <table id="product-table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Product Name</th>
                            <th>Product Category</th>
                            <th>Product Freshness</th>
                            <th>Product Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productList.map((item) => (
                            <tr key={item.id}>
                                <td>{item.productNum}</td>
                                <td>{item.productName}</td>
                                <td>{item.productCategory}</td>
                                <td>{item.productFreshness}</td>
                                <td>${item.productPrice}</td>
                                <td className="tablebtn">
                                    <Link to={`/productDetail/${item.productNum}`} state={{ productList: productList }} className="btn btn-primary" id="detailButton">
                                        Detail
                                    </Link>
                                    <button
                                        className="deleteButton btn btn-danger"
                                        onClick={() => {handleDelete(item.id); confirmDelete(item.id);}}
                                        id="deleteButton"
                                        type="button"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        className="editbutton btn btn-success"
                                        onClick={() => handleEdit(item.id)}
                                        id="editbutton"
                                        type="button"
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </form>
    );
}