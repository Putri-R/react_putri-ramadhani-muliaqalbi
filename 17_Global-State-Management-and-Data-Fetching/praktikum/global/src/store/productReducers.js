const initialState = {
    productName: '',
    productCategory: '',
    productDescription: '',
    priceForm: '',
    productNameError: '',
    productCategoryError: '',
    productDescriptionError: '',
    priceFormError: '',
    editProductId: null,
    deleteProductId: null,
    products: [],
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCT_NAME':
            return { ...state, productName: action.payload };
        case 'SET_PRODUCT_CATEGORY':
            return { ...state, productCategory: action.payload };
        case 'SET_PRODUCT_DESCRIPTION':
            return { ...state, productDescription: action.payload };
        case 'SET_PRODUCT_PRICE':
            return { ...state, priceForm: action.payload };
        case "SET_PRODUCT_NAME_ERROR":
            return { ...state, productNameError: action.payload };
        case "SET_PRODUCT_CATEGORY_ERROR":
            return { ...state, productCategoryError: action.payload };
        case "SET_PRODUCT_DESCRIPTION_ERROR":
            return { ...state, productDescriptionError: action.payload };
        case "SET_PRODUCT_PRICE_ERROR":
            return { ...state, productPriceError: action.payload };
        case 'SET_EDIT_PRODUCT_ID':
            return { ...state, editProductId: action.payload };
        case 'SET_DELETE_PRODUCT_ID':
            return { ...state, deleteProductId: action.payload };
        case 'ADD_PRODUCT':
            return {
                ...state,
                products: [...state.products, action.payload],
            };
        default:
            return state;
    }
  };
  
  export default productReducer;
  