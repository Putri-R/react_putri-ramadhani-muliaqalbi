import bootstrap from './asset/bootstrap-logo.svg.svg';

export default function Body(){
    function submitForm(){
        validationForm();
        checkEmptyForm();
        checkProductName();
    }
    {/*fungsi disable tombol submit*/}
    function toggleSubmitButton(disable) {
        const submitButton = document.getElementById("submitbtn");
        submitButton.disabled = disable;
    }
    {/*fungsi mengecek input nama produk*/}
    function checkProductName() {
        const productName = document.getElementById("product-name").value;
    
        if (productName.length > 25) {
            alert("Product Name must not exceed 25 characters");
            toggleSubmitButton(true);
        }else if(productName.match(/[@/#{}]/)){
            alert("Product name must not contain symbols");
            toggleSubmitButton(true);
        }else {
            toggleSubmitButton(false);
        }
    }
    {/*fungsi mengecek form yang kosong*/}
    function checkEmptyForm(){
        const emptyProductName = document.getElementById("product-name").value;
        const emptyProductPrice = document.getElementById("product-price").value;

        if(emptyProductName.trim() == "" || emptyProductPrice == ""){
            alert("Please enter a valid data")
            toggleSubmitButton(true);
        }else {
            toggleSubmitButton(false);
        }
    }
    {/*fungsi memvalidasi form tidak ada yang kosong*/}
    function validationForm(){
        const productName = document.getElementById("product-name").value;
        const productCategory = document.getElementById("product-category").value;
        const productImage = document.getElementById("product-image").value;
        const productfreshness = document.querySelector('input[name="flexRadioDefault"]:checked');
        const productDescription = document.getElementById("floatingTextarea2").value;
        const productPrice = document.getElementById("product-price").value;

        if (productName.trim() == "") {
            alert("The Product Name field must be filled in");
            toggleSubmitButton(true);
        }else if (productCategory.trim() == "") {
            alert("The Product Category field must be filled in");
            toggleSubmitButton(true);
        }else if (productfreshness == null) {
            alert("The Product Freshness field must be filled in");
            toggleSubmitButton(true);
        }else if (productDescription.trim() == "") {
            alert("The Additional Description field must be filled in");
            toggleSubmitButton(true);
        }else if (productPrice.trim() == "") {
            alert("The Product Price field must be filled in");
            toggleSubmitButton(true);
        }else if (productImage.files.length === 0) {
            alert("The Image of Product field must be filled in");
            toggleSubmitButton(true);
        }else {
            toggleSubmitButton(false);
        }
    }
    {/*fungsi untuk konfirmasi data yang diinput*/}
    function submitConfirmed() {
        const productName = document.getElementById("product-name").value;
        const productCategory = document.getElementById("product-category").value;
        const productImage = document.getElementById("product-image").value;
        const productFreshness = document.querySelector('input[name="flexRadioDefault"]:checked').value;
        const productDescription = document.getElementById("floatingTextarea2").value;
        const productPrice = document.getElementById("product-price").value;

        const productData = {
            name: productName,
            category: productCategory,
            image: productImage,
            freshness: productFreshness,
            description: productDescription,
            price: productPrice,
        };

        {/*Memanggil fungsi untuk menambahkan data ke dalam tabel*/}
        tableData(productData);
        
        const dataConfirmed = `
            Product Details

            Product Name: ${productName}
            Product Category: ${productCategory}
            Product Freshness: ${productFreshness}
            Image of Product: ${productImage}
            Product Description: ${productDescription}
            Product Price: $${productPrice}
        `;
        
        alert(dataConfirmed);
    }
    {/*fungsi menampilkan data ke tabel*/}
    function tableData(productData){
        const table = document.getElementById("product-table");

        const newRow = table.insertRow(-1);

        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);
        const cell6 = newRow.insertCell(5);

        const name = document.createTextNode(productData.name);
        const category = document.createTextNode(productData.category);
        const image = document.createTextNode(productData.image);
        const pfreshness = document.createTextNode(productData.freshness);
        const description = document.createTextNode(productData.description);
        const price = document.createTextNode("$" + productData.price);

        {/*Tambahkan elemen-elemen teks ke dalam sel-sel tabel*/}
        cell1.appendChild(name);
        cell2.appendChild(category);
        cell3.appendChild(image);
        cell4.appendChild(pfreshness);
        cell5.appendChild(description);
        cell6.appendChild(price);
    }
    {/*fungsi menghapus data tabel*/}
    function deletebtn() {
        const tabel = document.getElementById('product-table');
        const rowCount = tabel.rows.length;

        if (rowCount > 1) {
            tabel.deleteRow(rowCount - 1);
        }else{
            alert("There is no data in the list table");
        }
    }
    {/*fungsi mencari data di tabel*/}
    function searchProducts() {
        let searchInput = document.getElementById('searchInput');
        const productTable = document.getElementById('product-table');
        const searchText = searchInput.value.toLowerCase();
        let productFound = false;

        for (let i = 1; i < productTable.rows.length; i++) {
            const productName = productTable.rows[i].cells[0].textContent.toLowerCase();

            if (productName.includes(searchText)) {
                productFound = true;

                {/*Menampilkan rincian produk dalam alert*/}
                const productCategory = productTable.rows[i].cells[1].textContent;
                const productImage = productTable.rows[i].cells[2].textContent;
                const productFreshness = productTable.rows[i].cells[3].textContent;
                const productDescription = productTable.rows[i].cells[4].textContent;
                const productPrice = productTable.rows[i].cells[5].textContent;

                const productDetails = `
                    Product Name             : ${productName}
                    Product Category         : ${productCategory}
                    Image of Product         : ${productImage}
                    Product Freshness        : ${productFreshness}
                    Additional Description   : ${productDescription}
                    Product Price            : ${productPrice}
                `;

                alert("Product Details :\n" + productDetails);
            }
        }
        if (!productFound) {
            alert("The product is not found");
        }
    }
    return(
        <>
        {/* body */}
        <section className="main-page">
            <div className="main-header">
            <img src={bootstrap} alt="Bootstrap" />
            <h1>Create Product</h1>
            <p>
                Below is an example form built entirely with Bootstrap’s form controls.
                Each required form group has a validation state that can be triggered by
                attempting to submit the form without completing it.
            </p>
            </div>
            <div className="container">
            <div className="row">
                {/* column 1 */}
                <div className="col" />
                {/* column 2 */}
                <form className="col-8 was-validated" name="form-product">
                <h2>Detail Product</h2>
                {/* product name */}
                <div className="form-group">
                    <div className="mb-3">
                    <label htmlFor="product-name" className="form-label">
                        Product Name
                    </label>
                    <input
                        type="text"
                        className="form-control is-valid"
                        name="product-name"
                        id="product-name"
                        required=""
                    />
                    </div>
                </div>
                {/* product category */}
                <div className="form-group">
                    <div className="category-form">
                    <label htmlFor="product-category">Product Category</label>
                    <select
                        className="form-select is-invalid"
                        name="product-category"
                        id="product-category"
                        required=""
                    >
                        <option selected="" />
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                    </select>
                    </div>
                </div>
                {/* image of product */}
                <div className="form-group">
                    <div className="mb-3 image-form">
                    <label htmlFor="product-image" className="form-label">
                        Image of Product
                    </label>
                    <input
                        type="file"
                        className="form-control is-valid"
                        name="product-image"
                        id="product-image"
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
                        className="form-check-input is-valid"
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
                        className="form-check-input is-valid"
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
                        className="form-check-input is-valid"
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
                    <div className="product-description">
                    <label htmlFor="form-floating">Additional Description</label>
                    <div className="form-floating">
                        <textarea
                        className="form-control is-valid"
                        placeholder="Leave a comment here"
                        name="floatingTextarea2"
                        id="floatingTextarea2"
                        style={{ height: 100 }}
                        required=""
                        defaultValue={""}
                        />
                        <label htmlFor="floatingTextarea2" />
                    </div>
                    </div>
                </div>
                {/* product price */}
                <div className="form-group">
                    <div className="price-form">
                    <label htmlFor="product-price">Product Price</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text">$</span>
                        <input
                        type="number"
                        className="form-control is-valid"
                        name="product-price"
                        id="product-price"
                        aria-label="Amount (to the nearest dollar)"
                        required=""
                        />
                    </div>
                    </div>
                </div>
                {/* submit button */}
                <div className="submit-button">
                    <button
                    type="button"
                    className="btn btn-primary"
                    id="submitbtn"
                    onClick={submitForm}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    >
                    Submit
                    </button>
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
                            onClick={submitConfirmed}
                        >
                            Yes
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                </form>
                {/* product table */}
                <div className="product-list">
                <h2 className="text-center">List Product</h2>
                <table id="product-table">
                    <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Category</th>
                        <th>Image of Product</th>
                        <th>Product Freshness</th>
                        <th>Additional Description</th>
                        <th>Product Price</th>
                    </tr>
                    </thead>
                    <tbody></tbody>
                </table>
                {/* delete and search buttons */}
                <input
                    className="form-control me-2 searchInput"
                    name="searchInput"
                    id="searchInput"
                    type="search"
                    placeholder="Search by Product Name"
                    aria-label="Search"
                />
                <div className="tablebtn">
                    <button
                    type="button"
                    className="btn btn-primary deleteButton"
                    id="deleteButton"
                    onClick={deletebtn}
                    >
                    Delete
                    </button>
                    <button
                    className="btn btn-outline-primary searchButton"
                    type="submit"
                    onClick={searchProducts}
                    >
                    Search
                    </button>
                </div>
                </div>
                {/* column 3 */}
                <div className="col" />
            </div>
            </div>
        </section>
        </>
    )
}