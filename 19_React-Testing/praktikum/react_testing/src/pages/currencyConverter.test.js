import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import CurrencyConverter from './currencyConverter';

test('Mengkonversi mata uang dengan benar', async () => {
  render(<CurrencyConverter />);

  // Menemukan elemen-elemen input dan button
  const amountInput = screen.getByLabelText('Amount :');
  const fromCurrencyInput = screen.getByLabelText('From Currency :');
  const toCurrencyInput = screen.getByLabelText('To Currency :');
  const convertButton = screen.getByText('Convert');

  // Isi nilai input
  fireEvent.change(amountInput, { target: { value: '100' } });
  fireEvent.change(fromCurrencyInput, { target: { value: 'USD' } });
  fireEvent.change(toCurrencyInput, { target: { value: 'IDR' } });

  // Klik tombol Convert
  fireEvent.click(convertButton);

  // Menunggu hingga hasil konversi muncul
  await waitFor(() => {
    const conversionResult = screen.getByText('Conversion Result :');
    expect(conversionResult).toBeInTheDocument();
  });

  // Periksa hasil konversi yang muncul
  const convertedAmount = screen.getByText('Conversion Result : 1561603');
  expect(convertedAmount).toBeInTheDocument();
});
