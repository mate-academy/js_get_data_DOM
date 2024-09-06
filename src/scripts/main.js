'use strict';

const populationElements = document.querySelectorAll('.population');
const populationNumbers = [];

populationElements.forEach((element) => {
  const populationNumber = parseInt(element.textContent.replace(/,/g, ''), 10);

  if (!isNaN(populationNumber)) {
    populationNumbers.push(populationNumber);
  }
});

if (populationNumbers.length > 0) {
  let total = populationNumbers.reduce((acc, num) => acc + num, 0);
  let average = total / populationNumbers.length;

  total = total.toLocaleString('en-US');
  average = average.toLocaleString('en-US');

  document.querySelector('.average-population').textContent =
    average.toLocaleString('en-US');

  document.querySelector('.total-population').textContent =
    total.toLocaleString('en-US');
} else {
  document.querySelector('.average-population').textContent = 'No data';
  document.querySelector('.total-population').textContent = 'No data';
}
