'use strict';

// write your code here
const popSpans = document.querySelectorAll('.population');
const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');
// get str inner text; change comma to ''; str convert to num
const dataNums = [...popSpans].map(span => {
  return parseFloat(span.innerText.replace(/,/g, ''));
});
// calculate the sum of numerical values using the .reduce()
const totalPopulation = dataNums.reduce((sum, value) => sum + value, 0);
const totalCommasFormat = thousandsSeparator(totalPopulation);
const averagePopulation = thousandsSeparator(totalPopulation / dataNums.length);

// insert the obtained results into the corresponding places of the code
totalSpan.textContent = totalCommasFormat;
averageSpan.textContent = averagePopulation;

function thousandsSeparator(num) {
  return num.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,').replace('.0', '');
}
