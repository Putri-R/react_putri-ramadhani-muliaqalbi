import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    setProductName,
    setProductCategory,
    setProductDescription,
    setProductPrice,
    setProductNameError,
    setProductCategoryError,
    setProductDescriptionError,
    setProductPriceError,
    setEditProductId,
    setDeleteProductId,
    addProduct,
    setProductList,
  } from '../../store/productActions';

export default function ProductForm() {
    const productName = useSelector((state) => state.product.productName);
    const productCategory = useSelector((state) => state.product.productCategory);
    const productDescription = useSelector((state) => state.product.productDescription);
    const priceForm = useSelector((state) => state.product.priceForm);
    const productNameError = useSelector((state) => state.product.productNameError);
    const productCategoryError = useSelector((state) => state.product.productCategoryError);
    const productDescriptionError = useSelector((state) => state.product.productDescriptionError);
    const productPriceError = useSelector((state) => state.product.productPriceError);
    const editProductId = useSelector((state) => state.product.editProductId);
    const deleteProductId = useSelector((state) => state.product.deleteProductId);
    const products = useSelector((state) => state.product.products);
    const dispatch = useDispatch();
  
    function validationProductName(e) {
        dispatch(setProductNameError(""));
        dispatch(setProductName(e.currentTarget.value));
        handleInputChange(e);
    }

    const [isFormValid, setIsFormValid] = useState(true);
  
    useEffect(() => {
        let isValid = true;
    
        if (productName.length > 10) {
          dispatch(setProductNameError("Product name must not exceed 10 characters!"));
          isValid = false;
        } else {
          dispatch(setProductNameError(""));
        }
    
        if (productCategory === "") {
          dispatch(setProductCategoryError("Please select a product category"));
          isValid = false;
        } else {
          dispatch(setProductCategoryError(""));
        }
    
        if (productDescription.length <= 0) {
          dispatch(setProductDescriptionError("The Additional Description field must be filled in"));
          isValid = false;
        } else {
          dispatch(setProductDescriptionError(""));
        }
    
        if (priceForm.length <= 0) {
          dispatch(setProductPriceError("The Product Price field must be filled in"));
          isValid = false;
        } else {
          dispatch(setProductPriceError(""));
        }
    
        setIsFormValid(isValid);
    }, [productName, productCategory, productDescription, priceForm]);    
      

    // Input data ke tabel
    const [data, setData] = useState({
        productName: "", 
        productCategory: "", 
        productImage: "",
        productFreshness: "",
        productDescription: "",
        productPrice: null,
    });

    const [productList, setProductList] = useState([]);
    // const [showModal, setShowModal] = useState(false);

    const [imageUpload, setImageUpload] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });

        if (name === 'productCategory') {
            setData({ ...data, productCategory: value });
        } else{
            setData({ ...data, [name]: value });
        }

        if (name === 'productDescription') {
            setData({ ...data, productDescription: value });
        } else{
            setData({ ...data, [name]: value });
        }

        if (name === 'productImage') {
            if (e.target.files.length > 0) {
              setImageUpload(true);
            } else {
              setImageUpload(false);
            }
        }
    };
      
    const [indexNum, setIndex] = useState(1001);

    const handleSubmit = (e) => {
        e.preventDefault();

        let isValid = true;
        if (productName.length <= 0) {
            alert("Please enter a valid product name!");
            isValid = false;
            return;
        }
        
        if(productName.match(/[@/#{}]/)){
            alert("Product name must not contain symbols");
            isValid = false;
        }

        // Periksa apakah nama produk sudah ada di tabel
        const isProductExists = productList.some((item) => item.productName === productName);
        if (isProductExists) {
            alert("Product with this name is already exists!");
            isValid = false;
            return;
        }

        const Number = randomNumber(1, 1000);
        console.log(`Random number is: ${Number}`);
        setNum(Number);

        const newDataWithUUID = {
            ...data,
            id: uuidv4(),
            productNum: indexNum,
            productCategory: data.productCategory,
            productImage: data.productImage,
            productFreshness: data.productFreshness,
            productDescription: data.productDescription,
            productPrice: data.productPrice,
        };
    
        setProductList([...productList, newDataWithUUID]);
        setIndex(indexNum + 1);
        setIsFormValid(isValid);
    };    

    //button random number pada console
    const [num, setNum] = useState(0);

    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    //button edit dan delete
    const [editingItem, setEditingItem] = useState("");

    // button edit
    const handleEdit = (id) => {
        dispatch(setEditProductId(id));
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
        dispatch(addProduct(editingItem));
    };

    // button delete
    const handleDelete = (id) => {
        dispatch(setDeleteProductId(id));
    };
    
    const confirmDelete = (id) => {
        const confirm = window.confirm("Are you sure you want to delete this product?");
        
        if (confirm) {
            const updatedProductList = productList.filter((item) => item.id !== id);
            dispatch(setProductList(updatedProductList));
            dispatch(setDeleteProductId(null));
        } else {
            dispatch(setDeleteProductId(null));
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
                            <option value={"Category 1"}>Category 1</option>
                            <option value={"Category 2"}>Category 2</option>
                            <option value={"Category 3"}>Category 3</option>
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
                        <label htmlFor="productDescription">Additional Description</label>
                        <div className="productDescription form-floating">
                            <textarea
                                onChange={(e) => {
                                    handleInputChange(e);
                                    setProductDescription(e.currentTarget.value);
                                }}
                                className={`productDescription form-control ${productDescriptionError ? "is-invalid" : ""}`}
                                placeholder="Leave a comment here"
                                name="productDescription floatingTextarea2"
                                id="productDescription floatingTextarea2"
                                style={{ height: 100 }}
                                required
                                defaultValue={data.productDescription}
                                data-testid="productDescriptionTextarea"
                            />
                            <label htmlFor="productDescription" />
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
                                    setProductPrice(e.currentTarget.value);
                                }}
                                className={`priceForm form-control ${productPriceError ? "is-invalid" : ""}`}
                                name="productPrice"
                                value={data.productPrice}
                                id="productPrice"
                                aria-label="Amount (to the nearest dollar)"
                                required
                            />
                            {productPriceError && (
                                <div className="invalid-feedback">
                                    <p className="text-red-500 font-medium">
                                        {productPriceError}
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
                        // data-bs-toggle="modal"
                        // data-bs-target="#exampleModal"
                        >Submit</button>
                    </div>
                </div>
            </>
            )}
            
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
                                <option value={"Category 1"}>Category 1</option>
                                <option value={"Category 2"}>Category 2</option>
                                <option value={"Category 3"}>Category 3</option>
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
                            <label htmlFor="productDescription">Additional Description</label>
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
                                    name="productDescription floatingTextarea2"
                                    id="productDescription floatingTextarea2"
                                    style={{ height: 100 }}
                                    required
                                    defaultValue={data.productDescription}
                                    data-testid="productDescriptionTextarea"
                                />
                                <label htmlFor="productDescription" />
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
                                    className={`priceForm form-control ${productPriceError ? "is-invalid" : ""}`}
                                    name="productPrice"
                                    id="productPrice"
                                    aria-label="Amount (to the nearest dollar)"
                                    required
                                />
                                {productPriceError && (
                                    <div className="invalid-feedback">
                                        <p className="text-red-500 font-medium">
                                            {productPriceError}
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
                            <th>Product Image</th>
                            <th>Product Freshness</th>
                            <th>Product Description</th>
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
                            <td>
                            <img src={item.productImage} alt="Product" width="100" height="100" />
                            </td>
                            <td>{item.productFreshness}</td>
                            <td>{item.productDescription}</td>
                            <td>${item.productPrice}</td>
                            <td className="tablebtn">
                                <Link to={`/productDetail/${item.productNum}`} state={{ productList: productList }} className="detailButton btn btn-primary" id="detailButton">
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

                                {editingItem && editingItem.id === item.id ? (
                                    <>
                                    <button
                                        className="saveButton btn btn-success"
                                        onClick={() => { handleSave(); }}
                                    >
                                        Save
                                    </button>
                                    <button
                                        className="cancelButton btn btn-warning"
                                        onClick={() => { setEditingItem(null); }}
                                    >
                                        Cancel
                                    </button>
                                    </>
                                ) : (
                                    <button
                                    className="editbutton btn btn-success"
                                    onClick={() => { handleEdit(item.id); }}
                                    id="editbutton"
                                    type="button"
                                    >
                                    Edit
                                    </button>
                                )}
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </form>
    );
}