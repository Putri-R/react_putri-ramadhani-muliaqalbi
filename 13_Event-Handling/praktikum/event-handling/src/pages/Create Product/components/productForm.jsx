import React, { useEffect, useState } from "react";
import ButtonRandomNumber from './buttonRandomNumber';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productName.length <= 0) {
      alert("Please enter a valid product name!");
      return;
    }
  };

  return (
    <form className="col-8" onSubmit={handleSubmit} name="form-product">
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
                id="productName"
                required=""
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
                    onChange={(e) => setProductCategory(e.currentTarget.value)}
                    className={`form-select ${productCategoryError ? "is-invalid" : ""}`}
                    name="productCategory"
                    id="productCategory"
                    required=""
                >
                    <option selected="" />
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
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
                    required=""
                />
            </div>
        </div>
        {/* product freshness */}
        <div className="form-group">
            <label htmlFor="flexRadioDefault" className="product-freshness">
                Product Freshness
            </label>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    required=""
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Brand New
                </label>
            </div>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    required=""
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Second Hand
                </label>
            </div>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    required=""
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Refufbished
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
                    required=""
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
        {/* product price */}
        <div className="form-group">
            <div className="priceForm">
                <label htmlFor="product-price">Product Price</label>
                <div className="priceForm input-group mb-3">
                    <span className="priceForm input-group-text">$</span>
                    <input
                    type="number"
                    onChange={(e) => setPriceForm(e.currentTarget.value)}
                    className={`priceForm form-control ${priceFormError ? "is-invalid" : ""}`}
                    name="product-price"
                    id="product-price"
                    aria-label="Amount (to the nearest dollar)"
                    required=""
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
            <ButtonRandomNumber/>
        </div>
        {/* modal */}
        <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
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
                >
                    No
                </button>
                <button
                    type="button"
                    className="btn btn-primary"
                    id="modalYesButton"
                    data-bs-dismiss="modal"
                >
                    Yes
                </button>
                </div>
            </div>
            </div>
        </div>
    </form>
  );
}
