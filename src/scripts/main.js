'use strict';

const listItems = document.querySelector('.list').children;

function convertFromString(amountString) {
  return +amountString.replace(/,/g, '');
}

let totalAmount = 0;

for (const item of listItems) {
  const countryAmount = item.querySelector('.population').innerHTML;
  const excludeComaNumber = convertFromString(countryAmount);

  totalAmount += excludeComaNumber;
}

const averageAmount = totalAmount / listItems.length;
const totalSpan = document.querySelector('.total-population');

totalSpan.innerHTML = totalAmount.toLocaleString();

const averageSpan = document.querySelector('.average-population');

averageSpan.innerHTML = averageAmount.toLocaleString();
