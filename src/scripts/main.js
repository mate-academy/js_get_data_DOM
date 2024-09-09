'use strict';

// Get all elements with the class 'population'
const allElementSpan = document.querySelectorAll('.population');

let totalValue = 0;
let count = 0;

for (let i = 0; i < allElementSpan.length; i++) {
  // Get the text content and remove commas
  let value = allElementSpan[i].textContent.replace(/,/g, '');

  // Check if the value is a number and convert it
  if (!isNaN(value)) {
    value = +value;

    totalValue += value;
    count++;
  }
}

// Calculate the average value
const averageValue = totalValue / count;

// Format the total and average values
const formattedTotal = totalValue.toLocaleString('en-US');
const formattedAverage = averageValue.toLocaleString('en-US');

document.querySelector('span.average-population').textContent =
  formattedAverage;
document.querySelector('span.total-population').textContent = formattedTotal;
