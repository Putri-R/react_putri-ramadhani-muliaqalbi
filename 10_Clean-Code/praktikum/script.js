function submitForm(){
    validationForm();
    checkEmptyForm();
    checkProductName();
}
// fungsi disable tombol submit
function toggleSubmitButton(disable) {
    const submitButton = document.getElementById("submitbtn");
    submitButton.disabled = disable;
}
// fungsi mengecek input nama produk
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
// fungsi mengecek form yang kosong
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
// fungsi memvalidasi form tidak ada yang kosong
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
// fungsi untuk konfirmasi data yang diinput
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

    // Memanggil fungsi untuk menambahkan data ke dalam tabel
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
// fungsi menampilkan data ke tabel
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

    // Tambahkan elemen-elemen teks ke dalam sel-sel tabel
    cell1.appendChild(name);
    cell2.appendChild(category);
    cell3.appendChild(image);
    cell4.appendChild(pfreshness);
    cell5.appendChild(description);
    cell6.appendChild(price);
}
// fungsi menghapus data tabel
function deletebtn() {
    const tabel = document.getElementById('product-table');
    const rowCount = tabel.rows.length;

    if (rowCount > 1) {
        tabel.deleteRow(rowCount - 1);
    }else{
        alert("There is no data in the list table");
    }
}
// fungsi mencari data di tabel
function searchProducts() {
    let searchInput = document.getElementById('searchInput');
    const productTable = document.getElementById('product-table');
    const searchText = searchInput.value.toLowerCase();
    let productFound = false;

    for (let i = 1; i < productTable.rows.length; i++) {
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