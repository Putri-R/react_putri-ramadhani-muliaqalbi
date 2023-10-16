import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store/store';
import ProductForm from './createproduct_components/productForm';

// Helper function to render ProductForm within Redux Provider
const renderProductForm = () => {
  return render(
    <Provider store={store}>
      <ProductForm />
    </Provider>
  );
};

test('renders Product Name input field', () => {
  const { getByLabelText } = renderProductForm();
  const productNameInput = getByLabelText('Product Name');
  expect(productNameInput).toBeInTheDocument();
});

test('renders Product Category select field', () => {
  const { getByLabelText } = renderProductForm();
  const productCategorySelect = getByLabelText('Product Category');
  expect(productCategorySelect).toBeInTheDocument();
});

test('renders Image of Product input field', () => {
  const { getByLabelText } = renderProductForm();
  const productImageInput = getByLabelText('Image of Product');
  expect(productImageInput).toBeInTheDocument();
});

test('renders Product Freshness radio buttons', () => {
  const { getByLabelText } = renderProductForm();
  const brandNewRadio = getByLabelText('Brand New');
  const secondHandRadio = getByLabelText('Second Hand');
  const refurbishedRadio = getByLabelText('Refurbished');
  expect(brandNewRadio).toBeInTheDocument();
  expect(secondHandRadio).toBeInTheDocument();
  expect(refurbishedRadio).toBeInTheDocument();
});

test('displays error message for empty Additional Description', () => {
  const { getByTestId, queryByText } = renderProductForm();
  const productDescriptionTextarea = getByTestId('productDescriptionTextarea');
  
  fireEvent.change(productDescriptionTextarea, { target: { value: '' } });
  
  const errorMessage = queryByText('The Additional Description field must be filled in');
  expect(errorMessage).toBeInTheDocument();
});

test('displays error message for empty Product Price', () => {
  const { getByLabelText, getByText } = renderProductForm();
  const productPriceInput = getByLabelText('Product Price');
  
  fireEvent.change(productPriceInput, { target: { value: '' } });
  
  const errorMessage = getByText('The Product Price field must be filled in');
  expect(errorMessage).toBeInTheDocument();
});

test('displays error message for invalid Product Name', () => {
  const { getByLabelText, getByText } = renderProductForm();
  const productNameInput = getByLabelText('Product Name');
  
  fireEvent.change(productNameInput, { target: { value: 'InvalidProductName' } });
  
  const errorMessage = getByText('Product name must not exceed 10 characters!');
  expect(errorMessage).toBeInTheDocument();
});

test('displays error message for empty Product Category', () => {
  const { getByLabelText, getByText } = renderProductForm();
  const productCategorySelect = getByLabelText('Product Category');
  
  fireEvent.change(productCategorySelect, { target: { value: '' } });
  
  const errorMessage = getByText('Please select a product category');
  expect(errorMessage).toBeInTheDocument();
});

test('displays no error message for valid Additional Description', () => {
  const { getByTestId, queryByText } = renderProductForm();
  const productDescriptionTextarea = getByTestId('productDescriptionTextarea');
  
  fireEvent.change(productDescriptionTextarea, { target: { value: 'Valid Description' } });
  
  const errorMessage = queryByText('The Additional Description field must be filled in');
  expect(errorMessage).toBeInTheDocument();
});

test('displays no error message for valid Product Price', () => {
  const { getByLabelText, queryByRole } = renderProductForm();
  const productPriceInput = getByLabelText('Product Price');
  
  fireEvent.change(productPriceInput, { target: { value: '50' } });
  
  const errorMessage = queryByRole('alert');
  expect(errorMessage).toBeNull();
});

