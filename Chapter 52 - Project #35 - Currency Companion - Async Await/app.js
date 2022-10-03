async function getExchangeRate(fromCurrency, toCurrency) {
  const response = await fetch('8gdyH2JdIj1oPwtDkEjxXHIQKbsShX8c');

  const currencyData = await response.json();
}

getExchangeRate();
