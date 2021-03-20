'use strict';

const listItems = document.querySelector(".list").children;

function convertFromString(amountString) {
  return  +amountString.replace(/,/g, '');
}

function convertToString(amount) {
  const amountString = '' + amount;
  const numberLength = amountString.length;
  let convertedString = '';

  for (let i = numberLength - 3; i > -3; i -= 3) {
    convertedString = amountString.substring(i, i + 3) + convertedString;

    if (i > 0) {
      convertedString = ',' + convertedString;
    }
  }

  return convertedString;
}

let totalAmount = 0;

for (const item of listItems) {
  const countryAmount = item.querySelector('.population').innerHTML;
  const excludeComaNumber = convertFromString(countryAmount);
  totalAmount += excludeComaNumber;  
}

const averageAmount = totalAmount / listItems.length;

const totalSpan = document.querySelector('.total-population');
totalSpan.innerHTML = convertToString(totalAmount);

const averageSpan = document.querySelector('.average-population');
averageSpan.innerHTML = convertToString(averageAmount);

