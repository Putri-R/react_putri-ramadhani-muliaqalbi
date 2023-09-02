function submitForm(){
    validationForm();
    checkEmptyForm();
    checkProductName();
}

function toggleSubmitButton(disable) {
    var submitButton = document.getElementById("submitbtn").value;
    submitButton.disabled = disable;
}

function checkProductName() {
    var productName = document.getElementById("product-name").value;
  
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
    var emptyProductName = document.getElementById("product-name").value;
    var emptyProductPrice = document.getElementById("price").value;

    if(emptyProductName.trim() == "" || emptyProductPrice == ""){
        alert("Please enter a valid data")
        toggleSubmitButton(true);
    }else {
        toggleSubmitButton(false);
    }
}

function validationForm(){
    var productName = document.getElementById("product-name").value;
    var productCategory = document.getElementById("product-category").value;
    var productImage = document.getElementById("product-image").value;
    var productfreshness = document.querySelector('input[name="flexRadioDefault"]:checked');
    var productDescription = document.getElementById("floatingTextarea2").value;
    var productPrice = document.getElementById("price").value;
    var submitButton = document.getElementById("submitbtn");

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
    var submitData = document.getElementById("submittedData");
    
    var productName = document.getElementById("product-name").value;
    var productCategory = document.getElementById("product-category").value;
    var productImage = document.getElementById("product-image").value;
    var productFreshness = document.querySelector('input[name="flexRadioDefault"]:checked').value;
    var productDescription = document.getElementById("floatingTextarea2").value;
    var productPrice = document.getElementById("price").value;

    var dataConfirmed = `
        <p><strong>Product Name:</strong> ${productName}</p>
        <p><strong>Product Category:</strong> ${productCategory}</p>
        <p><strong>Product Freshness:</strong> ${productFreshness}</p>
        <p><strong>Image of Product:</strong> ${productImage}</p>
        <p><strong>Product Description:</strong> ${productDescription}</p>
        <p><strong>Product Price:</strong> $${productPrice}</p>
    `;
    
    submitData.innerHTML = dataConfirmed;

    var modalYesButton = document.getElementById("modalYesButton");
    modalYesButton.addEventListener("click", function () {
        tableData();
        modal.hide();
    });

    var modal = new bootstrap.Modal(document.getElementById("exampleModal"));
    modal.show();
}

function tableData(){
    var productName = document.getElementById("product-name").value;
    var productCategory = document.getElementById("product-category").value;
    var productImage = document.getElementById("product-image").value;
    var productFreshness = document.querySelector('input[name="flexRadioDefault"]:checked').value;
    var productDescription = document.getElementById("floatingTextarea2").value;
    var productPrice = document.getElementById("price").value;

    var table = document.getElementById("product-table");

    var newRow = table.insertRow(-1);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);

    // Masukkan teks node ke dalam sel-sel tabel
    cell1.innerHTML = productName;
    cell2.innerHTML = productCategory;
    cell3.innerHTML = productImage;
    cell4.innerHTML = productFreshness;
    cell5.innerHTML = productDescription;
    cell6.innerHTML = "$" + productPrice;

    var modal = new bootstrap.Modal(document.getElementById("exampleModal"));
    modal.hide();

    submitData.innerHTML = "";
}

function deletebtn() {
    var tabel = document.getElementById('product-table');
    var rowCount = tabel.rows.length;

    if (rowCount > 1) {
        tabel.deleteRow(rowCount - 1);
    }else{
        alert("There is no data in the list table");
    }
}

function searchProducts() {
    var searchInput = document.getElementById('searchInput');
    var productTable = document.getElementById('product-table');
    var searchText = searchInput.value.toLowerCase();
    var productFound = false;

    for (var i = 1; i < productTable.rows.length; i++) {
        var productName = productTable.rows[i].cells[0].textContent.toLowerCase();

        if (productName.includes(searchText)) {
            productFound = true;

            // Menampilkan rincian produk dalam alert
            var productCategory = productTable.rows[i].cells[1].textContent;
            var productImage = productTable.rows[i].cells[2].textContent;
            var productFreshness = productTable.rows[i].cells[3].textContent;
            var productDescription = productTable.rows[i].cells[4].textContent;
            var productPrice = productTable.rows[i].cells[5].textContent;

            var productDetails = `
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
