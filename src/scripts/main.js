'use strict';

const populationElements = document.querySelectorAll('.population');

const populationNumbers = [];

for (let i = 0; i < populationElements.length; i++) {
  populationNumbers.push(+populationElements[i].innerText.replaceAll(',', ''));
}

const total = populationNumbers.reduce((acc, curr) => acc + curr, 0);
const average = Math.floor(total / populationNumbers.length);

const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

totalElement.innerText = total.toLocaleString();
averageElement.innerText = average.toLocaleString();
