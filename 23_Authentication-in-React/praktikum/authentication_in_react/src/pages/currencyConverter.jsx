import React, { Component } from 'react';
import Navigasi from './createproduct_components/navigasi';
import Footer from './landingpage_components/footer';

class CurrencyConverter extends Component {
  constructor(props) {
    // memberikan nilai default
    super(props);
    this.state = {
      amount: 100,
      fromCurrency: "USD",
      toCurrency: "IDR",
      convertedAmount: null
    };
  }

  convertCurrency = () => {
    const { amount, fromCurrency, toCurrency } = this.state;

    // mengambil kurs mata uang yang akan dikonversi
    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
      .then(response => response.json())
      .then(data => {
        const convertedAmount = amount * data.rates[toCurrency];
        this.setState({ convertedAmount });
      })
      .catch(error => {
        console.error("Terjadi kesalahan saat mengambil data kurs: ", error);
      });
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { amount, fromCurrency, toCurrency, convertedAmount } = this.state;

    return (
      <>
        <Navigasi/>
        <div className='currencyConverter'>
          <h1>Currency Conventer</h1>
          <div className='converterInput'>
            <div>
              <label>Amount :</label>
              <input
                type="number"
                name="amount"
                className='form-control'
                value={amount}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label>From Currency :</label>
              <input
                type="text"
                name="fromCurrency"
                className='form-control'
                value={fromCurrency}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label>To Currency :</label>
              <input
                type="text"
                name="toCurrency"
                className='form-control'
                value={toCurrency}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <button 
            onClick={this.convertCurrency}
            className="btn btn-primary"
          >Convert</button>

          <div className='convertResult'>
            {convertedAmount !== null && (
              <p>Conversion Result : {convertedAmount}</p>
            )}
          </div>
        </div>
        <Footer/>
      </>
    );
  }
}

export default CurrencyConverter;