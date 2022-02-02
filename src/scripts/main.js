'use strict';

// write your code here

const elements = document.querySelectorAll('.population');

let totalValue = 0;

for (let i = 0; i < elements.length; i++) {
  totalValue += +elements[i].innerText.replaceAll(',', '');
}

let averageValue = totalValue / elements.length;

totalValue = totalValue.toLocaleString('en-US');
averageValue = averageValue.toLocaleString('en-US');

document.querySelector(`.average-population`).innerText = averageValue;
document.querySelector('.total-population').innerText = totalValue;
