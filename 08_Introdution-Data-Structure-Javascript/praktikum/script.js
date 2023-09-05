function submitForm(){
    validationForm();
    checkEmptyForm();
    checkProductName();
}

function toggleSubmitButton(disable) {
    const submitButton = document.getElementById("submitbtn").value;
    submitButton.disabled = disable;
}

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

function checkEmptyForm(){
    const emptyProductName = document.getElementById("product-name").value;
    const emptyProductPrice = document.getElementById("price").value;

    if(emptyProductName.trim() == "" || emptyProductPrice == ""){
        alert("Please enter a valid data")
        toggleSubmitButton(true);
    }else {
        toggleSubmitButton(false);
    }
}

function validationForm(){
    const productName = document.getElementById("product-name").value;
    const productCategory = document.getElementById("product-category").value;
    const productImage = document.getElementById("product-image").value;
    const productfreshness = document.querySelector('input[name="flexRadioDefault"]:checked');
    const productDescription = document.getElementById("floatingTextarea2").value;
    const productPrice = document.getElementById("price").value;
    const submitButton = document.getElementById("submitbtn");

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

function submitConfirmed() {
    const submitData = document.getElementById("submittedData");
    
    const productName = document.getElementById("product-name").value;
    const productCategory = document.getElementById("product-category").value;
    const productImage = document.getElementById("product-image").value;
    const productFreshness = document.querySelector('input[name="flexRadioDefault"]:checked').value;
    const productDescription = document.getElementById("floatingTextarea2").value;
    const productPrice = document.getElementById("price").value;

    const dataConfirmed = `
        <p><strong>Product Name:</strong> ${productName}</p>
        <p><strong>Product Category:</strong> ${productCategory}</p>
        <p><strong>Product Freshness:</strong> ${productFreshness}</p>
        <p><strong>Image of Product:</strong> ${productImage}</p>
        <p><strong>Product Description:</strong> ${productDescription}</p>
        <p><strong>Product Price:</strong> $${productPrice}</p>
    `;
    
    submitData.innerHTML = dataConfirmed;

    const modalYesButton = document.getElementById("modalYesButton");
    modalYesButton.addEventListener("click", function () {
        tableData();
        modal.hide();
    });

    const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
    modal.show();
}

function tableData(){
    const productName = document.getElementById("product-name").value;
    const productCategory = document.getElementById("product-category").value;
    const productImage = document.getElementById("product-image").value;
    const productFreshness = document.querySelector('input[name="flexRadioDefault"]:checked').value;
    const productDescription = document.getElementById("floatingTextarea2").value;
    const productPrice = document.getElementById("price").value;

    const table = document.getElementById("product-table");

    const newRow = table.insertRow(-1);

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);

    // Masukkan teks node ke dalam sel-sel tabel
    cell1.innerHTML = productName;
    cell2.innerHTML = productCategory;
    cell3.innerHTML = productImage;
    cell4.innerHTML = productFreshness;
    cell5.innerHTML = productDescription;
    cell6.innerHTML = "$" + productPrice;

    const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
    modal.hide();

    submitData.innerHTML = "";
}

function deletebtn() {
    const tabel = document.getElementById('product-table');
    const rowCount = tabel.rows.length;

    if (rowCount > 1) {
        tabel.deleteRow(rowCount - 1);
    }else{
        alert("There is no data in the list table");
    }
}

function searchProducts() {
    const searchInput = document.getElementById('searchInput');
    const productTable = document.getElementById('product-table');
    const searchText = searchInput.value.toLowerCase();
    let productFound = false;

    for (const i = 1; i < productTable.rows.length; i++) {
        const productName = productTable.rows[i].cells[0].textContent.toLowerCase();

        if (productName.includes(searchText)) {
            productFound = true;

            // Menampilkan rincian produk dalam alert
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
