import {createSlice} from '@reduxjs/toolkit'

const initialValue = [
    {
        productName: "Totebag", 
        productCategory: "Category 1", 
        productImage: "--",
        productFreshness: "Brand New",
        productDescription: "Purple Totebag",
        productPrice: 10,
    }
]

export const itemSlice = createSlice({
    name: "item",
    initialState: {
        items: initialValue,
        editingItem: null,
        editingItemId: null,
    },
    reducers:{
        handleDelete: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        handleEdit: (state, action) => {
            state.editingItem = state.items.find((item) => item.id === action.payload);
            state.editingItemId = action.payload;
        },
        handleSave: (state) => {
            if (state.editingItem) {
                state.items = state.items.map((item) => {
                    if (item.id === state.editingItem.id) {
                        return state.editingItem;
                    }
                    return item;
                });
                state.editingItemId = null;
                state.editingItem = null;
            }
        },
    }
})

export const { handleDelete, handleEdit, handleSave } = itemSlice.actions;
export default itemSlice.reducer;