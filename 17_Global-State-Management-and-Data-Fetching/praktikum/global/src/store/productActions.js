export const setProductName = (name) => ({
    type: 'SET_PRODUCT_NAME',
    payload: name,
});
  
export const setProductCategory = (category) => ({
    type: 'SET_PRODUCT_CATEGORY',
    payload: category,
});

export const setProductDescription = (description) => ({
    type: 'SET_PRODUCT_DESCRIPTION',
    payload: description,
});
  
export const setProductPrice = (price) => ({
    type: 'SET_PRODUCT_PRICE',
    payload: price,
});

export const setProductNameError = (error) => ({
    type: "SET_PRODUCT_NAME_ERROR",
    payload: error,
});
  
export const setProductCategoryError = (error) => ({
    type: "SET_PRODUCT_CATEGORY_ERROR",
    payload: error,
});

export const setProductDescriptionError = (error) => ({
    type: "SET_PRODUCT_DESCRIPTION_ERROR",
    payload: error,
});
  
export const setProductPriceError = (error) => ({
    type: "SET_PRODUCT_PRICE_ERROR",
    payload: error,
});
  
export const setEditProductId = (id) => ({
    type: 'SET_EDIT_PRODUCT_ID',
    payload: id,
});
  
export const setDeleteProductId = (id) => ({
    type: 'SET_DELETE_PRODUCT_ID',
    payload: id,
});
  
export const addProduct = (product) => ({
    type: 'ADD_PRODUCT',
    payload: product,
});  

export const setProductList = (newProductList) => ({
    type: 'SET_PRODUCT_LIST',
    payload: newProductList,
});
